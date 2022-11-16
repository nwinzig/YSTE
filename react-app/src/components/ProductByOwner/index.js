import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../store/products'
import { useHistory, useParams } from 'react-router-dom'
import { getUserProducts } from '../../store/products'
import OwnerItemCard from '../OwnerItemCard'

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
        <>
            <h1>My Products!</h1>
            {loaded && products?.map(product => (
                <OwnerItemCard key={product.id} product={product} />
            ))}
            <button onClick={addBtn}>+</button>
        </>
    )
}

export default OwnerProducts
