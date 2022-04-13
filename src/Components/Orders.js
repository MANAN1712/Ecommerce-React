import React, { useContext, useEffect, useState } from "react";
import Bar from "./Bar";
import Footer from "../Footer";

import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import "../Components/Order.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { navigate, useNavigate } from "react-router-dom";
import Cartcontext from "./Cartcontext";
import { Key } from "@mui/icons-material";

const Orders = () => {
  const { saveorder, Order } = useContext(Cartcontext);
  console.log(Order);

  const [mobile, Setmobile] = useState("");
  const [email, Setemail] = useState("");
  const [Reason, Setreason] = useState("");

  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const { showCart, cartItems, showHideCart } = useContext(Cartcontext);
  const [user, setUser] = useState("");

  const fetchData = async () => {
    fetch(
      "https://checkout-3f986-default-rtdb.firebaseio.com/CHECKOUT.json"
    ).then((resp) => {
      resp.json().then((results) => {
        const fetchResults = [];
        for (let key in results) {
          fetchResults.unshift({
            ...results[key],
            id: key,
          });
        }

        saveorder(fetchResults);

        setUser(fetchResults);
      });
    });
  };

  const cancelorder = async () => {
    navigate("/");
    const res = await fetch(
      "https://cancel-order-9531c-default-rtdb.firebaseio.com/Cancel-Order.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          mobile,
          email,
          Reason,
        }),
      }
    );

    Setemail("");
    Setreason("");
    Setmobile("");
  };
  console.log("user", user);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Bar />

      <div className="order-main">
        <Container>
          <Grid container justifyContent="Space-between">
            {user.length > 0 &&
              user.map((item, index) => {
                return (
                  <div key={index}>
                    <Grid item md={4}>
                      <div className="order-body">
                        <h6> Name :- {item.FullName}</h6>
                        <h6> Email :- {item.email}</h6>
                        <h6> Phone :- {item.phone}</h6>
                        <h6> Address :-{item.Address}</h6>
                        <h6> City :-{item.City}</h6>
                        <h6> State :-{item.State}</h6>
                        <h6> Pincode :-{item.Pincode}</h6>
                        <h6> TotalPrice :-{item.totalPrice}</h6>
                        <h6> Delivery :-{item.Delivery ? "true" : "false"}</h6>

                        <Button
                          className="input-bootstrap-order"
                          onClick={handleShow}
                        >
                          Cancel order
                        </Button>
                      </div>
                    </Grid>

                    <div className="modal">
                      <Modal
                        className="order--body"
                        show={show}
                        onHide={handleClose}
                        required
                      >
                        <div className="order--body">
                          <Modal.Header closeButton>
                            <Modal.Title style={{ padding: "10px" }}>
                              Cancel Orders{" "}
                            </Modal.Title>
                          </Modal.Header>

                          <Form.Label htmlFor="inputPassword5">
                            Email id
                          </Form.Label>
                          <Form.Control
                            type="email"
                            className="input-bootstrap-order"
                            required
                            id="email"
                            onChange={(e) => Setemail(e.target.value)}
                            aria-describedby="HelpBlock"
                          />

                          <Form.Label htmlFor="inputPassword5">
                            Mobile No
                          </Form.Label>
                          <Form.Control
                            type="mobileNumber"
                            className="input-bootstrap-order"
                            required
                            id="Number"
                            onChange={(e) => Setmobile(e.target.value)}
                            aria-describedby="HelpBlock"
                          />

                          <Form.Label htmlFor="inputPassword5">
                            Reason for cancel order
                          </Form.Label>
                          <FloatingLabel controlId="floatingTextarea2">
                            <Form.Control
                              as="textarea"
                              className="input-bootstrap-order"
                              required
                              placeholder="Leave a comment here"
                              onChange={(e) => Setreason(e.target.value)}
                              style={{ height: "100px", padding: "10px" }}
                            />
                          </FloatingLabel>

                          <Modal.Footer>
                            <Button
                              variant="secondary"
                              onClick={handleClose}
                              className="input-bootstrap-order"
                            >
                              Close
                            </Button>
                            <Button
                              variant="primary"
                              // onClick={handlecancel}
                              onClick={cancelorder}
                              type="submit"
                              className="input-bootstrap-order"
                            >
                              Cancel order
                            </Button>
                          </Modal.Footer>
                        </div>
                      </Modal>
                    </div>
                  </div>
                );
              })}
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Orders;
