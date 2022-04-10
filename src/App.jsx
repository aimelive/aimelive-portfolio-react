import "./css/styles.css";
import HomePage from "./Components/Main/HomePage";
import ContactPage from "./Components/Main/Contact";
import About from "./Components/Main/About";
import Login from "./Components/Main/Login";
import SignUp from "./Components/Main/SignUp";
import Blogs from "./Components/Blogs/BlogMain";
import BlogDetail from "./Components/Blogs/OneBlog";
import { Routes, Route } from "react-router-dom";
import React from "react";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/test" element={<Navigate to="/" />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
