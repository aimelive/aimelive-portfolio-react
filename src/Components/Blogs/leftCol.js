import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import PreLoader from "./PreLoader";
import ShowError from "./PreError";

const LeftCol = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://my-brand-aimelive.herokuapp.com/api/v1/blogs")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data!!");
        }
        return res.json();
      })
      .then((data) => {
        const arr = data.Content;
        setBlogs(arr);
        setIsLoading(false);
        setError(null);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message);
      });
  }, []);
  return (
    <div>
      <div className="leftcolumn" id="leftCol">
        <div>
          <div className="card">
            {error && <ShowError />}
            {isLoading && <PreLoader />}
            {blogs && <BlogList blogs={blogs} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftCol;
