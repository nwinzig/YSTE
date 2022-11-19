import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getProductByCategory } from '../../store/products'
import CategoryCard from "./CategoryCard";
import './CategoryCard.css'


function CategoryPage () {
    const {categoryName} = useParams()
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products_by_category)
    console.log('USE SELECTOR FOR PRODUCTS STATE', products)

    useEffect(() => {
        dispatch(getProductByCategory(categoryName))
    },[dispatch, categoryName])
    if (!products) return <p>...loading</p>
    return (
        <div >
            <h1 style={{textAlign: 'center'}}>{categoryName}</h1>
            <div className="category-card-wrapper">
                {products?.map((product, index) => (
                    <CategoryCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default CategoryPage
// {
//     products.map((product, index) => (
//         <div key={index}>
//             <img src={product.image1} alt='No image displayed' />
//             <h1>{product.product_name}</h1>
//             <p>{product.description}</p>
//         </div>
//     ))
// }

    // < OwnerItemCard key = { index } product = { product } />
