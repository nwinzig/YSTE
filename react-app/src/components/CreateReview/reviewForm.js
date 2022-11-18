import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { createReview, getAllReviews } from '../../store/reviews'
import './reviewForm.css'

function ReviewForm() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { productId } = useParams()
    console.log('this is produst id', productId)
    const [review, setReview] = useState('')
    const [stars, setStars] = useState(1)
    const [img, setImg] = useState('')
    const [errors, setErrors] = useState([])

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

        let obj = {
            review,
            stars,
            'review_image': img
        }

        await dispatch(createReview(productId, obj)).then(() => dispatch(getAllReviews(productId)))

        history.push(`/product/${productId}`)
    }

    return (
        <div>
            <h1 className='reviewformheader'>Leave a Review</h1>
            <form className='reviewform' onSubmit={submitter}>
                <ul className='editrerrors'>
                    {!!errors.length && errors.map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>

                <div>
                    <label> Review: </label>
                    <input required value={review} onChange={e => setReview(e.target.value)} />
                </div>
                <div>
                    <label> Stars: </label>
                    <input required type='number' value={stars} onChange={e => setStars(e.target.value)} />
                </div>
                <div>
                    <label>Image Url: </label>
                    <input value={img} onChange={e => setImg(e.target.value)} />
                </div>
                <button className='reviewsubmit' type='submit'>Submit</button>

            </form>
        </div>
    )
}


export default ReviewForm
