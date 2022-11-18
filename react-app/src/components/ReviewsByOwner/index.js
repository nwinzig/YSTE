import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../store/products'
import { useHistory, useParams } from 'react-router-dom'
import { getUserProducts } from '../../store/products'
import OwnerReviewCard from '../OwnerReviewCard'
import { getUserReviews } from '../../store/reviews'
import './ReviewsByOwner.css'

function OwnerReviews() {
    const reviews = useSelector(state => state.reviews)
    const dispatch = useDispatch()

    console.log('@@@@@@@@@@@@@@@@@@@ reviews @@@@@@@@@@@@@@', reviews)

    let myReviews = reviews.reviews
    // {reviews?.map((review,index) => (
    //     <OwnerItemCard review={review} key={index} />
    // ))}

    useEffect(() => {
        dispatch(getUserReviews())
    }, [dispatch])
    //     {myReviews?.map((review,index) => (
    //        <h1>review</h1>
    //        // <OwnerItemCard review={review} key={index} />
    //    ))}
    if (!myReviews) return null
    return (
        <>
            <h1 className='yourreviews'>Your Reviews</h1>
            <div>
                {myReviews.map(review => (
                    <OwnerReviewCard key={review.id} review={review} />
                ))}

            </div>
        </>
    )
}

export default OwnerReviews
