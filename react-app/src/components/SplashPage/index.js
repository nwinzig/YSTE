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
    // console.log('!!!!!!!!', productList)
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
    // console.log('please be 8 objects', newSpotlightProducts)
    // console.log('testing whats in spotlight', newSpotlightProducts[0]?.id)

    // fetch spotlight products
    // let findingProducts = async function(){
    //     const response = await fetch('/api/products')
    //     if(response.ok){
    //         const wantedProducts = await response.json()
    //         console.log('what are you', wantedProducts)
    //         return wantedProducts
    //     }
    //     return
    // }
    // let myProducts = findingProducts()
            // const findMe = fetch('/api/products')
            //     .then((response) => {
            //         const newResponse = response.json()
            //         console.log('the response', newResponse)
            //         return newResponse
            //     })

            // const beMyProducts = async () => {
            //     const theProducts = await findMe;
            //     console.log('the products are good?',theProducts)
            //     // console.log(theProducts.Products)
            //     return theProducts
            // }
            // let goodProducts = beMyProducts()
            // console.log('does this fetch work', goodProducts)

            // function fetchingProducts(){
            //     return fetch('/api/products')
            //         .then((response) => {
            //             return response.json()
            //             .then((data) => {
            //                 console.log('hello there', data)
            //                 return data
            //             })
            //         })
            // }
            // function getData(){
            //     fetchingProducts().then((data) => {
            //         console.log('was is you', data)
            //         return data
            //     })
            // }
            // const usableData = getData()
            // console.log('plez', usableData)
            // console.log('whatatata',getData())

    // let testing = Object.values(goodProducts)
    //get random spotlight images

    // let spotlightProducts = []
    // let numProducts = 0
    // while(numProducts < 8){
    //     let index = Math.floor(Math.random() * productList.length-2)
    //     spotlightProducts.push(productList[index])
    //     numProducts+=1
    // }
    // console.log('spotlight products', spotlightProducts)
    // let image1 = spotlightProducts[0]?.image1
    // let price1 = spotlightProducts[0]?.price
    // let image2 = spotlightProducts[1]?.image1
    // let price2 = spotlightProducts[1]?.price
    // let image3 = spotlightProducts[2]?.image1
    // let price3 = spotlightProducts[2]?.price
    // let image4 = spotlightProducts[3]?.image1
    // let price4 = spotlightProducts[3]?.price
    // let image5 = spotlightProducts[4]?.image1
    // let price5 = spotlightProducts[4]?.price
    // let image6 = spotlightProducts[5]?.image1
    // let price6 = spotlightProducts[5]?.price
    // let image7 = spotlightProducts[6]?.image1
    // let price7 = spotlightProducts[6]?.price
    // let image8 = spotlightProducts[7]?.image1
    // let price8 = spotlightProducts[7]?.price
    // console.log(`item 1: image: ${image1} price: ${price1}`)
    // console.log(`item 2: image: ${image2} price: ${price2}`)
    // console.log(`item 3: image: ${image3} price: ${price3}`)
    // console.log(`item 4: image: ${image4} price: ${price4}`)
    // console.log(`item 5: image: ${image5} price: ${price5}`)
    // console.log(`item 6: image: ${image6} price: ${price6}`)
    // console.log(`item 7: image: ${image7} price: ${price7}`)
    // console.log(`item 8: image: ${image8} price: ${price8}`)


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
        history.push('/category/miscellaneous')
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
