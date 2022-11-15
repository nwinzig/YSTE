// Actions
const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS'

//Action Creators
const loadAll = (reviews) => {
    return {
        'type': LOAD_REVIEWS,
        reviews
    }
}

// Thunks
export const getAllReviews = (id) => async dispatch => {
    const response = await fetch(`/api/products/${id}/reviews`)
    console.log('me thunk review is hit')
    if (response.ok) {
        const reviews = await response.json()
        console.log('prodcut reviews', reviews)
        dispatch(loadAll(reviews))
        return reviews
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
        default:
            return state
    }
}


export default reviewsReducer
