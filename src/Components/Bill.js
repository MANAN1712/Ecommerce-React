import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Bar from "./Bar";
import Footer from "../Footer";
import Cartbill from "./Cartbill";
import Cartcontext from "./Cartcontext";
import { RiPrinterFill } from "react-icons/ri";

const Bill = () => {
  const { cartItems, emptyCart } = useContext(Cartcontext);
  const navigate = useNavigate();

  const handleRedirectoo = () => {
    emptyCart();
    navigate("/");
  };

  return (
    <div>
      <Bar />
      <h1 style={{ textAlign: "center" }}> YOUR ORDERS </h1>

      <div>
        {cartItems.map((item) => {
          return <Cartbill key={item._id} item={item} />;
        })}
      </div>

      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginRight: "20px",
            textAlign: "center",
            border: "2px solid",
            padding: "20px",
            width: "300px",
          }}
        >
          <h5> total Amout </h5>
          {cartItems.reduce(
            (amount, item) => Number(item.totalPrice) + amount,
            0
          )}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={handleRedirectoo} className="btn">
          {" "}
          Submit
        </button>

        <button
          className="btn"
          style={{ marginLeft: "10px" }}
          onClick={() => window.print()}
        >
          <RiPrinterFill style={{ marginRight: "6px" }} />
          Print
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Bill;
