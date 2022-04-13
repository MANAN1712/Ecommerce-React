import React, { useContext } from "react";
import "./Item.css";
import { BsFillCartFill } from "react-icons/bs";
import Cartcontext from "./Cartcontext";

function Dataitem(props) {
  const { addToCart } = useContext(Cartcontext);
  const { id, name, price, disc, image } = props.name;

  console.log("props pa", props.name.disc);

  const handleChange = () => {
    const obj = {
      ...props.name,
      quantity: 1,
      totalPrice: props.name.price,
    };

    addToCart(obj);
  };

  return (
    <>
      <div className="ItemsData">
        <img
          src={image}
          style={{ marginTop: "10px", height: "150px", width: "100px" }}
        />

        <p>NAME: {name} </p>

        <p>PRICE: {price}</p>

        <p>DESCRIPTION : {disc}</p>

        <button className="bttn" onClick={handleChange}>
          <BsFillCartFill
            style={{
              marginRight: "5px",
              marginBottom: "3px",
            }}
          />
          ADD TO CART
        </button>
      </div>
    </>
  );
}

export default Dataitem;
