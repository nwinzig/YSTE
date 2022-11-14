// Actions
const LOAD_PRODUCTS='products/LOAD_PRODUCTS'
const LOAD_SINGLE_PRODUCT = 'products/LOAD_SINGLE_PRODUCT'

// Action Creators
const loadAll = (products) => {
    return {
        'type': LOAD_PRODUCTS,
        products
    }
}

const loadOne = (product) => {
    return {
        'type': LOAD_SINGLE_PRODUCT,
        product
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

export const getSingleProduct = (productId) => async dispatch => {
    const response = await fetch(`api/products/${productId}`)

    if (response.ok){
        const product = await response.json()
        console.log(product)
        dispatch(loadOne(product))
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
        case LOAD_SINGLE_PRODUCT:{
            newState = {...action.product.Product}
            return newState
        }
        default:
            return state
    }
}

export default productsReducer
