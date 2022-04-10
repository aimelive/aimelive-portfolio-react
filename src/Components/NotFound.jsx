import { Link } from "react-router-dom";
import notfound from "../images/notfound.png";
const NotFound = () => {
  document.title = "Aimelive - Page Not Found";
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
    </div>
  );
};

export default NotFound;
