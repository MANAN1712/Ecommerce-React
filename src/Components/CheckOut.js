import React, { useContext, useEffect, useState } from "react";
import "./Item.css";
import { Button, Col, Form, Row, Nav } from "react-bootstrap";
import Bar from "./Bar";
import Footer from "../Footer";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Cartcontext from "./Cartcontext";
import { SettingsOutlined } from "@mui/icons-material";

function CheckOut(props) {
  const { cartItems, user } = useContext(Cartcontext);

  const [email, Setemail] = useState("");
  const [FullName, Setfullname] = useState("");
  const [Address, SetAddress] = useState("");
  const [City, Setcity] = useState("");
  const [phone, Setphone] = useState("");
  const [Pincode, SetPincode] = useState("");
  const [State, SetState] = useState("");
  const [Delivery, Setdelivery] = useState(false);
  const [totalPrice, settotalprice] = useState();
  const [Password, Setpassword] = useState("");

  const navigate = useNavigate();

  const Submit = async () => {
    if (
      email === "" ||
      FullName === "" ||
      phone === "" ||
      Address === "" ||
      City === "" ||
      Pincode === ""
    ) {
      console.log("error");
    } else {
      navigate("/Bill");
    }

    Setemail("");
    Setfullname("");
    Setcity("");
    Setphone("");
    SetPincode("");
    settotalprice("");

    const res = await fetch(
      "https://checkout-3f986-default-rtdb.firebaseio.com/CHECKOUT.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          email,
          FullName,
          Address,
          City,
          State,
          phone,
          Pincode,
          Delivery,
          totalPrice,
        }),
      }
    );
  };

  useEffect(() => {
    const amount = cartItems.reduce(
      (amount, item) => Number(item.totalPrice) + amount,
      0
    );
    settotalprice(amount);
  }, []);

  return (
    <>
      {user ? (
        <>
          <Bar />

          <div className="Checkout">
            <h3
              style={{
                textAlign: "center",
                border: "2px solid black",
                margin: "10px",
                padding: "10px",

                fontWeight: "bold",
              }}
            >
              {" "}
              ADD DETAILS{" "}
            </h3>
            <div className="check">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label> Name</Form.Label>
                  <Form.Control
                    className="input-bootstrap"
                    type="text"
                    placeholder="First Name"
                    required
                    value={FullName}
                    onChange={(e) => Setfullname(e.target.value)}
                  />
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control
                      className="input-bootstrap"
                      type="email"
                      placeholder="Email id"
                      required
                      value={email}
                      onChange={(e) => Setemail(e.target.value)}
                    />
                  </Form.Group>
                </Row>

                <Form.Group
                  as={Col}
                  controlId="formGridZip"
                  style={{ marginTop: "10px" }}
                >
                  <Form.Label>phone</Form.Label>
                  <Form.Control
                    className="input-bootstrap"
                    required
                    value={phone}
                    onChange={(e) => Setphone(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    className="input-bootstrap"
                    placeholder="1234 Main St"
                    required
                    value={Address}
                    onChange={(e) => SetAddress(e.target.value)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    className="input-bootstrap"
                    required
                    value={City}
                    onChange={(e) => Setcity(e.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  controlId="formGridZip"
                  style={{ marginTop: "10px" }}
                >
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    className="input-bootstrap"
                    required
                    value={State}
                    onChange={(e) => SetState(e.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  controlId="formGridZip"
                  style={{ marginTop: "10px" }}
                >
                  <Form.Label>Pin Code</Form.Label>
                  <Form.Control
                    className="input-bootstrap"
                    required
                    value={Pincode}
                    onChange={(e) => SetPincode(e.target.value)}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  style={{ marginTop: "10px" }}
                  controlId="formBasicPassword"
                >
                  <Form.Label>
                    {" "}
                    Total Amount <div>{totalPrice}</div>
                  </Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" id="formGridCheckbox ">
                  <Form.Check
                    style={{ marginTop: "20px" }}
                    inline
                    label="  Cash on delivery"
                    name="group1"
                    type="checkbox"
                    required
                    value={Delivery}
                    onChange={(e) => Setdelivery(e.target.checked)}
                  />
                </Form.Group>

                <Button
                  style={{
                    marginBottom: "0px",
                    width: "100%",
                  }}
                  className="input-bootstrap"
                  variant="primary"
                  onClick={() => Submit()}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <Navigate to="/Login" />
      )}
    </>
  );
}

export default CheckOut;
