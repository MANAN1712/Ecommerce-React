// import React from "react";
// import "./index.css";
// import { Link, NavLink } from "react-router-dom";
// import { FaFacebook } from "react-icons/fa";
// import { AiFillTwitterCircle } from "react-icons/ai";
// import { SiInstagram } from "react-icons/si";
// import { BsPinterest } from "react-icons/bs";
// import { AiFillLinkedin } from "react-icons/ai";
// import { MdOutlineCopyright } from "react-icons/md";

// const Footer = () => {
//   return (
//     <>
//       <>
//         <div className="Footer">
//           <div style={{ marginBottom: "8px" }}>
//             <h3 style={{ fontFamily: "serif" }}> Follow Us On </h3>

//             <NavLink className="Nav mx-1 " to="">
//               <FaFacebook style={{ color: "lightblue" }} />
//             </NavLink>
//             <NavLink className="Nav mx-1" to="">
//               <AiFillTwitterCircle style={{ color: "skyblue" }} />
//             </NavLink>

//             <NavLink className="Nav mx-1" to="">
//               <SiInstagram style={{ color: "pink" }} />
//             </NavLink>
//             <NavLink className="Nav  mx-1" to="">
//               <BsPinterest style={{ color: "red" }} />
//             </NavLink>

//             <NavLink className="Nav mx-1" to="">
//               <AiFillLinkedin style={{ color: "navy" }} />
//             </NavLink>
//           </div>
//           <div style={{ fontFamily: "serif" }}>
//             <h5> Email : xyz@gmail.com </h5>
//             <h5> Contact : 7201003120 </h5>
//           </div>
//         </div>

//         <div>
//           <h6
//             style={{
//               backgroundColor: "black",
//               color: "white",
//               textAlign: "center",
//               marginBottom: "0px",
//             }}
//           >
//             {" "}
//             <MdOutlineCopyright style={{ fontSize: "X-large" }} /> 2022 Copy
//             Right
//           </h6>
//         </div>
//       </>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import "../src/Components/Styles/Footr.css";

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

// import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="black">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <a
            className="btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <MDBIcon
              fab
              icon="facebook-f"
              style={{ marginRight: "5px", marginLeft: "5px" }}
            />
          </a>

          <a
            className=" btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <MDBIcon
              fab
              icon="twitter"
              style={{ marginRight: "5px", marginLeft: "5px" }}
            />
          </a>

          <a
            className=" btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <MDBIcon
              fab
              icon="google"
              style={{ marginRight: "5px", marginLeft: "5px" }}
            />
          </a>

          <a
            className=" btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <MDBIcon
              fab
              icon="instagram"
              style={{ marginRight: "5px", marginLeft: "5px" }}
            />
          </a>

          <a
            className=" btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <MDBIcon
              fab
              icon="linkedin-in"
              style={{ marginRight: "5px", marginLeft: "5px" }}
            />
          </a>

          <a
            className=" btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <MDBIcon
              fab
              icon="github"
              style={{ marginRight: "5px", marginLeft: "5px" }}
            />
          </a>
        </section>

        <section className="mb-4">
          <p style={{ fontFamily: "serif", fontWeight: "bold" }}>
            BEST ONLINE SHOP FOR MOBILES
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="4" md="6" className="mb-4 mb-md-0">
              <h5
                className="text-uppercase"
                style={{ fontFamily: "serif", fontWeight: "bold" }}
              >
                {" "}
                Mobile company{" "}
              </h5>

              <ul
                className="list-unstyled mb-0"
                style={{
                  fontFamily: "serif",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                <li className="list">
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    OPPO
                  </a>
                </li>
                <li className="list">
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    VIVO
                  </a>
                </li>
                <li className="list">
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    REALME
                  </a>
                </li>
                <li className="list">
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    SAMSUNG
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol
              lg="4"
              md="6"
              className="mb-4 mb-md-0"
              style={{ fontFamily: "serif", fontWeight: "bold" }}
            >
              <h5 className="text-uppercase">Legal</h5>

              <ul className="list-unstyled mb-0">
                <li className="list">
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Terms
                  </a>
                </li>
                <li className="list">
                  <a
                    href="#!"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol
              lg="4"
              md="6"
              className="mb-4 mb-md-0"
              style={{ fontFamily: "serif", fontWeight: "bold" }}
            >
              <h5 className="text-uppercase"> Visit us </h5>

              <ul className="list-unstyled mb-0 mt-3">
                <li className="list">
                  <a href="#!" className="text-white">
                    Thaltej, Ahmedabad Gujarat 380059
                  </a>
                </li>

                <p> +91 720-100-3120</p>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className="text-center p-3">
        © 2022 Copyright : Mobileshop@gmail.com
      </div>
    </MDBFooter>
  );
}
