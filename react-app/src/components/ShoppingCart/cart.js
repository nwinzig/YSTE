import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EmptyCartComponent from "./emptyCart";
import FilledCartComponent from "./cartWithItems";
import { deleteProdFromCart, getCurrentCart } from "../../store/cart";
import { getAllProducts, getSingleProduct } from "../../store/products";
import "./cart.css"
import AddToCart from "./AddToCart";

function CartComponent() {
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    const productsObj = useSelector((state) => state.products);
    const userObj = useSelector((state) => state.session.user);
    const cartObj = useSelector((state) => state.cart);
    // console.log('what are we getting from cart state', cartObj)
    let cartArr = cartObj.cart;
    let productsArr = Object.values(productsObj);
    // console.log('cartArr', cartArr)
    // console.log('productsArr',productsArr)
    useEffect(() => {
        dispatch(getCurrentCart()).then(() => dispatch(getAllProducts()));
    }, [dispatch]);

    let productIds = [];
    let cartItems = [];

    if (cartArr) {
        productIds = cartArr.map((item) => {
        return item.product_id;
        });
    }
    // console.log('productIds',productIds)
    cartItems = productsArr?.filter((product) => {
        return productIds?.includes(product?.id);
    });

    //testing
    // productsArr?.forEach(product => {
    //     if(productIds?.includes(product?.id)){
    //         cartItems.push(product)
    //     }
    // })

    cartItems?.forEach(product => {
        let total = 0
        product.quantity = total
        for(let i = 0; i < cartArr.length; i++){
            if(cartArr[i].product_id === product.id){
                product.quantity+=1
            }
        }
        total = 0
    })

    //
    let spotlightProducts = []
    let numProducts = 0
    while(numProducts < 5){
        let index = Math.floor(Math.random() * productsArr.length-1)
        spotlightProducts.push(productsArr[index])
        numProducts+=1
    }
    console.log('spotlight products', spotlightProducts)


    // console.log('cartItems', cartItems)
    const handleDelete = (e, productId) => {
        e.preventDefault()
        let productToDelete = cartArr?.find(({product_id}) => product_id === productId)

        dispatch(deleteProdFromCart(productToDelete?.id))
        window.location.reload()
    }

    let sum = 0;
    cartItems?.forEach(product => {
        sum+= product?.price * product?.quantity
    })

    return (
        <div className="ultimate-wrapper">
            <div className="headerWrapper">
                <div className="item-count">
                {cartItems?.length} items in your cart
                </div>
                <div className="shoppingWrapper">
                <Link to={'/'}className="animatedKeepShopping">
                    Keep shopping
                </Link>
                </div>
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
                                <Link to={`/product/${item.id}`} className="item-name">
                                    {item?.product_name}
                                </Link>
                                <div className="itemQuantity">
                                    Quantity: {item?.quantity}
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
                                <div className="total-item-price">
                                    Total Price: ${item?.price * item.quantity}
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
                <div className="discoverText">
                    <h2>
                        Discover other items
                    </h2>
                </div>
                <div className="moreProducts">
                    {spotlightProducts?.map((product) => (
                        <div to={`/product/${product?.id}`}className="spotlightProduct">
                            <Link to={`/product/${product?.id}`} className="spotlightImageWrapper">
                                <img className="spotlightimage" src={product?.image1} alt="Product image"></img>
                            </Link>
                            <Link to={`/product/${product?.id}`} className="spotlightName">
                                {product?.product_name}
                            </Link>
                            <div className="spotlightPrice">
                                ${product?.price}
                            </div>
                            {/* <div>
                                <AddToCart />
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        );
    }

export default CartComponent;
