import { getSearch } from "../../store/search"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../ProductCard/index'
import { useHistory, NavLink } from 'react-router-dom';
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

    if(!flatArray?.length){
        // alert('no search results')
        noResults = (
            <div className="noSearchResultsWrapper">
                <h2>
                    There are no matching results, please try again.
                </h2>
                <NavLink to='/' className='rerouteBadSearch'>
                    Home
                </NavLink>
            </div>
        )

        // function noResultRedirect() {
        //     console.log('this should be an empty array', flatArray)
        //     setTimeout(() => {
        //         history.push('/')
        //     }, 5000)
        // }
        // noResultRedirect()
    }



    return (
        <div>
            <h2 className="moveRight">
                Your search results
            </h2>
            <div className="resultsWrapper">
                {flatArray?.map(product => {
                    return (
                        <ProductCard key={product?.id} product={product} />
                    )
                })}
            </div>
            {noResults}
        </div>
    )
}



export default SearchResult
