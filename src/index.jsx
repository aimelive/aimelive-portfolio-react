import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import UserContextProvider from "./Contexts/getUserInfo";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContextProvider>
    <BrowserRouter>
      <NavBar />
      <div className="mainContent">
        <App />
      </div>
      <Footer />
    </BrowserRouter>
  </UserContextProvider>
);
