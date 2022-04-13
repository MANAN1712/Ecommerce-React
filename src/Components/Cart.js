import { useContext, useState } from "react";
import Cartcontext from "./Cartcontext";
import CartItem from "./CartItem";
import Bar from "./Bar";
import "./Cart.css";
import Footer from "../Footer";
import { Navigate, useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import Items from "./Items";
import { Grid } from "@mui/material";

const Cart = () => {
  const navigate = useNavigate();

  const handleRedirectoo = () => {
    navigate("/CheckOut");
  };

  const { showCart, cartItems, showHideCart } = useContext(Cartcontext);
  console.log(cartItems);

  return (
    <>
      <Bar />
      <div className="cart-wrapper">
        <div style={{ textAlign: "right" }}>
          <i
            style={{ cursor: "Pointer" }}
            // className="fa fa-time-circle"
            aria-hidden="true"
            onClick={showHideCart}
          >
            {" "}
          </i>
        </div>

        <div className="cart-wrap">
          {cartItems.length === 0 ? (
            <h1
              style={{
                fontFamily: "serif",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {" "}
              CART IS EMPTY{" "}
            </h1>
          ) : (
            <div className="cart-body">
              <Grid container>
                {cartItems.map((item) => {
                  return <CartItem key={item._id} item={item} md={3} />;
                })}
              </Grid>
            </div>
          )}
        </div>

        <div className="cart-total-main">
          <div className="cart-total">
            <div>CART TOTAL</div>

            <div>
              {cartItems.reduce(
                (amount, item) => Number(item.totalPrice) + amount,
                0
              )}
            </div>
            <button className="btn" onClick={handleRedirectoo}>
              {" "}
              Checkout{" "}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
