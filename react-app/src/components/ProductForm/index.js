import React, { useEffect, useState } from 'react'
import { CreateSingleProduct } from '../../store/products'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

let categories = [{value:'Cars' }, {value:'Clothing'}, {value:'Electronics'}, {value:'Home Goods'}, {value:'miscellaneous'}]
function ProductForm() {
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState(categories[0].value)
    const [stock, setStock] = useState('')
    const history = useHistory()

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()

        let newProduct = {
            'product_name': productName,
            description,
            price,
            category,
            stock: 1
        }

        await dispatch(CreateSingleProduct(newProduct))

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
