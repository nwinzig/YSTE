
// Action
const GET_CART = 'cart/GET_CART';


//Action Creators
const getCart = (cart) => {
    return {
        'type': GET_CART,
        cart
    }
}


//Thunks
export const getCurrentCart = () => async dispatch => {
    const response = await fetch('/api/cart/')
    console.log('this is response', response)
    if(response.ok){
        const cart = await response.json()
        console.log('this is cart', cart)
        dispatch(getCart(cart))
        return cart
    }
    return response
}


//Reducer
let initialState = {}

const cartReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type){
        case GET_CART: {
            newState = {...state, ...action.cart.Carts}
            return newState
        }
        default:
            return state
    }
}

export default cartReducer