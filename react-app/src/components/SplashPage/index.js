import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/products'
import ProductCard from '../ProductCard/index'
import './SplashPage.css'
import { Redirect, useHistory } from 'react-router-dom'
import { getCurrentCart } from '../../store/cart'

function AllProducts() {
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)
    const products = useSelector(state => state.products)
    const user = useSelector(state => state.session.user)
    const history = useHistory()

    let productList = Object.values(products)
    console.log('!!!!!!!!', productList)
    useEffect(() => {
        dispatch(getAllProducts()).then(() => dispatch(getCurrentCart())).then(setLoaded(true))
    }, [dispatch])

    // console.log('firstname', user)
    let intro
    if (user) {
        intro = <h1>Welcome back {user?.first_name}!</h1>
    } else {
        intro = <h1>Welcome to YSTE!</h1>
    }


    //get random spotlight images
    let spotlightProducts = []
    let numProducts = 0
    while(numProducts < 8){
        let index = Math.floor(Math.random() * productList.length-1)
        spotlightProducts.push(productList[index])
        numProducts+=1
    }
    console.log('spotlight products', spotlightProducts)
    console.log('first image', spotlightProducts[0]?.image1)
    let image1 = spotlightProducts[0]?.image1
    let price1 = spotlightProducts[0]?.price
    let image2 = spotlightProducts[1]?.image1
    let price2 = spotlightProducts[1]?.price
    let image3 = spotlightProducts[2]?.image1
    let price3 = spotlightProducts[2]?.price
    let image4 = spotlightProducts[3]?.image1
    let price4 = spotlightProducts[3]?.price
    let image5 = spotlightProducts[4]?.image1
    let price5 = spotlightProducts[4]?.price
    let image6 = spotlightProducts[5]?.image1
    let price6 = spotlightProducts[5]?.price
    let image7 = spotlightProducts[6]?.image1
    let price7 = spotlightProducts[6]?.price
    let image8 = spotlightProducts[7]?.image1
    let price8 = spotlightProducts[7]?.price
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
            </div>
            <div className='spotlightGridWrapper'>
                <div className='spotCol1'>
                    <div className='top1' style={{backgroundImage: `url(${image1})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat' }} id='spotlightHover'>
                        <div className='spotlightpriceHolder'>
                            ${price1}
                        </div>
                    </div>
                    <div className='bottom1' style={{backgroundImage: `url(${image2})`, backgroundSize:'cover' }} id='spotlightHover'>

                    </div>
                </div>
                <div className='spotCol2'>
                    <div className='top2' style={{backgroundImage: `url(${image3})`, backgroundSize:'cover' }} id='spotlightHover'>

                    </div>
                    <div className='bottom2' style={{backgroundImage: `url(${image4})`, backgroundSize:'cover' }} id='spotlightHover'>

                    </div>
                </div>
                <div className='spotCol3'>
                    <div className='top3' style={{backgroundImage: `url(${image5})`, backgroundSize:'cover' }} id='spotlightHover'>

                    </div>
                    <div className='bottom3' style={{backgroundImage: `url(${image6})`, backgroundSize:'cover',}} id='spotlightHover'>

                    </div>
                </div>
                <div className='spotCol4'>
                    <div className='top4' style={{backgroundImage: `url(${image7})`, backgroundSize:'cover' }} id='spotlightHover'>

                    </div>
                    <div className='bottom4' style={{backgroundImage: `url(${image8})`, backgroundSize:'cover' }} id='spotlightHover'>

                    </div>
                </div>
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
