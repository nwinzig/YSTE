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
        <div className='contentWrapper'>
            <div className='welcomeWrapper'>
            {intro}
            </div>
            <div className='circularCatWrapper'>
                <div className='beige'>
                    <div className='circularWrapperleft'>
                        <div className='circular'>
                            Cars pic
                        </div>
                    </div>
                    <div className='circularWrapper'>
                        <div className='circular'>
                            Clothing
                        </div>
                    </div>
                    <div className='circularWrapper'>
                        <div className='circular'>
                            Electronics
                        </div>
                    </div>
                    <div className='circularWrapper'>
                        <div className='circular'>
                            Home Goods
                        </div>
                    </div>
                    <div className='circularWrapperright'>
                        <div className='circular'>
                            Misc
                        </div>
                    </div>
                </div>
                <div className='white'>
                    white
                </div>
            </div>
            <div className='spotlightGridWrapper'>

            </div>
            <div className='productCardWrapper'>
                {loaded && productList.map(product => {
                    return (
                        <ProductCard key={product?.id} product={product} />
                    )
                })}
            </div>
        </div>
    )
}

export default AllProducts
