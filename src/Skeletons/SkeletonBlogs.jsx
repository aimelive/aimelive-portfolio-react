import React from "react";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";
import "./Skeletons.css";

const SkeletonBlogs = () => {
  return (
    <div className="skeleton-wrapper">
      <div
        className="skeleton-blog"
        style={{ background: "#f2f2f2", padding: "5px 15px" }}
      >
        <div>
          <SkeletonElement type="feature" />
        </div>
        <div>
          <SkeletonElement type="category" />
          <SkeletonElement type="title" />
          <SkeletonElement type="short-title" />
          <div className="lower">
            <SkeletonElement type="comment-icon" />
            <SkeletonElement type="date" />
          </div>
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonBlogs;
