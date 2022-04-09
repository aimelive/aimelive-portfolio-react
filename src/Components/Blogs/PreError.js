import { Link } from "react-router-dom";
const ShowError = ({ error }) => {
  let errorName = "Connect to the internet!";
  let further = "You're offline. Check your connection.";
  if (error === "Blog not found!!") {
    errorName = "Blog not found!";
    further = "A blog post you're looking for doesn't exist.";
  }
  return (
    <div>
      <div className="errorShow">
        <div className="errorCard">
          <h1>
            <i className="fa fa-close"> </i>
          </h1>
          <h3> {errorName}</h3>
          <p>{further}</p>

          <div className="a">
            {error !== "Blog not found!!" ? (
              <button
                onClick={() => {
                  window.location.reload();
                }}
              >
                Retry
              </button>
            ) : (
              <Link to="/blogs">Go to Blogs</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowError;
