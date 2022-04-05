import { Link } from "react-router-dom";
const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="cardimg toread" key={blog._id}>
          <img src={blog.imgURL} alt={blog.title} />
          <h3>{blog.category}</h3>
          <p>
            {blog.title} &nbsp;
            <Link to={"/blogs/" + blog._id} className="readmore">
              Read More
            </Link>
          </p>
          <h5>
            <span id="commentCount" className="comments">
              <i className="fa fa-comments-o"> </i> {blog.comments.length}
            </span>
            &nbsp; <span> {new Date().toDateString(blog.dateCreated)}</span>{" "}
            &nbsp;
          </h5>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
