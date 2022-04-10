import { Link, useNavigate } from "react-router-dom";
import notfound from "../images/notfound.png";
const NotFound = () => {
  document.title = "Aimelive - Page Not Found";
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <img src={notfound} alt="page not found" />
      <h1> Sorry, Page not found! </h1>
      <p>
        The page you are trying to access does not exist, temporary removed by
        an admin or typed wrong url.
      </p>
      <Link to="/">
        <i className="fa fa-arrow-circle-o-left"> </i> Go to Home
      </Link>
      <button onClick={() => navigate("/blogs")}>Go to Blogs </button>
    </div>
  );
};

export default NotFound;
