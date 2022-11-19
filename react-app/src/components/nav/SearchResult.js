import { getSearch } from "../../store/search"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../ProductCard/index'
import { useHistory } from 'react-router-dom';
import './search.css'
const SearchResult = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)

    const searchedProducts = useSelector(state => state.search)
    console.log('testing what happens with no results', searchedProducts)
    let searchedProductsList = Object.values(searchedProducts)
    let flatArray = searchedProductsList.flat()
    let noResults;
    let redirectTime = 10
    if(!flatArray.length){
        console.log('hello there')
        noResults = (
            <div className="noSearchResultsWrapper">
                <h2>
                    There are no matching results, please try again.
                </h2>
                <p>You will be redirected in 5 seconds...</p>
            </div>
        )
        noResultRedirect()
    }


    function noResultRedirect(params) {
        setTimeout(() => {
            history.push('/')
        }, 5000)
    }

    return (
        <>
            <div>
                {flatArray?.map(product => {
                    return (
                        <ProductCard key={product?.id} product={product} />
                    )
                })}
            </div>
            {noResults}
        </>
    )
}



export default SearchResult
