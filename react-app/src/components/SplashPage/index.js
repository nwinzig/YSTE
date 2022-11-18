import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/products'
import ProductCard from '../ProductCard/index'
import './SplashPage.css'

function AllProducts() {
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)
    const products = useSelector(state => state.products)
    const user = useSelector(state => state.session.user)




    let productList = Object.values(products)
    // console.log('!!!!!!!!', productList)
    useEffect(() => {
        dispatch(getAllProducts()).then(setLoaded(true))
    }, [dispatch])

    console.log('firstname', user)
    let intro
    if (user) {
        intro = <h1>Welcome back {user?.first_name}!</h1>
    } else {
        intro = <h1>Welcome to YSTE!</h1>
    }

    return (
        <>

            {intro}

            <div>
                {loaded && productList.map(product => {
                    return (
                        <ProductCard key={product?.id} product={product} />
                    )
                })}
            </div>
        </>
    )
}

export default AllProducts
