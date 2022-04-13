import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Components/Styles/Navbar.css";

import Cartcontext from "./Cartcontext";

import { Button, Container, Modal, Nav, Navbar } from "react-bootstrap";

import { BsFillCartFill } from "react-icons/bs";
import Items from "./Items";
import { Avatar } from "@mui/material";

function Bar(props) {
  // const { logout, Login } = useState();
  const { cartItems, user, userLogout } = useContext(Cartcontext);

  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRedirect = () => {
    navigate("/checkout");
  };

  return (
    <>
      <Navbar expand="lg" className="navbar  sticky-top ">
        <Container>
          <Navbar.Brand className="navbar-img d-flex align-items-center">
            <img
              src="./img/navbar_img.png"
              style={{ height: "40px", width: "40px" }}
            ></img>
            <h4 className="m-0 text-light"> Mobile Shop</h4>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <NavLink className="Nav mx-2 " to="/">
                Home
              </NavLink>

              <NavLink className="Nav mx-2 " to="/Items">
                Items{" "}
              </NavLink>

              <NavLink className="Nav mx-2 " to="/Contact">
                Contact
              </NavLink>

              <NavLink className="Nav mx-2 " to="/About">
                About us{" "}
              </NavLink>

              <NavLink className="Nav mx-4" to="/Orders">
                your orders
              </NavLink>

              <NavLink className="cart " to="/Cart">
                Cart{" "}
                <BsFillCartFill
                  style={{ marginBottom: "5px", marginLeft: "8px" }}
                />
                {cartItems.length > 0 && (
                  <div className="items_count">
                    {" "}
                    <span>{cartItems.length}</span>
                  </div>
                )}
              </NavLink>

              <NavLink className="Nav   mx-2 " to="/Login">
                {user ? (
                  <button
                    className="Nav"
                    style={{ backgroundColor: "transparent", border: "none" }}
                    onClick={userLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="Nav"
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    Login
                  </button>
                )}
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <img
          className="img-bar"
          src="./img/01.webp"
          style={{
            height: "450px",
            width: "100%",
          }}
        ></img>
      </div>

      <div className="bar-description">
        <div>
          <h5> FREE SHIPPING </h5>
          <p> For orders over 5000 </p>
        </div>

        <div>
          <h5> OFFICIAL DISCOUNTS</h5>
          <p> Save Big on next product </p>
        </div>

        <div>
          <h5> 24/7 HELPLINE </h5>
          <p> Care till the end</p>
        </div>
      </div>
    </>
  );
}

export default Bar;
