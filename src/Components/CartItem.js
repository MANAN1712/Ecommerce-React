import React, { useState } from "react";
import { useContext } from "react";
import "./Cart.css";

import Cartcontext from "./Cartcontext";

const CartItem = ({ item }) => {
  const { removeItem, increment, decrement, cartItems } =
    useContext(Cartcontext);

  const incrementCount = () => {
    increment(item.id);
  };

  const decrementCount = () => {
    decrement(item.id);
  };

  return (
    <>
      <div className="text-center class_item">
        <img
          src={item.image}
          alt=""
          style={{
            height: "150px",
            width: "100px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        />

        <div>
          {item.name} <br />
        </div>

        <div style={{ marginLeft: "0px" }}>Price {`${item.price}`}</div>

        <div className="plus-item">
          <button className="plus" onClick={incrementCount}>
            +
          </button>

          <div style={{ marginLeft: "3px", marginRight: "3px" }}>
            {item.quantity}
          </div>

          <button className="minus" onClick={decrementCount}>
            -
          </button>
        </div>

        <h5>{item.totalPrice}</h5>

        <button className="btn" onClick={() => removeItem(item.id)}>
          REMOVE
        </button>
      </div>
    </>
  );
};

export default CartItem;
