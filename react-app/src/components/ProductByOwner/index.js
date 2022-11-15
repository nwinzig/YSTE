import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../store/products'
import { useHistory, useParams } from 'react-router-dom'
import { getUserProducts } from '../../store/products'

function OwnerProducts() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [loaded, isLoaded] = useState(false)
    const userId = useSelector(state => state.session.user.id)
    const products = useSelector((state) => state.products.products)
    // console.log('owner productssss', products)

    useEffect(() => {
        dispatch(getUserProducts(userId)).then(() => (isLoaded(true)))
    }, [dispatch])

    const addBtn = (e) => {
        e.preventDefault()
        history.push('/newProduct')
    }

    return (
        <>
            <h1>My Products!</h1>
            {loaded && products.map(product => (

                <div key={product.id}>
                    <div>{product.product_name}</div>
                    <div>{product.description}</div>
                    <div>${product.price}</div>
                    <div>{product.category}</div>
                    <button>Edit</button>
                    <button>Delete</button>
                    <div>-----------------------------</div>
                </div>
            ))}
            <button onClick={addBtn}>+</button>
        </>
    )
}

export default OwnerProducts
