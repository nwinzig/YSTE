import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../store/products'
import { useHistory, useParams } from 'react-router-dom'
import { getUserProducts } from '../../store/products'
import OwnerReviewCard from '../OwnerReviewCard'
import { getUserReviews } from '../../store/reviews'
import './ReviewsByOwner.css'
import { Link } from 'react-router-dom'

function OwnerReviews() {
    const reviews = useSelector(state => state.reviews)
    const dispatch = useDispatch()


    let myReviews = reviews.reviews
    // {reviews?.map((review,index) => (
    //     <OwnerItemCard review={review} key={index} />
    // ))}
    console.log('@@@@@@@@@@@@@@@@@@@ reviews @@@@@@@@@@@@@@', myReviews)

    useEffect(() => {
        dispatch(getUserReviews())
    }, [dispatch])
    //     {myReviews?.map((review,index) => (
    //        <h1>review</h1>
    //        // <OwnerItemCard review={review} key={index} />
    //    ))}

    let revs = []
    if (myReviews) {

        myReviews.forEach(rev => {
            revs.push(rev)
        })
    }

    let reviewStatus
    if (revs.length == 0) {
        reviewStatus = false
    } else {
        reviewStatus = true
    }


    return (
        <>
            <div className="shopWrapper">
                <Link to={'/'} className="animatedKeepShop">
                    Keep shopping
                </Link>
            </div>
            <h1 className='yourreviews'>Your Reviews</h1>
            <div className='myreview-cont'>
                {!reviewStatus && <h2 className='no-reviews'>You have not left any reviews</h2>}
                <div>
                    {reviewStatus && myReviews.map(review => (
                        <OwnerReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default OwnerReviews
