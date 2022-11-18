import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { deleteReview } from '../../store/reviews'
import { getAllProducts } from '../../store/products'
import { getUserReviews } from '../../store/reviews'
// import EditProductForm from '../EditProductForm'
import "./OwnerReview.css"

function OwnerReviewCard({ review }) {

    const [showEditForm, setShowEditForm] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()


    const deleteBtn = async (e) => {
        e.preventDefault()
        dispatch(deleteReview(review.id)).then(() => dispatch(getUserReviews()))
    }

    const editBtn = async (e, reviewId) => {
        history.push(`/editReview/${review.id}`)

    }

    let numStars
    if (review.stars == 1) {
        numStars = (<div className='reviewstarswrapper'>{review.stars} &#9733;</div>)
    }
    if (review.stars == 2) {
        numStars = (<div className='reviewstarswrapper'>{review.stars} &#9733; &#9733;</div>)
    }
    if (review.stars == 3) {
        numStars = (<div className='reviewstarswrapper'>{review.stars} &#9733; &#9733; &#9733;</div>)
    }
    if (review.stars == 4) {
        numStars = (<div className='reviewstarswrapper'>{review.stars} &#9733; &#9733; &#9733; &#9733;</div>)
    }
    if (review.stars == 5) {
        numStars = (<div className='reviewstarswrapper'>{review.stars} &#9733; &#9733; &#9733; &#9733; &#9733;</div>)
    }

    return (
        <>
            <div className='reviewswrapper'>
                <div className='reviewitemwrapper'>

                    <div className='reviewstarswrapper'>{numStars}</div>
                    <div className='reviewreviewwrapper'>{review.review}</div>

                    <div className='reviewedbtn'>
                        <button className='revieweditb' onClick={(e) => editBtn(e, review.id)}>Edit</button>
                        <button className='revieweditb' onClick={deleteBtn}>Delete</button>
                    </div>
                </div>
            </div>
        </>

    )

}

export default OwnerReviewCard



// function OwnerItemCard({ product }) {
//     const [showEditForm, setShowEditForm] = useState(false)
//     const dispatch = useDispatch()
//     const history = useHistory()


//     const deleteBtn = async (e, productId) => {
//         e.preventDefault()
//         dispatch(deleteItem(productId)).then(() => dispatch(getUserProducts()))
//     }

//     const editBtn = async (e, productId) => {
//         history.push(`/editProduct/${product.id}`)


//     }

//     return (
//         <>
//             <div>{product?.product_name}</div>
//             <div>{product?.description}</div>
//             <div>${product?.price}</div>
//             <div>{product?.category}</div>
//             <button onClick={editBtn} >Edit</button>
//             <button onClick={(e) => deleteBtn(e, product.id)}>Delete</button>
//             <div>-----------------------------</div>
//         </>

//     )
// }

// export default OwnerItemCard
