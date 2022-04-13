import aos from "aos";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, NavLink, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Bar from "./Bar";
import "./Item.css";

const Register = () => {
  useEffect(() => {
    aos.init({
      offset: 300, // offset (in px) from the original trigger point
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: "ease-in", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the a
    });
  }, []);

  const [FullName, setfullname] = useState("");
  const [Email, Setemail] = useState("");
  const [Password, Setpassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage("valid Email id");
    } else {
      setIsValid(false);
      setMessage("invalid Email id");
    }
  };

  const navigate = useNavigate();

  const handleRedirect = async () => {
    if (FullName === "" || Email === "" || Password === "") {
      console.log("error");
    } else {
      navigate("/Login");
    }

    const res = await fetch(
      "https://e-comm-12d66-default-rtdb.firebaseio.com/loginform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          FullName,
          Email,
          Password,
        }),
      }
    );
  };

  return (
    <>
      <Bar />
      <div data-aos="flip-left" className="reg">
        <div className="reg-body">
          <h1 style={{ textAlign: "center" }}> REGISTER HERE </h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label> Full Name</Form.Label>
              <Form.Control
                className="input-bootstrap"
                type="text"
                placeholder="First Name"
                onChange={(e) => setfullname(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="input-bootstrap"
                onClick={validateEmail}
                onChange={(e) => Setemail(e.target.value)}
                required
              />
              <div className={`message ${isValid ? "success" : "error"}`}>
                {message}
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="input-bootstrap"
                onChange={(e) => Setpassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              onClick={handleRedirect}
              variant="secondary"
              className="input-bootstrap"
              style={{ marginLeft: "35px" }}
              type="submit"
            >
              Register
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
