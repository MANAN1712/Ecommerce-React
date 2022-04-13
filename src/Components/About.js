import React from "react";
import Bar from "./Bar";
import Footer from "../Footer";
import "./Item.css";

const About = () => {
  return (
    <>
      <Bar />

      <div className="About-main">
        <h1 className="About-header"> About us </h1>

        <div className="Aboutus">
          <div>
            <h1>Creativity </h1>
            <p>
              It's the ability to think outside the box. We
              <br /> make decisions, create something new and <br />
              generate a lot of ideas.
            </p>
          </div>

          <div>
            <h1>World wide</h1>
            <p>
              All sites you make with Mobirise are mobile-
              <br />
              friendly. You don't have to create a special <br />
              mobile version of your site.
            </p>
          </div>

          <div>
            <h1>Unique Styles</h1>
            <p>
              Mobirise offers many site blocks in several <br /> themes, and
              though these blocks are pre-
              <br />
              made, they are flexible.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
