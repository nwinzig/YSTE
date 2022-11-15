// Actions
const LOAD_PRODUCTS = 'products/LOAD_PRODUCTS'
const LOAD_SINGLE_PRODUCT = 'products/LOAD_SINGLE_PRODUCT'
const CREATE_PRODUCT = 'products/CREATE_PRODUCT'
const LOAD_USER_PRODUCTS = 'products/LOAD_USER_PRODUCTS'
const DELETE_PRODUCT = 'products/DELETE_PRODUCT'


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

const createProduct = (newProduct) => {
    return {
        'type': CREATE_PRODUCT,
        newProduct
    }
}

const loadByUser = (products) => {
    return {
        'type': LOAD_USER_PRODUCTS,
        products
    }
}

const deleteProduct = (deleted) => {
    return {
        'type': DELETE_PRODUCT,
        deleted
    }
}


// Thunks
export const getAllProducts = () => async dispatch => {
    const response = await fetch(`/api/products`)

    if (response.ok) {
        const products = await response.json()
        console.log(products)
        dispatch(loadAll(products))
        return products
    }
}

export const getSingleProduct = (productId) => async dispatch => {
    const response = await fetch(`/api/products/${productId}`)

    if (response.ok) {
        const product = await response.json()
        console.log(product)
        dispatch(loadOne(product))
        return product
    }
}

export const CreateSingleProduct = (newProduct) => async dispatch => {
    const response = await fetch(`/api/products/createProduct`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
    })

    if (response.ok) {
        const product = await response.json()
        dispatch(createProduct(product))
        return product
    }
}

export const getUserProducts = (userId) => async dispatch => {
    const response = await fetch('api/products/user-products')

    if (response.ok) {
        const products = await response.json()
        console.log('thunk owner products', products)
        dispatch(loadByUser(products))
        return products
    }
}

export const deleteItem = (productId) => async dispatch => {
    console.log('dis pi', productId)
    const response = await fetch(`api/products/${productId}`, {
        method: 'DELETE'
    })
    console.log('my delete thunk is called upon', response)

    if (response.ok) {
        console.log('im going to delete', response)
        dispatch(deleteProduct(productId))
    }
    else return { 'message': 'Delete Failed' }
}


// Initial State
let initialState = {}
// Reducer
const productsReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case LOAD_PRODUCTS: {
            console.log('thjis is d=store', action.products)
            newState = { ...action.products.Products }
            return newState
        }
        case LOAD_SINGLE_PRODUCT: {
            newState = { ...action.product.Product }
            return newState
        }
        case CREATE_PRODUCT: {
            newState = { ...action.newProduct }

            return newState
        }
        case LOAD_USER_PRODUCTS: {
            newState = { ...state }
            newState = { ...action.products }
            return newState
        }
        // case DELETE_PRODUCT: {
        //     delete newState[action.deleted]
        //     newState = { ...newState }
        //     return newState
        // }
        default:
            return state
    }
}

export default productsReducer
