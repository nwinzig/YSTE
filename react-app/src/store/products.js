// Actions
const LOAD_PRODUCTS='products/LOAD_PRODUCTS'
// Action Creators
const loadAll = (products) => {
    return {
        'type': LOAD_PRODUCTS,
        products
    }
}
// Thunks
export const getAllProducts = () => async dispatch => {
    const response = await fetch(`api/products`)

    if(response.ok){
        const products = await response.json()
        console.log(products)
        dispatch(loadAll(products))
        return products
    }
}
// Initial State
let initialState = {}
// Reducer
const productsReducer = (state = initialState, action) => {
    let newState = {}
    switch(action.type){
        case LOAD_PRODUCTS:{
            newState = {...action.products.Products}
            return newState
        }
        default:
            return state
    }
}

export default productsReducer
