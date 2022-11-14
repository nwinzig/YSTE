import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllProducts} from '../../store/products'

function AllProducts(){
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    let productList = Object.values(products)
    console.log('!!!!!!!!',productList)
    useEffect(() => {
        dispatch(getAllProducts())
    },[dispatch])
    
    return (
        <div>
            {productList.map(product => {
                return(
                    <ProductCard key={product.id} product={product}/>
                )
            })}
        </div>
    )
}

export default AllProducts
