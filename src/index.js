import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div>
      <NavBar />
      <div className="mainContent">
        <App />
      </div>{" "}
      <Footer />
    </div>{" "}
  </BrowserRouter>
);
