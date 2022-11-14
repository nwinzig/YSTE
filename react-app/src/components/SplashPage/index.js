import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/products'
import ProductCard from '../ProductCard/index'

function AllProducts() {
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)
    const products = useSelector(state => state.products)

    let productList = Object.values(products)
    console.log('!!!!!!!!', productList)
    useEffect(() => {
        dispatch(getAllProducts()).then(setLoaded(true))
    }, [dispatch])

    // <ProductCard key={product.id} product={product} />
    return (
        <div>
            {loaded && productList.map(product => {
                return (
                    <ProductCard key={product.id} product={product} />
                )
            })}
        </div>
    )
}

export default AllProducts
