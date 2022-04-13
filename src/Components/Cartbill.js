import React, { useState } from "react";
import { useContext } from "react";
import "./Item.css";
import Cartcontext from "./Cartcontext";

const Cartbill = ({ item }) => {
  const { removeItem, increment, decrement, cartItems } =
    useContext(Cartcontext);

  return (
    <>
      <tr className="text-center billcart ">
        <td>
          <img
            src={item.image}
            alt=""
            style={{
              height: "100px",
              width: "50px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          />
        </td>

        <td>
          <div>
            {item.name} <br />
          </div>
        </td>

        <td>
          <div style={{ marginLeft: "0px" }}>Price {`${item.price}`}</div>
        </td>

        <div style={{ marginLeft: "3px", marginRight: "3px" }}>
          {item.quantity}
        </div>
        <td>
          <h5>{item.totalPrice}</h5>
        </td>

        {/* </div>
        </div> */}
      </tr>
    </>
  );
};

export default Cartbill;
