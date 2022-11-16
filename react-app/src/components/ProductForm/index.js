import React, { useEffect, useState } from 'react'
import { CreateSingleProduct, postImages } from '../../store/products'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

let categories = [{ value: 'Cars' }, { value: 'Clothing' }, { value: 'Electronics' }, { value: 'Home Goods' }, { value: 'miscellaneous' }]
function ProductForm() {
    const prodlist = useSelector(state => state.products)
    console.log('###########', prodlist)
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState(categories[0].value)
    const [product_image, setProduct_image] = useState('')
    const history = useHistory()

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()

        let newProduct = {
            'product_name': productName,
            description,
            price,
            category,
            stock: 1,
        }

        let newImages = {
            product_image
        }

        await dispatch(CreateSingleProduct(newProduct)).then((data) => (
            // dispatch(postImages(newImages, data[data.length - 1].id))
            console.log('datatatttta', data)
        ))
        console.log('hit a second time', prodlist)

        return history.push('/')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Product Name</label>
                <input type='text' value={productName} onChange={(e) => setProductName(e.target.value)} />
            </div>
            <div>
                <label>Description</label>
                <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label>Price</label>
                <input type='text' value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label>Image Url</label>
                <input type='text' value={product_image} onChange={(e) => setProduct_image(e.target.value)} />
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
            <button type='submit'>
                Submit
            </button>
        </form>
    )
}

export default ProductForm
