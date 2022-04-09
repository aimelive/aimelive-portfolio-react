//import { useParams } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import avatar from "../../images/Rectangle 21.png";
import avatar2 from "../../images/avatar.png";
import FetchComment from "./FetchComment";

const BringBlog = ({ blog }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState("Comment");
  const [sent, setSent] = useState(false);
  const [nbrOfComments, setNbrOfComments] = useState(blog.blog.comments.length);
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSent(false);
    if (validate()) {
      setSending("Sending...");
      fetch(
        "https://my-brand-aimelive.herokuapp.com/api/v1/blogs/" +
          id +
          "/comment",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            postID: id,
            name: name,
            email: email,
            comment: comment,
          }),
        }
      )
        .then((response) => {
          if (response.status === 201) {
            setSent(true);
            setSending("Comment");
            setName("");
            setEmail("");
            setComment("");
            setNbrOfComments(nbrOfComments + 1);
            return response.json();
          } else {
            throw Error();
          }
        })
        .then((data) => {
          document.getElementById("comment-section").insertAdjacentHTML(
            "beforeend",
            `<div class="comment-container" id="${data.Data._id}">
            <div class="profileAvatar">
              <img src="${avatar2}" class="avatar-image" />
            </div>
            <div class="comment-data commentCard">
              <p class="posted-name">${name} <span style="color: #0077FF;">・</span> <span class="date">Just now</span></p>
              <p class="posted-text">${comment}</p>
            </div>
          </div>`
          );
          let thisComment = document.getElementById(data.Data._id);
          thisComment.style.opacity = "0";
          thisComment.style.animation = "comment-change 0.3s";
          thisComment.style.animationDirection = "alternate-reverse";
          thisComment.style.animationFillMode = "forwards";
          setTimeout(() => {
            thisComment.style.opacity = "1";
            thisComment.style.animation = "none";
          }, 400);
        })
        .catch((e) => {
          setSending("Try again");
          setError("Failed to Add Comment! Check your network connection");
        });
    }
  };

  function validate() {
    if (name === "") {
      setError("Name Required!");
      return false;
    }
    if (name.length < 5) {
      setError("Name: Enter at least 5 characters!");
      return false;
    }
    if (email === "") {
      setError("Email is required!");
      return false;
    }

    if (
      email.indexOf("@") < 1 ||
      email.lastIndexOf(".") - email.indexOf("@") < 2
    ) {
      setError("Invalid Email Format!");
      return false;
    }
    if (comment === "") {
      setError("Comment is required!");
      return false;
    }
    return true;
  }

  return (
    <div className="card">
      <div className="cardimg story">
        <img
          src={blog.blog.imgURL}
          id="photo"
          className="featured-photo"
          alt="featuredphotoblog"
        />
        <p className="title" id="title">
          {blog.blog.title}
        </p>
        <h5 id="category"> {blog.blog.category} </h5>
        <p id="blogPreview"> {blog.blog.preview} </p>
        <p id="blogBody"> {blog.blog.body} </p>
        <h5 className="h5">
          <span id="date" className="dateSpan">
            Posted on
            {" " + new Date().toDateString(blog.blog.dateCreated)}
          </span>
          <span className="commentsCountSpan">
            <i className="fa fa-comment-o"> </i>
            {nbrOfComments > 0
              ? nbrOfComments === 1
                ? " 1 Comment "
                : nbrOfComments + " Comments"
              : "No comment yet"}
          </span>
          <span> Engagements: ( Unknown ) </span>
        </h5>
      </div>
      <h3> Leave a comment </h3>
      <div className="cardimg" id="commentSection">
        <div className="comment-section" id="comment-section">
          {error && (
            <div className="divErrorComment">
              <i className="fa fa-warning"></i> {error}
            </div>
          )}
          {sent && (
            <div className="divSentComment">
              <i className="fa fa-check-circle"></i> Your Comment Added
              Successfully!
            </div>
          )}
          <div className="comment-container">
            <div className="profileAvatar">
              <img src={avatar} height="50px" width="50px" alt="avatar" />
            </div>
            <div className="comment-data">
              <form
                method="post"
                id="com-form"
                name="commentForm"
                className="commentForm"
                onSubmit={handleSubmit}
              >
                <label>
                  <input
                    type="text"
                    name="yourName"
                    id="your-name"
                    placeholder="Your name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    name="yourEmail"
                    id="your-email"
                    placeholder="Your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label>
                  <textarea
                    name="yourComment"
                    id="your-comment"
                    cols="50"
                    rows="10"
                    maxLength="500"
                    placeholder="Your comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </label>
                <div id="comment-footer">
                  <button type="submit" id="send-button">
                    {sending}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <FetchComment comments={blog.blog.comments} />
        </div>
      </div>
    </div>
  );
};

export default BringBlog;
