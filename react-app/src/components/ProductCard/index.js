import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
// import { getAllReviews } from '../../store/reviews'
import './ProductCard.css'


function ProductCard({ product }) {
    const dispatch = useDispatch()
    // console.log('prop', product)
    const history = useHistory()
    const productObj = useSelector(state => state.products)
    const reviewsObj = useSelector(state => state.reviews)

    return (

        <div className='theCard' onClick={() => history.push(`/product/${product?.id}`)} >
            <img className='cardImage' src={product?.image1} alt={product?.product_name}  />
            <div className='productName'>  {product?.product_name} </div>
            {/* <div>{product?.description}</div> */}
            <div className='productPrice'>${product?.price}</div>
        </div>
    )
}


export default ProductCard
