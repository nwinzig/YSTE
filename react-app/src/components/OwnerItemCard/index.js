import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { deleteItem } from '../../store/products'

function OwnerItemCard({ product }) {
    // console.log('this is item prop', product)
    const dispatch = useDispatch()
    const history = useHistory()


    const deleteBtn = (e, productId) => {
        e.preventDefault()
        // console.log('this is my deleted item id', productId)
        dispatch(deleteItem(productId))
    }
    return (
        <>
            <div>{product?.product_name}</div>
            <div>{product?.description}</div>
            <div>${product?.price}</div>
            <div>{product?.category}</div>
            <button>Edit</button>
            <button onClick={(e) => deleteBtn(e, product.id)}>Delete</button>
            <div>-----------------------------</div>
        </>

    )
}

export default OwnerItemCard
