import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../store/products'
import { useHistory, useParams } from 'react-router-dom'
import { getAllReviews } from '../../store/reviews'
import ReviewFormModal from '../CreateReview'
import ReviewForm from '../CreateReview/reviewForm'
import AddToCart from '../ShoppingCart/AddToCart'

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
    if (session) {
        userReview = filteredArr.some((obj) => obj.user_id == session.id)
    }

    // use userId to find thier shop
    // use the shops id too see if its the owner of the product and if this is true the you hsould not be able to leave a review
    let isOwner
    if (session.id == product.shop_id) {
        isOwner = true
    }

    const review = (e) => {
        e.preventDefault()
        history.push(`/create-review/${product.id}`)
    }


    useEffect(() => {
        dispatch(getSingleProduct(productId)).then(() => dispatch(getAllReviews(productId)))
    }, [dispatch])



    return (
        <div className='product-detail-wrapper'>
            <div>
                <img src={product?.image1} alt={product?.product_name} style={{ width: '200px', height: '200px' }} />
                <img src={product?.image2} alt={product?.product_name} style={{ width: '200px', height: '200px' }} />
                <img src={product?.image3} alt={product?.product_name} style={{ width: '200px', height: '200px' }} />
                <img src={product?.image4} alt={product?.product_name} style={{ width: '200px', height: '200px' }} />
            </div>
            <div>
                <h1>{product?.product_name}</h1>
                <div>
                    ${product?.price}
                </div>
                <div>
                    {product?.description}
                 </div>
                <div>
                    <AddToCart/>
                </div>
            {filteredArr?.map(review => (
                <div key={review?.id}>
                    {review?.review_image && <img src={review?.review_image} alt={review?.review} style={{ width: '100px', height: '100px' }} />}
                    <div>{review?.review}</div>
                    <div>{review?.stars}</div>
                    <div>--------------------------------</div>
            </div>
            <div>
                {!isOwner && session && !userReview && <button onClick={review}>Leave a review?</button>}
            </div>
        </div>

    )
}

export default ProductDetail
