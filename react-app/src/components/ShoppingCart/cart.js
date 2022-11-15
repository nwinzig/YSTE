import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import EmptyCartComponent from './emptyCart'
import FilledCartComponent from './cartWithItems'
import { getCurrentCart } from '../../store/cart'

function CartComponent(){
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)

    const user = useSelector(state => state.session.user)
    console.log('testing', user)
    const cart = useSelector(state => state.cart)
    console.log('this is cart-------->', cart)

    useEffect(() => {
        dispatch(getCurrentCart()).then(setLoaded(true))
    }, [dispatch])


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
