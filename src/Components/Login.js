import React, { useContext, useEffect, useState } from "react";

import "./Item.css";
import { Form, Button } from "react-bootstrap";
import Bar from "./Bar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import Cartcontext from "./Cartcontext";
import aos from "aos";

function Login(props) {
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

  const { userLogin } = useContext(Cartcontext);

  const [user, setUser] = useState("");
  const [email, Setemail] = useState("");
  const [Password, Setpassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/Register");
  };

  const fetchData = async () => {
    fetch(
      "https://e-comm-12d66-default-rtdb.firebaseio.com/loginform.json"
    ).then((resp) => {
      resp.json().then((results) => {
        const fetchResults = [];
        for (let key in results) {
          fetchResults.unshift({
            ...results[key],
            id: key,
          });
        }
        setUser(fetchResults);
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleLogin = () => {
    if (email === "" || Password === "") {
      console.log("error");
    } else {
      const auth = user.filter((item) => {
        if (item.Email === email && item.Password === Password) {
          return item;
        }
      });

      if (auth.length === 1) {
        console.log("authorized");
        console.log(auth);
        userLogin(auth);
        navigate("/");
      } else {
        console.log("unauthorizedd");
        navigate("/register");
      }
    }
  };

  return (
    <>
      <Bar />

      <div data-aos="flip-left" className="login">
        <div className="login-body">
          <h1> Login </h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                className="input-bootstrap"
                placeholder="Enter email"
                value={email}
                onChange={(e) => Setemail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                className="input-bootstrap"
                placeholder="Password"
                value={Password}
                onChange={(e) => Setpassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="secondary"
              className="input-bootstrap"
              onClick={handleLogin}
              type="submit"
            >
              Login
            </Button>

            <Button
              onClick={handleRedirect}
              variant="secondary"
              style={{ marginLeft: "15px" }}
              className="input-bootstrap"
            >
              Register
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
