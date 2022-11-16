import React, { useEffect, useState } from 'react'
import { CreateSingleProduct, postImages } from '../../store/products'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

let categories = [{ value: 'Cars' }, { value: 'Clothing' }, { value: 'Electronics' }, { value: 'Home Goods' }, { value: 'miscellaneous' }]
function ProductForm() {
    const prodlist = useSelector(state => state.products.products)
    console.log('###########', prodlist)
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

    const handleSubmit = async (e) => {
        e.preventDefault()

        let newProduct = {
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


        // dispatch(CreateSingleProduct(newProduct)).then((data) => (
        //     dispatch(postImages(newImages, prodlist[prodlist.length - 1].id)),
        //     console.log('datatatttta', data),
        //     console.log('hit a second time', prodlist)
        //))
        dispatch(CreateSingleProduct(newProduct))

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
                <input type='text' value={image1} onChange={(e) => setImage1(e.target.value)} />
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
