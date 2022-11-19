import { getSearch } from "../../store/search"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../ProductCard/index'


const SearchResult = () => {
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)

    const searchedProducts = useSelector(state => state.search)
    console.log('testing what happens with no results', searchedProducts)
    let searchedProductsList = Object.values(searchedProducts)
    let flatArray = searchedProductsList.flat()
    let noResults;
    if(!flatArray.length){
        console.log('hello there')
        noResults = (
            <h2>
                There are no matching results, please try again.
            </h2>
        )
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
            <div>
                {noResults}
            </div>

        </>
    )
}



export default SearchResult
