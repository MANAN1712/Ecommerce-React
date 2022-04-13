import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Cartstate from "./Components/Cartstate";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Cartstate>
        <App />
      </Cartstate>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
