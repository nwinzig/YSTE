

const SEARCHED_PRODUCTS = 'search/SEARCHED_PRODUCTS'

const POST_SEARCHED = 'search/GET_SEARCHED'

//get
const loadSearchedProducts = (data) => {
    return {
        'type': SEARCHED_PRODUCTS,
        data
    }
}

//post
const postSearchProducts = (data) => {
    return {
        'type': POST_SEARCHED,
        data
    }
}


//connect to post
export const createSearch = (products) => async dispatch => {
    console.log('are we getting products in create', products)
    const response = await fetch(`/api/search/`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(products)
    })
    console.log('response in create search', response)
    if(response.ok){
        console.log('is response ok')
        const searchProducts = await response.json()
        console.log('what is search products', searchProducts)
        dispatch(postSearchProducts(searchProducts))
        console.log('after dispatch in create search')
        return searchProducts
    }
}

//connect to get
export const getSearch = () => async dispatch => {
    const response = await fetch('/api/search/')
    // console.log('response in get search', response)
    if(response.ok){
        const products = await response.json()
        dispatch(loadSearchedProducts(products))
        return products
    }
}


let initialState = {}

const searchReducer = (state=initialState, action) => {
    let newState = {}
    switch (action.type){
        case SEARCHED_PRODUCTS: {
            newState = {...action.data}
            return newState
        }
        case POST_SEARCHED: {
            newState = {...action.data}
            return newState
        }
        default:
            return state
    }
}

export default searchReducer
