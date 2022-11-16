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

  let cartArr = cartObj.cart;

  console.log("testing", userObj);
  let productsArr = Object.values(productsObj);


  useEffect(() => {
    dispatch(getCurrentCart()).then(() => dispatch(getAllProducts()));
  }, [dispatch]);

  // console.log('cart array',cartArr)
  console.log('products', productsObj)
  console.log('products array', productsArr)
  // if(cartArr){
  //     console.log('should be an id', cartArr[0].product_id)
  // }

  let productIds = [];
  let cartItems = [];

  if (cartArr) {
    productIds = cartArr.map((item) => {
      return item.product_id;
    });
    // console.log("product ids", productIds);
  }

  cartItems = productsArr.filter((product) => {
    return productIds.includes(product.id);
  });
  console.log('this is the cart items', cartItems)

  const handleDelete = (e, productId) => {
    e.preventDefault()
    console.log('hitting our component', productId)
    dispatch(deleteProdFromCart(productId))
    console.log('testing under dispatch')
  }
  console.log("hopeful", cartItems.length);
  // let matching = productsArr.filter(product => product.id === cartArr.product_id)
  // console.log('plez', matching)
  return (
    <div className="ultimate-wrapper">
        <div className="item-count">
          {cartItems.length} items in your cart
            </div>

    <div className="cart-wrapper">
      <div className="item-details">
      <div className="cart-mapper">
        {cartItems?.map((item) => (
          <div className="item-wrapper">
            <div className="item-name">
            {item.product_name}
            </div>
            <div className="item-description">
              {item.description}
            </div>
            <div className="item-price">
              {item.price}
            </div>
        <div className='delete-prod'>
          <button className="delete-button" onClick={(e) => handleDelete(e, item.id)} >Remove</button>
        </div>
          </div>
        ))}
      </div>
        <div className="checkout">
          How you'll pay
        </div>
        </div>
    </div>
</div>
  );
}

export default CartComponent;
