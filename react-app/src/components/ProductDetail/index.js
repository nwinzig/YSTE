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
    const session = useSelector((state) => state.session.user)
    console.log('reviewwwwwwws', reviews)
    console.log('productsssssssss', product)
    console.log('sessionnnnnnnnn', session)
    // console.log('???????? ProductDetail', product)
    const { productId } = useParams()
    const reviewsArr = Object.values(reviews)
    // console.log('reviews Array is here', reviewsArr)
    // console.log('params', params)

    let filteredArr = reviewsArr.filter(reviewObj => reviewObj.product_id == product.id)
    console.log('???????? FILTERED ARRAY', filteredArr)

    let userReview
    if(session){
         userReview = filteredArr.some((obj) => obj.user_id == session.id)
    }

    const review = (e) => {
        e.preventDefault()
        history.push(`/create-review/${product.id}`)
    }
    useEffect(() => {
        dispatch(getSingleProduct(productId)).then(() => dispatch(getAllReviews(productId)))
    }, [dispatch])
    return (
        <>
            <h1>{product.product_name}</h1>
            {product.image1 && <img src={product?.image1} alt={product.product_name} style={{ width: '200px', height: '200px' }} />}
            {product.image2 && <img src={product?.image1} alt={product.product_name} style={{ width: '200px', height: '200px' }} />}
            {product.image3 && <img src={product?.image1} alt={product.product_name} style={{ width: '200px', height: '200px' }} />}
            {product.image4 && <img src={product?.image1} alt={product.product_name} style={{ width: '200px', height: '200px' }} />}
            

            {filteredArr.map(review => (

                <div key={review.id}>
                    <div>{review.review}</div>
                    <div>{review.stars}</div>
                    {review.review_image && <img src={review.review_image} alt={review.review} />}
                </div>
            ))}
            <div>
                {session && !userReview && <button onClick={review}>Leave a big review?</button>}
            </div>
        </>
    )
}

export default ProductDetail
