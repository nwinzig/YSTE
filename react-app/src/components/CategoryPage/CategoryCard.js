import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getProductByCategory } from '../../store/products'
import './CategoryCard.css'
import {useHistory} from 'react-router-dom'

function CategoryCard ({product}) {
    const history = useHistory()
    return (
        <div className="category-card-container" onClick={() => history.push(`/product/${product?.id}`)}>
            <img src={product.image1} alt='No image displayed' />
            <div className="category-card-text-container">
                <h1>{product.product_name}</h1>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default CategoryCard
// onClick = {() => history.push(`/product/${product?.id}`)} 
