import Bar from "./Bar";
import Footer from "../Footer";
import "./Item.css";

import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import aos from "aos";

const Contact = () => {
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

  const [email, Setemail] = useState("");
  const [textarea, Settextarea] = useState("");

  const Navigate = useNavigate();

  const handleSubmit = async () => {
    Navigate("/");
    const res = await fetch(
      "https://feedback-2dc03-default-rtdb.firebaseio.com/feedback.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          email,
          textarea,
        }),
      }
    );

    Setemail("");
    Settextarea("");
  };

  return (
    <>
      <Bar />

      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="Contact-main"
      >
        <div className="Contact-body">
          <h1 style={{ textAlign: "center" }}> Contact us </h1>
          <Form>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              className="input-bootstrap"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => Setemail(e.target.value)}
            />

            <Form.Label>Message here</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={textarea}
              style={{ resize: "none" }}
              className="input-bootstrap"
              onChange={(e) => Settextarea(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onClick={handleSubmit}
                type="submit"
                style={{ textAlign: "center" }}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
