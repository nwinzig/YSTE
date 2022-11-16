import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editReview, getUserReviews } from '../../store/reviews'

function EditReviewForm() {
    const { reviewId } = useParams()
    console.log('edit review id', reviewId)
    const reviews = useSelector(state => state.reviews.reviews)
    const prevReview = reviews.filter(review => review.id == reviewId)[0]
    const history = useHistory()
    const dispatch = useDispatch()
    const [review, setReview] = useState(prevReview.review)
    const [stars, setStars] = useState(prevReview.stars)
    const [img, setImg] = useState(prevReview.img)

    const submitter = async (e) => {
        e.preventDefault()

        let obj = {
            review,
            stars,
            'review_image': img
        }

        await dispatch(editReview(reviewId, obj)).then(() => dispatch(getUserReviews(reviewId)))
        history.push('/your-reviews')
    }

    return (
        <form onSubmit={submitter}>
            <div>
                <label> Review: </label>
                <input value={review} onChange={e => setReview(e.target.value)} />
            </div>
            <div>
                <label> Stars: </label>
                <input type='number' value={stars} onChange={e => setStars(e.target.value)} />
            </div>
            <div>
                <label>Image Url: </label>
                <input value={img} onChange={e => setImg(e.target.value)} />
            </div>
            <button type='submit'>Submit</button>

        </form>
    )
}


export default EditReviewForm
