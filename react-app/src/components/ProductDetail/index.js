import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../store/products'
import { useHistory, useParams } from 'react-router-dom'
import { editReview, getAllReviews } from '../../store/reviews'
import ReviewFormModal from '../CreateReview'
import ReviewForm from '../CreateReview/reviewForm'
import AddToCart from '../ShoppingCart/AddToCart'
import './ProductDetail.css'

function ProductDetail() {
    const history = useHistory()
    const dispatch = useDispatch()
    const product = useSelector((state) => state.products)
    const reviews = useSelector((state) => state.reviews)
    const session = useSelector((state) => state.session.user)

    const { productId } = useParams()
    const reviewsArr = Object.values(reviews)
    console.log('reviews here', reviewsArr)
    const stars = []
    
    
    let filteredArr = reviewsArr.filter(reviewObj => reviewObj.product_id == product.id)
    // console.log('???????? FILTERED ARRAY', filteredArr)
    const avgStar = (stars) => {
        if (stars.length == 0) return []
        let sum = 0
        stars.forEach(str => {
            sum += str
        })
        sum = sum / stars.length
        return sum
    }
    filteredArr.forEach(rev => {
        stars.push(rev.stars)
    })

    let avgg
    let numStars
    if (stars.length == 0){ numStars = (<h1>No reviews yet</h1>)}
    else if (stars.length > 0) {
        
        avgg = (<div>{avgStar(stars)}</div>)
        if (avgStar(stars) >= 1 && avgStar(stars) <= 2) {
            numStars = (<div>&#9733;</div>)
        }
        else if (avgStar(stars) >= 2 && avgStar(stars) <= 3) {
            numStars = (<div>&#9733; &#9733;</div>)
        }
        else if (avgStar(stars) >= 3 && avgStar(stars) <= 4) {
            numStars = (<div>&#9733; &#9733; &#9733;</div>)
        }
        else if (avgStar(stars) >= 4 && avgStar(stars) < 5) {
            numStars = (<div>&#9733; &#9733; &#9733; &#9733;</div>)
        }
        else if (avgStar(stars) == 5) {
            numStars = (<div>&#9733; &#9733; &#9733; &#9733; &#9733;</div>)
        } else{
            numStars = (<h1>There are no reviews</h1>)
        }
    }

    let userReview
    if (session) {
        userReview = filteredArr.some((obj) => obj.user_id == session.id)
    }

    // use userId to find thier shop
    // use the shops id too see if its the owner of the product and if this is true the you hsould not be able to leave a review
    let isOwner
    if (session?.id == product?.shop_id) {
        isOwner = true
    }

    const review = (e) => {
        e.preventDefault()
        history.push(`/create-review/${product.id}`)
    }


    useEffect(() => {
        dispatch(getSingleProduct(productId)).then(() => dispatch(getAllReviews(productId)))
    }, [dispatch])

    console.log(filteredArr)

    return (
        <div className='product-detail-wrapper'>
            <div className='product-detail-separator'>
                <div className='product-detail-left'>

                    <div className='product-detail-image-container'>
                        <div className='product-detail-image1-container' >
                            {product.image1 && <img src={product?.image1} alt={product?.product_name} />}
                        </div>
                        {product.image2 && <img src={product?.image2} alt={product?.product_name} style={{ width: '200px', height: '200px' }} />}
                        {product.image3 && <img src={product?.image3} alt={product?.product_name} style={{ width: '200px', height: '200px' }} />}
                        {product.image4 && <img src={product?.image4} alt={product?.product_name} style={{ width: '200px', height: '200px' }} />}
                    </div>



                </div>
                <div className='product-detail-right'>
                    <div className='product-detail-description-container'>
                        <div className='product-detail-description-header'>
                            <div style={{ padding: '10px' }}>{avgg}</div>
                            <div style={{ color: 'grey' }}>|</div>
                            <div style={{ padding: '10px' }}>{numStars}</div>
                        </div>
                        <h1>{product?.product_name}</h1>
                        <div className='product-detail-description-price'>
                            <p>${product?.price}</p>
                        </div>
                        <div className='product-detail-description-body'>
                            <div className='product-detail-description-body-description-section'>
                                <p>{product?.description}</p>
                            </div>
                            <div className='product-detail-description-body-add-cart-button'>
                                <AddToCart />
                            </div>
                            <div className='product-detail-description-lorem'>
                                <div className='product-detail-description-font-awesome-container'>
                                    <i class="fa-solid fa-cart-shopping fa-2x"></i>
                                </div>
                                <p>
                                    Other people want this. Over 20 people have this in their carts right now.
                                </p>
                            </div>
                            <div className='product-detail-description-lorem'>
                                <div className='product-detail-description-font-awesome-container'>
                                    <i class="fa-solid fa-star fa-2x"></i>
                                </div>
                                <p>
                                    Star Seller. This seller consistently earned 5-star reviews, shipped on time, and replied quickly to any messages they received.
                                </p>
                            </div>
                            <div className='product-detail-description-lorem'>
                                <div className='product-detail-description-font-awesome-container'>
                                    <i class="fa-solid fa-truck fa-2x"></i>
                                </div>
                                <p>
                                    Hooray! This item ships free to the US.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='product-reviews'>
                {!!filteredArr.length && (<div className='product-reviews-header'>
                    <h1> {filteredArr?.length} reviews</h1>
                    <h1 >{numStars}</h1>
                </div>)}
                <div className="product-reviews-card-wrapper">
                    {filteredArr?.map(review => (
                        <div key={review?.id} className="product-reviews-card-container">
                            <div className="product-reviews-card-header">
                                <p>{review?.stars}</p>
                                <div>&#9733;</div>
                            </div>

                            <div className="product-reviews-card-review">
                                {review?.review}
                            </div>

                            <div className="product-reviews-card-product-name">
                                <div>Purchased Item:</div> <p>{product.product_name}</p>
                            </div>



                            {review?.review_image && <img src={review?.review_image} alt={review?.review} style={{ width: '100px', height: '100px', borderRadius:'14px' }} />}



                        </div>
                    ))}
                </div>
            </div>
            <div className='product-leave-review-button'>
                {!isOwner && session && !userReview && <button onClick={review}>Leave a review?</button>}
            </div>
        </div>

    )
}

export default ProductDetail
