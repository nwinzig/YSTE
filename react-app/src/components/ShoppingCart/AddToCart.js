import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { addCart } from '../../store/cart'



function AddToCart() {
    let dispatch = useDispatch()
    let history = useHistory()
    let {productId} = useParams()
    // const [productId, setProductId] = useState('')
    // console.log('this is productId state variable',productId)
    let product= parseInt(productId)
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('this is product id inside component-----', productId)
        let data = {
            product
        }
        // console.log('this is the params before dispatch', data)
        dispatch(addCart(data))
        history.push('/cart')
    }

    return (
    <div>
        <button className='add-to-cart' onClick={handleSubmit}>Add to Cart</button>
    </div>

    )


}




export default AddToCart
