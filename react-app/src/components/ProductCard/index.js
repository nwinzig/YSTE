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
    // let reviewsArr = Object.values(reviewsObj)
    // console.log('should be all products',productObj)
    // console.log('should be all reviews', reviewsObj)
    // console.log('should be an array of reviews', reviewsArr)
    // let productId = product?.id
    // console.log(product)
    // useEffect(() => {
    //     dispatch(getAllReviews(productId))
    // }, [dispatch])

    // console.log('this should be product',product)
    // console.log('should be product id', product?.id)
    // console.log('stars', reviewsArr[0]?.stars, 'product id',reviewsArr[0]?.product_id )
    // let sum = 0
    // let numReviews = 0
    // let index = 0
    // while(index < reviewsArr.length){
    //     if(reviewsArr[index].product_id === product.id){
    //         sum += reviewsArr[index].stars
    //     }
    //     index++
    // }
    // console.log('sum', sum)
    // console.log('numreviews', numReviews)
    // product.avgReview = sum/numReviews
    // console.log('should be product with avg reviews', product)

    return (

        <div className='border' onClick={() => history.push(`/product/${product?.id}`)} >
            <img src={product?.image1} alt={product?.product_name} style={{ width: '200px', height: '200px' }} />
            <div>  {product?.product_name} </div>
            {/* <div>{product?.description}</div> */}
            <div className='productPrice'>${product?.price}</div>
        </div>
    )
}


export default ProductCard
