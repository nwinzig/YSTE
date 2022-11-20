import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../store/products'
import { useHistory, useParams } from 'react-router-dom'
import { getUserProducts } from '../../store/products'
import OwnerItemCard from '../OwnerItemCard'
import './myProducts.css'

function OwnerProducts() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [loaded, isLoaded] = useState(false)
    const userId = useSelector(state => state.session.user.id)
    const products = useSelector((state) => state.products.products)
    console.log('owner productssss', products)

    const addBtn = (e) => {
        e.preventDefault()
        history.push(`/newProduct/`)
    }

    useEffect(() => {
        dispatch(getUserProducts(userId)).then(() => (isLoaded(true)))
    }, [dispatch])


    return (
        <div className='your-products-outer-wrapper'>
            <div className='your-products-container'>
                <div className='your-products-header' style={{textAlign:'center'}}>
                <h1>My Products!</h1>
                <div className='your-products-button-container'>
                    <button onClick={addBtn}>Create Product</button>
                
                </div>
                </div>
                <div className='product-card-outer-wrapper'>
                    {loaded && products?.map(product => (
                        <OwnerItemCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OwnerProducts
