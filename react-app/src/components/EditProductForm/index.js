import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { editItem } from '../../store/products'
import { useDispatch, useSelector } from 'react-redux'
import './EditProductForm.css'


let categories = [{ value: 'Cars' }, { value: 'Clothing' }, { value: 'Electronics' }, { value: 'Home Goods' }, { value: 'miscellaneous' }]

function EditProductForm() {
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    const history = useHistory()
    const { productId } = useParams()
    const [errors, setErrors] = useState([])

    const product = products?.filter(product => product?.id == productId)[0]
    const [productName, setProductName] = useState(product?.product_name)
    const [description, setDescription] = useState(product?.description)
    const [price, setPrice] = useState(product?.price)
    const [category, setCategory] = useState(product?.category)
    const [image1, setImage1] = useState(product?.image1)
    const [image2, setImage2] = useState(product?.image2)
    const [image3, setImage3] = useState(product?.image3)
    const [image4, setImage4] = useState(product?.image4)

    const imageCheck = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([])

        if (description.length < 1 || description > 240) {
            setErrors(['Description must be between 1 and 240 characters'])
            return
        }

        if (Number(price) > 1000000) {
            setErrors(['Price must be between $1 and $1,000,000'])
            return
        }

        if (!image1.split('?')[0].match(imageCheck)) {
            setErrors(['Image must be valid: jpg, jpeg, png, webp, avif, gif, svg'])
            return
        }
        let obj = {
            'product_name': productName,
            description,
            price,
            category,
            stock: 1,
            image1,
            image3,
            image4,
            image2,
        }
        setErrors([])
        dispatch(editItem(obj, productId))
        history.push('/your-products')


    }
    return (
        <div className='product-forms-wrapper'>

        <form onSubmit={handleSubmit} className='formContainer'>
            <h2 className='alignCenter'>
                Update your product
            </h2>
            {errors && (
                <ul className="error-map">{errors.map((error, i) => (
                    <li key={i}>{error}</li>
                    ))}
                </ul>
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
                    <select  className='category-select' value={category} onChange={(e) => setCategory(e.target.value)} >
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

export default EditProductForm
