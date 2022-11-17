import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EmptyCartComponent from "./emptyCart";
import FilledCartComponent from "./cartWithItems";
import { deleteProdFromCart, getCurrentCart } from "../../store/cart";
import { getAllProducts, getSingleProduct } from "../../store/products";
import "./cart.css"

function CartComponent() {
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    const productsObj = useSelector((state) => state.products);
    const userObj = useSelector((state) => state.session.user);
    const cartObj = useSelector((state) => state.cart);
    console.log('what are we getting from cart state', cartObj)
    let cartArr = cartObj.cart;
    let productsArr = Object.values(productsObj);
    console.log('cartArr', cartArr)
    useEffect(() => {
        dispatch(getCurrentCart()).then(() => dispatch(getCurrentCart())).then(() => dispatch(getAllProducts()));
    }, [dispatch]);

    let productIds = [];
    let cartItems = [];

    if (cartArr) {
        productIds = cartArr.map((item) => {
        return item.product_id;
        });
    }
    console.log('productIds',productIds)
    // cartItems = productsArr?.filter((product) => {
    //     return productIds?.includes(product?.id);
    // });

    //testing
    productsArr?.forEach(product => {
        if(productIds?.includes(product?.id)){
            cartItems.push(product)
        }
    })

    console.log('cartItems', cartItems)
    const handleDelete = (e, productId) => {
        e.preventDefault()
        let productToDelete = cartArr?.find(({product_id}) => product_id === productId)

        dispatch(deleteProdFromCart(productToDelete?.id))
        window.location.reload()
    }

    let sum = 0;
    cartItems?.forEach(product => {
        sum+= product?.price
    })

    return (
        <div className="ultimate-wrapper">
            <div className="item-count">
            {cartItems?.length} items in your cart
            </div>
            <div className="cart-wrapper">
                <div className="item-details">
                    <div className="cart-mapper">
                        {cartItems?.map((item) => (
                        <div className="item-wrapper">
                            <div className="image-wrapper">
                                <img className="item-image" src={item?.image1} alt="Item image"></img>
                            </div>
                            <div className="productInfo">
                                <div className="item-name">
                                    {item?.product_name}
                                </div>
                                {/* <div>
                                    {item?.category}
                                </div> */}
                                <div className="item-description">
                                    {item?.description}
                                </div>
                                <div className="item-price">
                                    Price: ${item?.price}
                                </div>
                                <div className='delete-prod'>
                                    <button className="delete-button" onClick={(e) => handleDelete(e, item?.id)} >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="checkoutWrapper">
                        <h4 className="howToPay">
                            How you'll pay
                        </h4>
                        <div className="totalPriceWrapper">
                            <h4>
                                Item(s) total:
                            </h4>
                            <div>
                                ${sum}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }

export default CartComponent;
