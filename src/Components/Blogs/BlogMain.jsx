import BlogHeader from "./BlogHeader";
import LeftCol from "./leftCol";
import RightCol from "./RightCol";

const Blogs = () => {
  document.title = "Aimelive - Blogs";
  return (
    <div>
      <BlogHeader />
      <div className="row blogBody">
        <LeftCol />
        <RightCol />
      </div>
    </div>
  );
};

export default Blogs;
