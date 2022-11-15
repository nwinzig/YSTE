import React, { useEffect, useState } from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {editItem} from '../../store/products'
import { useDispatch, useSelector } from 'react-redux'

let categories = [{ value: 'Cars' }, { value: 'Clothing' }, { value: 'Electronics' }, { value: 'Home Goods' }, { value: 'miscellaneous' }]

function EditProductForm () {
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    const history = useHistory()
    const {productId} = useParams()
    
    const product = products.filter(product => product.id == productId)[0]
    const [productName, setProductName] = useState(product.product_name)
    const [description, setDescription] = useState(product.description)
    const [price, setPrice] = useState(product.price)
    const [category, setCategory] = useState(product.category)
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        let obj = {
            'product_name': productName,
            description,
            price,
            category,
            stock: 1
        }

        await dispatch(editItem(obj, productId))

        history.push('/your-products')

    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label>Product Name:</label>
            <input value={productName} onChange={e => setProductName(e.target.value)}/>
            </div>
            <div>
            <label>Description:</label>
            <input value={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <div>
            <label>Price</label>
            <input value={price} onChange={e => setPrice(e.target.value)} />
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
            <button type='submit'>Submit</button>
        </form>
    )
}

export default EditProductForm