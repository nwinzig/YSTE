import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { deleteItem } from '../../store/products'
import { getAllProducts } from '../../store/products'
import { getUserProducts } from '../../store/products'
import EditProductForm from '../EditProductForm'
import './OwnerItemCard.css'

function OwnerItemCard({ product }) {
    const [showEditForm, setShowEditForm] = useState(false)
    console.log('proooop', product)
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
        <div className='product-card-container'>
            <div className='product-card-image-container' onClick={() => history.push(`/product/${product.id}`)}>
                <img src={product?.image1} alt={product?.product_name}  />
            </div>
            <div className='product-card-details-container'>
                <div onClick={() => history.push(`/product/${product.id}`)}>
                    {product?.product_name}
                </div>
                <div>{product?.description}</div>
                <div>${product?.price}</div>
                <div>{product?.category}</div>
                <div style={{display:'flex', flexDirection:'column'}}>
                <button onClick={editBtn} >Edit</button>
                <button onClick={(e) => deleteBtn(e, product.id)}>Delete</button>
                
                </div>
                <div style={{textAlign:'center'}}>-----------------------------</div>
            
            </div>
        </div>

    )
}

export default OwnerItemCard
