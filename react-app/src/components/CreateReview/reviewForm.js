import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { createReview, getAllReviews } from '../../store/reviews'

function ReviewForm() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { productId } = useParams()
    console.log('this is produst id', productId)
    const [review, setReview] = useState('')
    const [stars, setStars] = useState(1)
    const [img, setImg] = useState('')

    const submitter = async (e) => {
        e.preventDefault()

        let obj = {
            review,
            stars,
            'review_image': img
        }

        await dispatch(createReview(productId, obj)).then(() => dispatch(getAllReviews(productId)))

        history.push(`/product/${productId}`)
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


export default ReviewForm
