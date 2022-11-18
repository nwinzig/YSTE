// Actions
const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS'
const CREATE_REVIEW = 'reviews/CREATE_REVIEW'
const LOAD_USER_REVIEWS = 'reviews/LOAD_USER_REVIEWS'
const EDIT_REVIEW = 'reviews/EDIT_REVIEW'
const DELETE_REVIEW = 'reviews/DELETE_REVIEW'

//Action Creators
const loadAll = (reviews) => {
    return {
        'type': LOAD_REVIEWS,
        reviews
    }
}

const loadUserReviews = (reviews) => {
    return {
        'type': LOAD_USER_REVIEWS,
        reviews
    }
}
const editReviewAction = (reviews) => {
    return {
        'type': EDIT_REVIEW,
        reviews
    }
}

const deleteReviewAction = (reviews) => {
    return {
        'type': DELETE_REVIEW,
        reviews
    }
}
// Thunks
export const getAllReviews = (id) => async dispatch => {
    const response = await fetch(`/api/products/${id}/reviews`)
    // console.log('me thunk review is hit')
    if (response.ok) {
        const reviews = await response.json()
        // console.log('prodcut reviews', reviews)
        dispatch(loadAll(reviews))
        return reviews
    }
}

export const createReview = (id, obj) => async dispatch => {
    const response = await fetch(`/api/products/${id}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })

    if(response.ok){
        const review = await response.json()
        console.log('!!!!!!!!!! THUNK REVIEW !!!!!', review)
    }

    return
}

export const getUserReviews = () => async dispatch => {
    const response = await fetch('/api/reviews/user-reviews')

    if (response.ok) {
        const reviews = await response.json()
        console.log('thunk owner reviews', reviews)
        dispatch(loadUserReviews(reviews))
        return reviews
    }
}

export const deleteReview = (id) => async dispatch => {
    const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        const deleted = await response.json()
        dispatch(deleteReviewAction(deleted))
    }
}


export const editReview = (id, obj) => async dispatch => {
    const response = await fetch(`/api/reviews/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })
    if (response.ok){
        const review = await response.json()
        dispatch(editReviewAction(review))
        return review
    }
}

// Initial State
let initialState = {}

// Reducer
const reviewsReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case LOAD_REVIEWS: {
            const newState = { ...state, ...action.reviews.Reviews }
            //newState[action.reviews.id] = action.review;
            return newState
        }
        case LOAD_USER_REVIEWS: {
            console.log('%%%%%%%%%% LOAD USER REVIEWS REDUCER %%%%%%%', action.reviews)
            newState = { ...state, ...action.reviews }
            return newState
        }
        case EDIT_REVIEW: {
            newState = {...state, ...action.reviews}
            return newState
        }
        case DELETE_REVIEW: {
            newState = {}
            delete newState[action.deleted]
            return newState
        }
        default:
            return state
    }
}


export default reviewsReducer
