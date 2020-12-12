import React, { useState } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import "./Cart.css";
import { MdDelete } from "react-icons/md";

import { IconContext } from "react-icons";

import {
  getProducts,
  productDeleted,
  getTotalproductPrice,
} from "../../store/CartProducts";
import configureStore from "../../store/configureStore";
import CounterCart from "./CounterCart";
const store = configureStore();
function Cart(props) {
  const dispatch = useDispatch();
  const shoppingCart = useSelector(getProducts);

  const totalProductsPrice = useSelector(getTotalproductPrice);

  return (
    <Provider store={store}>
      <div style={{ backgroundColor: "black", flex: 1, padding: 24 }}>
        <p style={{ marginTop: 12, color: "white", fontWeight: "bold" }}>
          Added Products Cart
        </p>
      </div>
      <div className="cart-container">
        <div className="cart-details" style={{ marginTop: "100px" }}>
          {shoppingCart.length > 0 ? (
            shoppingCart.map((cart) => (
              <div className="cart" key={cart.id}>
                <span className="cart-image">
                  <img src={cart.image} alt="not found" />
                </span>
                <span className="cart-product-name">{cart.name}</span>
                <span className="cart-product-price">{cart.price}</span>
                <CounterCart
                  productid={cart.id}
                  price={cart.price}
                  dispatch={dispatch}
                />
                <span className="product-total-price">
                  Rs {cart.totalSignleProductPrice}
                </span>
                <span
                  className="delete-product"
                  onClick={() => dispatch(productDeleted({ id: cart.id }))}
                >
                  <IconContext.Provider
                    value={{
                      color: "blue",

                      size: 30,
                    }}
                  >
                    <MdDelete />
                  </IconContext.Provider>
                </span>
              </div>
            ))
          ) : (
            <div className="empty">Sorry Your Cart is Currently Emplty</div>
          )}
        </div>
        {shoppingCart.length > 0 ? (
          <div className="cart-summary">
            <div className="summary">
              <h3>Cart Summary</h3>
              <div className="total-items">
                <div className="items">Total items</div>
                <div className="items-count">{shoppingCart.length}</div>
              </div>
              <div className="total-price-section">
                <div className="just-title">Total Price</div>
                <div className="items-price">Rs {totalProductsPrice}</div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </Provider>
  );
}

export default Cart;
