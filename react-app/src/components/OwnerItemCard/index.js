import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { deleteItem } from '../../store/products'
import { getAllProducts } from '../../store/products'
import { getUserProducts } from '../../store/products'
import EditProductForm from '../EditProductForm'

function OwnerItemCard({ product }) {
    const [showEditForm, setShowEditForm] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()


    const deleteBtn = async (e, productId) => {
        e.preventDefault()
        dispatch(deleteItem(productId)).then(() => dispatch(getUserProducts()))
    }

    const editBtn = async (e, productId) => {
        history.push(`/editProduct/${product.id}`)
        

    }

    return (
        <>
            <div>{product?.product_name}</div>
            <div>{product?.description}</div>
            <div>${product?.price}</div>
            <div>{product?.category}</div>
            <button onClick={editBtn} >Edit</button>
            <button onClick={(e) => deleteBtn(e, product.id)}>Delete</button>
            <div>-----------------------------</div>
        </>

    )
}

export default OwnerItemCard
