import "./css/styles.css";
import HomePage from "./Components/Main/HomePage";
import ContactPage from "./Components/Main/Contact";
import About from "./Components/Main/About";
import Login from "./Components/Main/Login";
import SignUp from "./Components/Main/SignUp";
import Blogs from "./Components/Blogs/BlogMain";
import BlogDetail from "./Components/Blogs/OneBlog";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" exact={true} element={<HomePage />} />
      <Route path="/contact" exact={true} element={<ContactPage />} />
      <Route path="/about" exact={true} element={<About />} />
      <Route path="/blogs" exact={true} element={<Blogs />} />
      <Route path="/blogs/:id" exact={true} element={<BlogDetail />} />
      <Route path="/login" exact={true} element={<Login />} />
      <Route path="/signup" exact={true} element={<SignUp />} />
      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}

export default App;
