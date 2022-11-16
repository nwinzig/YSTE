
// Action
const GET_CART = 'cart/GET_CART';
const DELETE_PRODUCT_FROM_CART = 'cart/DELETE_PRODUCT_FROM_CART'


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

//Thunks
export const getCurrentCart = () => async dispatch => {
    const response = await fetch('/api/cart/')
    // console.log('this is response', response)
    if(response.ok){
        const cart = await response.json()
        console.log('this is cart', cart)
        dispatch(getCart(cart))
        return cart
    }
    return response
}

export const deleteProdFromCart = (productId) => async dispatch => {
    console.log('--------- before response in thunk', productId)
    const response = await fetch(`/api/cart/product/${productId}`, {
        method: "DELETE"
    })
    console.log('--------- after response in thunk', response)
    // console.log('response from delete thunk', response)
    if (response.ok){
        dispatch(deleteProduct(productId))
        console.log('after dispatch in thunk')
        // return
    }
    console.log("Delete Failed")
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
        default:
            return state
    }
}

export default cartReducer
