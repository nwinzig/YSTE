import React, { useEffect, useState } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editReview, getUserReviews } from '../../store/reviews'
import './editReviewForm.css'

function EditReviewForm() {
    const { reviewId } = useParams()
    console.log('edit review id', reviewId)
    const reviews = useSelector(state => state.reviews.reviews)

    const prevReview = reviews?.filter(review => review.id == reviewId)[0]
    const history = useHistory()
    const dispatch = useDispatch()
    const [review, setReview] = useState(prevReview?.review)
    const [stars, setStars] = useState(prevReview?.stars)
    const [img, setImg] = useState(prevReview?.img)
    const [errors, setErrors] = useState([])

    const imageCheck = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/
    const submitter = async (e) => {
        e.preventDefault()
        setErrors([])

        if (review.length < 5 || review.length > 240) {
            setErrors(['Review must be between 5 and 240 characters'])
            return
        }

        if (stars > 5 || stars < 1) {
            setErrors(['Stars must be between 1 and 5'])
            return
        }

        // if (!img.split('?')[0].match(imageCheck)) {
        //     setErrors(['Image must be valid: jpg, jpeg, png, webp, avif, gif, svg'])
        //     return
        // }

        let obj = {
            review,
            stars,
            'review_image': img
        }

        await dispatch(editReview(reviewId, obj)).then(() => dispatch(getUserReviews()))
        history.push('/your-reviews')

    }

    return (
        <div className='edit-review-wrapper'>
        <form className='editreviewform' onSubmit={submitter}>
            <div className='edit-review'>Edit Your Review</div>
            <ul className='rerrors'>
                {!!errors.length && errors.map((error, index) => (
                    <li key={index}>{error}</li>
                    ))}
            </ul>
            <div>
                <input className="editreview-input-field" placeholder='Leave a review' required minlength="5" maxlength="255" value={review} onChange={e => setReview(e.target.value)} />
            </div>
            <div>
            <input className='editreview-input-field' placeholder="Rating" required type='number' value={stars} onChange={e => setStars(e.target.value)} />
            </div>
            <div>
            <input minlength="3" className='editreview-input-field' placeholder='Image URL' value={img} onChange={e => setImg(e.target.value)} />
            </div>
            <button className='editreviewbtn' type='submit'>Submit</button>

        </form>
                    </div>
    )
}


export default EditReviewForm
