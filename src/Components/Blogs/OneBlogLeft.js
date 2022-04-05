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
        if (!res.ok) {
          throw Error("Could not fetch the data!!");
        }
        return res.json();
      })
      .then((data) => {
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
          {error && <ShowError />} {isLoading && <PreLoader />}{" "}
          {blog && <BringBlog blog={blog} />}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default OneBlogLeft;
