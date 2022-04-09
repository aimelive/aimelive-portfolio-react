import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import PreLoader from "./PreLoader";
import ShowError from "./PreError";
import BringBlog from "./BringBlog";

const OneBlogLeft = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://my-brand-aimelive.herokuapp.com/api/v1/blogs/" + id)
      .then((res) => {
        if (res.status === 404) {
          throw Error("Blog not found!!");
        }
        return res.json();
      })
      .then((data) => {
        document.title = data.Content.blog.title;
        const arr = data.Content;
        setBlog(arr);
        setIsLoading(false);
        setError(null);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message);
      });
  }, [id]);
  return (
    <div>
      <div className="leftcolumn">
        <div>
          {" "}
          {error && <ShowError error={error} />} {isLoading && <PreLoader />}{" "}
          {blog && <BringBlog blog={blog} />}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default OneBlogLeft;
