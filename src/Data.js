import React, { useContext } from "react";

import "./index.css";
import Cartcontext from "./Components/Cartcontext";
import { BsFillCartFill } from "react-icons/bs";

function Data(props) {
  const { addToCart } = useContext(Cartcontext);
  const { id, name, price, rating, image } = props.name;

  const handleChange = () => {
    const obj = {
      ...props.name,
      quantity: 1,
      totalPrice: props.name.price,
    };

    addToCart(obj);
  };

  // console.log("props pa", props.name.image);

  return (
    <>
      <div className="Data">
        <img
          src={image}
          style={{ marginTop: "10px", height: "150px", objectFit: "contain" }}
        />
        <p>NAME: {name}</p>
        <p>PRICE: {price}</p>

        <div>
          <button className="btn" onClick={handleChange}>
            {" "}
            <BsFillCartFill
              style={{
                marginRight: "5px",
                marginBottom: "3px",
              }}
            />
            SHOP NOW{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Data;
