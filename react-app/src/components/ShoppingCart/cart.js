import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import EmptyCartComponent from './emptyCart'
import FilledCartComponent from './cartWithItems'
import { getCurrentCart } from '../../store/cart'
import { getAllProducts, getSingleProduct } from '../../store/products'

function CartComponent(){
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)

    const productsObj = useSelector(state => state.products)
    const userObj = useSelector(state => state.session.user)
    console.log('testing', userObj)
    const cartObj = useSelector(state => state.cart)
    let cartArr = cartObj.cart

    let productsArr = Object.values(productsObj)

    useEffect(() => {
        dispatch(getCurrentCart()).then(() => dispatch(getAllProducts()))
    }, [dispatch])


    console.log('cart array',cartArr)
    console.log('products', productsObj)
    console.log('products array', productsArr)
    // if(cartArr){
    //     console.log('should be an id', cartArr[0].product_id)
    // }

    let productIds = []
    let cartItems = []

    if(cartArr.length){
        productIds = cartArr.map(item => {
            return item.product_id
        })
        console.log('product ids', productIds)
    }

    cartItems = productsArr.filter(product => {
        return productIds.includes(product.id)
    })

    console.log('hopeful', cartItems)
    // let matching = productsArr.filter(product => product.id === cartArr.product_id)
    // console.log('plez', matching)
    return(
        <div>
            <div>
                Your cart is empty
            </div>
            <div>
                Link to home page
            </div>
        </div>
    )
}

export default CartComponent
