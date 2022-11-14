import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getSingleProduct} from '../../store/products'
import {useParams} from 'react-router-dom'

function ProductDetail() {
    const dispatch = useDispatch()
    const product = useSelector((state) => state.products)
    console.log('???????? ProductDetail', product)
    const {productId} = useParams()
    // console.log('params', params)
    useEffect(() => {
        dispatch(getSingleProduct(productId))
    },[dispatch, productId])
    return (
        <h1>{product.product_name}</h1>
    )
}

export default ProductDetail
