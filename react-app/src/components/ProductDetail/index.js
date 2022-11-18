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

    const { productId } = useParams()
    const reviewsArr = Object.values(reviews)
    const stars = []
    const avgStar = (stars) => {
        let sum = 0
        stars.forEach(str => {
            sum += str
        })
        sum = sum / stars.length
        return sum
    }
    reviewsArr.forEach(rev => {
        stars.push(rev.stars)
    })

    let avgg
    let numStars
    if (stars.length > 0) {
        avgg = (<div>{avgStar(stars)}</div>)
        if (avgStar(stars) >= 1 && avgStar(stars) <= 2) {
            numStars = (<div>&#9733;</div>)
        }
        if (avgStar(stars) >= 2 && avgStar(stars) <= 3) {
            numStars = (<div>&#9733; &#9733;</div>)
        }
        if (avgStar(stars) >= 3 && avgStar(stars) <= 4) {
            numStars = (<div>&#9733; &#9733; &#9733;</div>)
        }
        if (avgStar(stars) >= 4 && avgStar(stars) < 5) {
            numStars = (<div>&#9733; &#9733; &#9733; &#9733;</div>)
        }
        if (avgStar(stars) == 5) {
            numStars = (<div>&#9733; &#9733; &#9733; &#9733; &#9733;</div>)
        }
    }


    let filteredArr = reviewsArr.filter(reviewObj => reviewObj.product_id == product.id)
    // console.log('???????? FILTERED ARRAY', filteredArr)

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



    return (
        <div className='product-detail-wrapper'>
            <div>{avgg}</div>
            <div>{numStars}</div>
            <div>
                {product.image1 && <img src={product?.image1} alt={product?.product_name} style={{ width: '200px', height: '200px' }} />}
                {product.image2 && <img src={product?.image2} alt={product?.product_name} style={{ width: '200px', height: '200px' }} />}
                {product.image3 && <img src={product?.image3} alt={product?.product_name} style={{ width: '200px', height: '200px' }} />}
                {product.image4 && <img src={product?.image4} alt={product?.product_name} style={{ width: '200px', height: '200px' }} />}
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
                    <AddToCart />
                </div>
                <div className='product-reviews'>

                    {filteredArr?.map(review => (
                        <div key={review?.id}>
                            {review?.review_image && <img src={review?.review_image} alt={review?.review} style={{ width: '100px', height: '100px' }} />}
                            <div>{review?.review}</div>
                            <div>{review?.stars}</div>
                            <div>--------------------------------</div>
                        </div>
                    ))}
                </div>
                <div>
                    {!isOwner && session && !userReview && <button onClick={review}>Leave a review?</button>}
                </div>
            </div>
        </div>

    )
}

export default ProductDetail
