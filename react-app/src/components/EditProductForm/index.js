import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { editItem } from '../../store/products'
import { useDispatch, useSelector } from 'react-redux'

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([])

        if (description.length < 10 || description > 240) {
            setErrors(['Description must be between 10 and 240 characters'])
            return
        }

        if (Number(price) > 25000) {
            setErrors(['Price must be between $1 and $25,000'])
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

        await dispatch(editItem(obj, productId))

        history.push('/your-products')

    }
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {!!errors.length && errors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
            <div>
                <label>Product Name:</label>
                <input required value={productName} onChange={e => setProductName(e.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <input required value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Price</label>
                <input required value={price} onChange={e => setPrice(e.target.value)} />
            </div>
            <div>
                <label>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} >
                    {categories.map((category, index) => {
                        return (<option key={index} value={category.value}>
                            {category.value}
                        </option>
                        )
                    })}

                </select>
            </div>
            <div>
                <label>Image Url</label>
                <input required type='text' value={image1} onChange={(e) => setImage1(e.target.value)} />
            </div>
            <div>
                <label>Image Url</label>
                <input type='text' value={image2} onChange={(e) => setImage2(e.target.value)} />
            </div>
            <div>
                <label>Image Url</label>
                <input type='text' value={image3} onChange={(e) => setImage3(e.target.value)} />
            </div>
            <div>
                <label>Image Url</label>
                <input type='text' value={image4} onChange={(e) => setImage4(e.target.value)} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default EditProductForm
