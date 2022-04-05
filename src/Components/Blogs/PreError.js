import { Link } from "react-router-dom";

const ShowError = () => {
  return (
    <div>
      <div className="errorShow">
        <div className="errorCard">
          <h1>
            <i className="fa fa-close"></i>
          </h1>
          <h3>OOPS! FAILED TO FETCH! </h3>
          <p>Sorry, We are having issues for the resources you are trying to access</p>
          <p className="suggest" style={{ fontWeight: 600 }}>Here are some reasons/suggestions it is not working! </p>
          <ul>
            <li>You do not have access to this role</li>
            <li>The data may be deleted by an Admin</li>
            <li>Check your Internet Connection</li>
            <li>Refresh the page again </li>
            <li>If again, Contact an Admin for help </li>
          </ul>
          <div className="a">
            <Link to="/blogs">Try Again </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowError;
