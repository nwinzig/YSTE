
// Action
const GET_CART = 'cart/GET_CART';
const DELETE_PRODUCT_FROM_CART = 'cart/DELETE_PRODUCT_FROM_CART'
const ADD_CART = 'cart/ADD_CART'

//Action Creators
const getCart = (data) => {
    return {
        'type': GET_CART,
        data
    }
}

const deleteProduct = (data) => {
    return {
        'type': DELETE_PRODUCT_FROM_CART,
        data
    }
}
const addToCart = (data) => {
    return {
        'type': ADD_CART,
        data
    }
}



//Thunks
export const getCurrentCart = () => async dispatch => {
    const response = await fetch('/api/cart/')

    if(response.ok){
        const cart = await response.json()
        console.log('this is cart', cart)
        dispatch(getCart(cart))
        return cart
    }
    return response
}

export const deleteProdFromCart = (productId) => async dispatch => {

    const response = await fetch(`/api/cart/cartProduct/${productId}`, {
        method: "DELETE"
    })

    if (response.ok){
        dispatch(deleteProduct(productId))
        return
    }
    return
}


export const addCart = (productId) => async dispatch => {
    console.log('thunk productId', productId)
    const response = await fetch(`/api/products/${productId.product}/cart/cartProduct`, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(productId.product)
    })
    console.log('this response after fetch addCart', response)
    if (response.ok){
        const cartAdder = await response.json()
        console.log('this is after thunk response cartadder', cartAdder)
        dispatch(addToCart(cartAdder))
        // return cartAdder
    }
}


//Reducer
let initialState = {}

const cartReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type){
        case GET_CART: {
            newState = {...state, ...action.data}
            return newState
        }
        case ADD_CART: {
            newState = {...state, ...action.data}
            return newState
        }
        default:
            return state
    }
}

export default cartReducer
