import BlogHeader from "./BlogHeader";
import OneBlogLeft from "./OneBlogLeft";
import RightCol from "./RightCol";

const BlogDetail = () => {
  return (
    <div>
      <BlogHeader />
      <div className="row blogBody">
        <OneBlogLeft />
        <RightCol />
      </div>
    </div>
  );
};

export default BlogDetail;
