import { Link } from "react-router-dom";

const BlogHeader = () => {
  return (
    <div>
      <div>
        <div className="header">
          <form>
            <span> Aimelive - Blog Posts🎉🪄 </span>{" "}
            <input
              type="search"
              name="searchBlog"
              id="searchBlog"
              className="searchBlog"
              placeholder="Search Aimelive"
            />
          </form>{" "}
        </div>{" "}
        <div className="subHeader">
          <p>
            <i className="fa fa-link"> </i> Quick Links:{" "}
            <Link to="/"> Personal blog </Link> <Link to="/"> Projects </Link>{" "}
            <Link to="/"> Careers </Link> <Link to="/"> Awards </Link>{" "}
            <Link to="/"> Motivations </Link> <Link to="/"> View CV </Link>{" "}
            <Link to="/"> Social media links </Link>{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default BlogHeader;
