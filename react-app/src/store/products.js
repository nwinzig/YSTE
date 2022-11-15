// Actions
const LOAD_PRODUCTS = 'products/LOAD_PRODUCTS'
const LOAD_SINGLE_PRODUCT = 'products/LOAD_SINGLE_PRODUCT'
const CREATE_PRODUCT = 'products/CREATE_PRODUCT'


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
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(newProduct)
    })

    if (response.ok){
        const product = await response.json()
        dispatch(createProduct(product))
    }

}
// Initial State
let initialState = {}
// Reducer
const productsReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case LOAD_PRODUCTS: {
            newState = { ...action.products.Products }
            return newState
        }
        case LOAD_SINGLE_PRODUCT: {
            newState = { ...action.product.Product }
            return newState
        }
        case CREATE_PRODUCT: {
            newState = {...action.newProduct}

            return newState
        }
        default:
            return state
    }
}

export default productsReducer
