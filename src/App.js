import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Items from "../src/Components/Items";
import Main from "./Main";

import CheckOut from "./Components/CheckOut";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Cart from "./Components/Cart";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Bill from "./Components/Bill";
import Orders from "./Components/Orders";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Items" element={<Items />} />

        <Route path="/register" element={<Register />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/Bill" element={<Bill />} />
        <Route path="/Orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
