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
    const history = useHistory()

    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let priceInt = parseFloat(price)
        let newprice = (Math.round(priceInt * 100) / 100).toFixed(2)
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


        // dispatch(CreateSingleProduct(newProduct)).then((data) => (
        //     dispatch(postImages(newImages, prodlist[prodlist.length - 1].id)),
        //     console.log('datatatttta', data),
        //     console.log('hit a second time', prodlist)
        //))
        dispatch(CreateSingleProduct(newProduct)).then(() => dispatch(getUserProducts()))

        return history.push('/your-products')
    }

    return (
        <div classname='createitemformwrapper'>

            <form onSubmit={handleSubmit}>
                <div className='productform'>

                    <div className='hello'>
                        <label>Product Name</label>
                        <input className='dog' required type='text' placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                    </div>
                    <div>
                        <label>Description</label>
                        <input required type='text' placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div>
                        <label>Price</label>
                        <input required type='number' min={1} step='0.01' placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className='imageurl'>
                        <label className='imageurlwrap'>Image Url</label>
                        <input type='text' placeholder="Image Required" required value={image1} onChange={(e) => setImage1(e.target.value)} />
                    </div>
                    <div>
                        <label>Image Url</label>
                        <input type='text' placeholder="Optional Image" value={image2} onChange={(e) => setImage2(e.target.value)} />
                    </div>
                    <div>
                        <label>Image Url</label>
                        <input type='text' placeholder="Optional Image" value={image3} onChange={(e) => setImage3(e.target.value)} />
                    </div>
                    <div>
                        <label>Image Url</label>
                        <input type='text' placeholder="Optional Image" value={image4} onChange={(e) => setImage4(e.target.value)} />
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
                </div>
            </form>
        </div>
    )
}

export default ProductForm
