import React, { useEffect, useState } from 'react'
import { CreateSingleProduct, getUserProducts, postImages } from '../../store/products'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './ProductForm.css'

let categories = [{ value: 'Cars' }, { value: 'Clothing' }, { value: 'Electronics' }, { value: 'Home Goods' }, { value: 'Miscellaneous' }]
function ProductForm() {
    const prodlist = useSelector(state => state.products.products)
    // console.log('###########', prodlist)

    const [error, setError] = useState([])
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState(categories[0].value)
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [image4, setImage4] = useState('')
    const history = useHistory()

    const dispatch = useDispatch()

    const imageCheck = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/
    const handleSubmit = (e) => {
        let priceInt = parseFloat(price)
        let newprice = (Math.round(priceInt * 100) / 100).toFixed(2)
        e.preventDefault()
        setError([])

        if (productName.length < 5 || productName.length > 240) {
            setError(['Product Name must be between 5 and 240'])
            return
        }
        if (description.length < 5 || description.length > 240) {
            setError(['Description must be between 5 and 240 characters'])
            return
        }

        if (Number(price) > 1000000) {
            setError(['Price must be between $1 and $1,000,000'])
            return
        }

        if (!image1.split('?')[0].match(imageCheck)) {
            setError(['Image must be valid: jpg, jpeg, png, webp, avif, gif, svg'])
            return
        }



        let newProduct = {
            'product_name': productName,
            description,
            'price': newprice,
            category,
            stock: 1,
            image1,
            image3,
            image4,
            image2,
        }


        // if (productName.length > 5 && description.length > 5 && price < 1000000 && price > 1 && imageCheck) {

            setError([])
            dispatch(CreateSingleProduct(newProduct)).then(() => dispatch(getUserProducts()))

            return history.push('/your-products')
        // }

    }


    return (
        <div className='product-form-wrapper'>

        <form onSubmit={handleSubmit} className='formContainer'>
            <h2 className='alignCenter'>
                Start selling on YSTE!
            </h2>
            {error && (
                <div className="create-errors-map">{error.map((error, i) => (
                    <div key={i}>{error}</div>
                    ))}
                </div>
            )}
            <div className='productform'>
                <div className='hello'>
                    <input minlength="5" maxlength="255" className='inputField' required type='text' placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                </div>
                <div>
                    <input minlength="5" maxlength="255" required className='inputField' type='text' placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <input required className='inputField' type='number' min={1} step='0.01' placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className='category'>
                    <label >
                        Tell us what your selling:
                    </label>
                    <select className='category-select' value={category} onChange={(e) => setCategory(e.target.value)} >
                        {categories.map((category, index) => {
                            return (<option key={index} value={category.value}>
                                {category.value}
                            </option>
                            )
                        })}

                    </select>
                </div>
                <div className='imageurl'>
                    <input minlength="3" type='text' className='inputField' placeholder="Image Required" required value={image1} onChange={(e) => setImage1(e.target.value)} />
                </div>
                <div>
                    <input type='text' className='inputField' placeholder="Optional Image" value={image2} onChange={(e) => setImage2(e.target.value)} />
                </div>
                <div>
                    <input type='text' className='inputField' placeholder="Optional Image" value={image3} onChange={(e) => setImage3(e.target.value)} />
                </div>
                <div>
                    <input type='text' className='inputField' placeholder="Optional Image" value={image4} onChange={(e) => setImage4(e.target.value)} />
                </div>
                <div className='createSubmitWrapper'>
                    <button className='productsubmit' type='submit'>
                    Submit
                    </button>
                </div>
            </div>
        </form >
    </div>

    )
}

export default ProductForm
