import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../store/products'
import { useParams } from 'react-router-dom'
import { getAllReviews } from '../../store/reviews'

function ProductDetail() {
    const dispatch = useDispatch()
    const product = useSelector((state) => state.products)
    const reviews = useSelector((state) => state.reviews)
    // console.log('reviewwwwwwws', reviews)
    // console.log('???????? ProductDetail', product)
    const { productId } = useParams()
    const reviewsArr = Object.values(reviews)
    // console.log('reviews Array is here', reviewsArr)
    // console.log('params', params)

    useEffect(() => {
        dispatch(getSingleProduct(productId)).then(() => dispatch(getAllReviews(productId)))
    }, [dispatch])
    return (
        <>
            <h1>{product.product_name}</h1>

            {reviewsArr.map(review => (

                <div key={review.id}>
                    <div>{review.review}</div>
                    <div>{review.stars}</div>
                </div>
            ))}
        </>
    )
}

export default ProductDetail
