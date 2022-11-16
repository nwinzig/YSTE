import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

function ProductCard({ product }) {
    console.log('prop', product)


    return (
        <>
            <img src={product?.image1} alt={product?.product_name} style={{ width: '200px', height: '200px' }} />
            <Link key={product?.id} to={`/product/${product?.id}`}>
                {product?.product_name}
            </Link>
            <div>{product?.description}</div>
            <div>{product?.price}</div>
            <div>-------------------------</div>
        </>
    )
}


export default ProductCard
