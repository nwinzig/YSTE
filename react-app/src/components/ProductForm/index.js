import React, { useEffect, useState } from 'react'
import { CreateSingleProduct, getUserProducts, postImages } from '../../store/products'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './ProductForm.css'

let categories = [{ value: 'Cars' }, { value: 'Clothing' }, { value: 'Electronics' }, { value: 'Home Goods' }, { value: 'miscellaneous' }]
function ProductForm() {
    const prodlist = useSelector(state => state.products.products)
    // console.log('###########', prodlist)

    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState(categories[0].value)
    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')
    const [image3, setImage3] = useState('')
    const [image4, setImage4] = useState('')
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        let priceInt = parseFloat(price)
        let newprice = (Math.round(priceInt * 100) / 100).toFixed(2)
        e.preventDefault()
        let errors = []
        if (productName.length < 5 || productName.length > 240) {
            errors.push(['Product Name must be between 5 and 240'])

        }
        if (description.length < 5 || description.length > 240) {
            errors.push(['Description must be between 5 and 240 characters'])

        }

        if (Number(price) > 1000000) {
            errors.push(['Price must be between $1 and $1,000,000'])

        }
        setErrors(errors)

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

        if (productName.length > 5 && description.length > 5 && price < 1000000 && price > 1){

            dispatch(CreateSingleProduct(newProduct)).then(() => dispatch(getUserProducts()))

            return history.push('/your-products')
        }

    }


    return (
        <form onSubmit={handleSubmit}>
            {errors && (
            <ul className="error-map">{errors.map((error, i) => (
                <li key={i}>{error}</li>
                ))}
                </ul>
            )}
            <div className='productform'>
                <div className='hello'>
                    <label className='productlable' >Product Name</label>
                    <input className='a' required type='text' placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                </div>
                <div>
                    <label className='productlable' >Description</label>
                    <input required className='b' type='text' placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label className='productlable' >Price</label>
                    <input required className='c' type='number' min={1} step='0.01' placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className='imageurl'>
                    <label className='productlable'>Image Url</label>
                    <input type='text' className='d' placeholder="Image Required" required value={image1} onChange={(e) => setImage1(e.target.value)} />
                </div>
                <div>
                    {/* <label className='productlable' >Image Url</label> */}
                    <input type='text' className='e' placeholder="Optional Image" value={image2} onChange={(e) => setImage2(e.target.value)} />
                </div>
                <div>
                    {/* <label className='productlable' Image Url> </label> */}
                    <input type='text' className='f' placeholder="Optional Image" value={image3} onChange={(e) => setImage3(e.target.value)} />
                </div>
                <div>
                    {/* <label className='productlable' >Image Url</label> */}
                    <input type='text' className='g' placeholder="Optional Image" value={image4} onChange={(e) => setImage4(e.target.value)} />
                </div>

                <div className='category'>
                    <label className='catlable' >Category</label>
                    <select className='categoryselect' value={category} onChange={(e) => setCategory(e.target.value)} >
                        {categories.map((category, index) => {
                            return (<option key={index} value={category.value}>
                                {category.value}
                            </option>
                            )
                        })}

                    </select>
                </div>
                <button className='productsubmit' type='submit'>
                    Submit
                </button>
            </div>
        </form >

    )
}

export default ProductForm
