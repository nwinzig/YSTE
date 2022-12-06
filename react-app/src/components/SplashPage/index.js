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

    useEffect(() => {
        dispatch(getAllProducts()).then(() => setLoaded(true))
    }, [dispatch])

    let intro
    if (user) {
        intro = <h1>Welcome back {user?.first_name}!</h1>
    } else {
        intro = <h1>Welcome to YSTE!</h1>
    }

    const [newSpotlightProducts, setNewSpotlightProducts] = useState([])
    useEffect(() => {

        async function fetchSpotlight(){
            const request = await fetch('/api/products/spotlight')
            console.log('the original request', request)
            const newRequest = await request.json()
            console.log('what happens with this new request', newRequest)
            setNewSpotlightProducts(newRequest.Products)
        }
        fetchSpotlight()
    },[])


    // click to go to category page
    function changeToCars(){
        history.push('/category/Cars')
    }
    function changeToClothing(){
        history.push('/category/Clothing')
    }
    function changeToElectronics(){
        history.push('/category/Electronics')
    }
    function changeToHomeGoods(){
        history.push('/category/Home Goods')
    }
    function changeToMisc(){
        history.push('/category/Miscellaneous')
    }


    return (
        <div className='contentWrapper'>
            <div className='welcomeWrapper'>
            {intro}
            </div>
            <div className='circularCatWrapper'>
                <div className='beige'>
                    <div className='circularWrapperleft'>
                        <div className='circular' onClick={changeToCars} id='hoverDrop'>
                            <img src='https://res.cloudinary.com/dydhvazpw/image/upload/v1668821242/spot1/60608005_yi4uue.jpg' ></img>
                        </div>
                        <div className='carsDropDown'>
                                <div id='dropdownContainer'>
                                    <div className='carDrop'>Cars</div>
                                </div>
                        </div>
                    </div>
                    <div className='circularWrapper'>
                        <div className='circular' onClick={changeToClothing} id='hoverdropCloth'>
                            <img src='https://res.cloudinary.com/dydhvazpw/image/upload/v1668822059/spot1/fashion_f8auge.png'></img>
                        </div>
                        <div className='clothingDropDown'>
                                <div id='clothingdropdownContainer'>
                                    <div className='clothingDrop'>Clothing</div>
                                </div>
                        </div>
                    </div>
                    <div className='circularWrapper' >
                        <div className='circular' onClick={changeToElectronics} id='hoverdropEl'>
                            <img src='https://res.cloudinary.com/dydhvazpw/image/upload/v1668822102/spot1/Old_Electronics_hero_1_rxwcbt.jpg'></img>
                        </div>
                        <div className='elDropDown'>
                                <div id='eldropdownContainer'>
                                    <div className='elDrop'>Electronics</div>
                                </div>
                        </div>
                    </div>
                    <div className='circularWrapper'>
                        <div className='circular' onClick={changeToHomeGoods} id='hoverdropHg'>
                            <img src='https://res.cloudinary.com/dydhvazpw/image/upload/v1668822202/spot1/download_iai4bc.jpg'></img>
                        </div>
                        <div className='hgDropDown'>
                                <div id='hgdropdownContainer'>
                                    <div className='hgDrop'>Home Goods</div>
                                </div>
                        </div>
                    </div>
                    <div className='circularWrapperright'>
                        <div className='circular' onClick={changeToMisc} id='hoverdropMisc'>
                            <img src='https://res.cloudinary.com/dydhvazpw/image/upload/v1668822235/spot1/download-1_exexct.jpg'></img>
                        </div>
                        <div className='miscDropDown'>
                                <div id='miscdropdownContainer'>
                                    <div className='miscDrop'>Miscellaneous</div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='marginLeft' id='moveDown'>
                    Find something special
                </h2>
            </div>
            <div className='spotlightGridWrapper'>
                <div className='spotCol1'>
                    <div className='top1' style={{backgroundImage: `url(${newSpotlightProducts[0]?.image1})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat' }} id='spotlightHover' onClick={() => history.push(`/product/${newSpotlightProducts[0]?.id}`)}>
                        <div className='spotlightpriceHolder'>
                            ${newSpotlightProducts[0]?.price}
                        </div>
                    </div>
                    <div className='bottom1' style={{backgroundImage: `url(${newSpotlightProducts[1]?.image1})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat' }} id='spotlightHover' onClick={() => history.push(`/product/${newSpotlightProducts[1]?.id}`)}>
                    <div className='spotlightpriceHolder'>
                            ${newSpotlightProducts[1]?.price}
                        </div>
                    </div>
                </div>
                <div className='spotCol2'>
                    <div className='top2' style={{backgroundImage: `url(${newSpotlightProducts[2]?.image1})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat' }} id='spotlightHover' onClick={() => history.push(`/product/${newSpotlightProducts[2]?.id}`)}>
                    <div className='spotlightpriceHolder'>
                            ${newSpotlightProducts[2]?.price}
                        </div>
                    </div>
                    <div className='bottom2' style={{backgroundImage: `url(${newSpotlightProducts[3]?.image1})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat' }} id='spotlightHover' onClick={() => history.push(`/product/${newSpotlightProducts[3]?.id}`)}>
                    <div className='spotlightpriceHolder'>
                            ${newSpotlightProducts[3]?.price}
                        </div>
                    </div>
                </div>
                <div className='spotCol3'>
                    <div className='top3' style={{backgroundImage: `url(${newSpotlightProducts[4]?.image1})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat' }} id='spotlightHover' onClick={() => history.push(`/product/${newSpotlightProducts[4]?.id}`)}>
                    <div className='spotlightpriceHolder'>
                            ${newSpotlightProducts[4]?.price}
                        </div>
                    </div>
                    <div className='bottom3' style={{backgroundImage: `url(${newSpotlightProducts[5]?.image1})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat'}} id='spotlightHover' onClick={() => history.push(`/product/${newSpotlightProducts[5]?.id}`)}>
                    <div className='spotlightpriceHolder'>
                            ${newSpotlightProducts[5]?.price}
                        </div>
                    </div>
                </div>
                <div className='spotCol4'>
                    <div className='top4' style={{backgroundImage: `url(${newSpotlightProducts[6]?.image1})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat' }} id='spotlightHover' onClick={() => history.push(`/product/${newSpotlightProducts[6]?.id}`)}>
                    <div className='spotlightpriceHolder'>
                            ${newSpotlightProducts[6]?.price}
                        </div>
                    </div>
                    <div className='bottom4' style={{backgroundImage: `url(${newSpotlightProducts[7]?.image1})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat' }} id='spotlightHover' onClick={() => history.push(`/product/${newSpotlightProducts[7]?.id}`)}>
                    <div className='spotlightpriceHolder'>
                            ${newSpotlightProducts[7]?.price}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='marginLeft' id='moveDown'>
                    Browse our collection
                </h2>
            </div>
            <div className='productCardWrapper'>
                {loaded && productList?.map(product => {
                    return (
                        <ProductCard key={product?.id} product={product} />
                    )
                })}
            </div>
        </div>
    )
}

export default AllProducts
