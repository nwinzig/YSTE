import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

function ProductCard({ product }) {
    // console.log('prop', product)
    const history = useHistory()


    return (

        <div onClick={() => history.push(`/product/${product.id}`)} >
            <img src={product?.image1} alt={product?.product_name} style={{ width: '200px', height: '200px' }} />
            <div>  {product?.product_name} </div>
            <div>{product?.description}</div>
            <div>{product?.price}</div>
            <div>-------------------------</div>
        </div>
    )
}


export default ProductCard
