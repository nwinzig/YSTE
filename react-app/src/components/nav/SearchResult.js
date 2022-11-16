import { getSearch } from "../../store/search"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../ProductCard/index'


const SearchResult = () => {
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)

    const searchedProducts = useSelector(state => state.search)

    let searchedProductsList = Object.values(searchedProducts)
    let flatArray = searchedProductsList.flat()

    return (
        <>
            <div>
                {flatArray?.map(product => {
                    return (
                        <ProductCard key={product?.id} product={product} />
                    )
                })}
            </div>
        </>
    )
}



export default SearchResult
