import { AOS } from "aos";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css"; // You can also use <link> for styles

import Bar from "./Components/Bar";
import Fetch from "./Fetch";
import Footer from "./Footer";
import "./index.css";
import aos from "aos";

const Main = () => {
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

  return (
    <>
      <Bar />

      <div className="animation">
        <div className="img-anim">
          <ul className="ul">
            <li className="li">
              <img
                className="img"
                src="https://i0.wp.com/solvedquestion.com/wp-content/uploads/2021/08/galaxy-z-flip-fold-samsung-product-promo-hoyle-2021.jpg?fit=940%2C627&ssl=1"
              ></img>
            </li>

            <li className="li">
              <img
                className="img"
                src="https://www.gizbot.com/img/2018/10/vivo-v9-pro-1540800854.jpg"
              ></img>
            </li>

            <li className="li">
              <img
                className="img"
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201812/Vivo_NEX_Dual_Display_Edition_12122018.jpeg?lqDvJoQLmxKAKFkJh_sYe1tTSLkKtLpN"
              ></img>
            </li>

            <li className="li">
              <img
                className="img"
                src="https://www.gizbot.com/images/2019-08/vivo-s1_156594826370.jpg"
              ></img>
            </li>

            <li className="li">
              <img
                className="img"
                src="https://www.gizbot.com/images/2019-08/vivo-s1_156594826370.jpg"
              ></img>
            </li>

            <li className="li">
              <img
                className="img"
                src="https://www.gizbot.com/images/2019-07/vivo-s1_156352984560.jpg"
              ></img>
            </li>
          </ul>
        </div>

        <div>
          <img
            // data-aos="fade-left"
            data-aos="zoom-in"
            className="img-main"
            src="https://aroshmart.com/wp-content/uploads/2021/06/mobile-phones-banner.jpg"
            height="350px"
            width="700px"
          ></img>

          <h3
            style={{
              textAlign: "center",
              padding: "10px",
              fontFamily: "serif",
              fontWeight: "bold",
            }}
          >
            {" "}
            Special Offers Till 28/04/2022 Order Now
          </h3>
          <h4
            style={{
              textAlign: "center",
              fontFamily: "serif",
              fontWeight: "bold",
            }}
          >
            {" "}
            Discount upto 20%{" "}
          </h4>
        </div>
      </div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "serif",
          marginTop: "15px",
          backgroundColor: "skyblue",
        }}
      >
        {" "}
        CELL PHONES{" "}
      </h1>
      <Fetch />
      <Footer />
    </>
  );
};

export default Main;
