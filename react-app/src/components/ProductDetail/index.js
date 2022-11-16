import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../store/products'
import { useHistory, useParams } from 'react-router-dom'
import { getAllReviews } from '../../store/reviews'
import ReviewFormModal from '../CreateReview'
import ReviewForm from '../CreateReview/reviewForm'


function ProductDetail() {
    const history = useHistory()
    const dispatch = useDispatch()
    const product = useSelector((state) => state.products)
    const reviews = useSelector((state) => state.reviews)
    // console.log('reviewwwwwwws', reviews)
    // console.log('???????? ProductDetail', product)
    const { productId } = useParams()
    const reviewsArr = Object.values(reviews)
    // console.log('reviews Array is here', reviewsArr)
    // console.log('params', params)

    const review = (e) => {
        e.preventDefault()
        history.push(`/create-review`)
    }
    useEffect(() => {
        dispatch(getSingleProduct(productId)).then(() => dispatch(getAllReviews(productId)))
    }, [dispatch])
    return (
        <>
            <h1>{product.product_name}</h1>
            <img src={product?.image1} alt={product.product_name} style={{ width: '200px', height: '200px' }} />
            <img src={product?.image2} alt={product.product_name} style={{ width: '200px', height: '200px' }} />
            <img src={product?.image3} alt={product.product_name} style={{ width: '200px', height: '200px' }} />
            <img src={product?.image4} alt={product.product_name} style={{ width: '200px', height: '200px' }} />

            {reviewsArr.map(review => (

                <div key={review.id}>
                    <div>{review.review}</div>
                    <div>{review.stars}</div>
                </div>
            ))}
            <div>
                <button onClick={review}>Leave a big review?</button>
            </div>
        </>
    )
}

export default ProductDetail
