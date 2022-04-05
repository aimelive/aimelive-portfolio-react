import avatar from "../../images/avatar.png";
const FetchComment = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div className="comment-container" id={comment._id} key={comment._id}>
          <div className="profileAvatar">
            <img src={avatar} className="avatar-image" alt="avatar" />
          </div>
          <div className="comment-data commentCard">
            <p className="posted-name">
              {comment.name} <span color=" #0077FF">・</span>
              <span className="date">
                {new Date().toDateString(comment.dateCreated)}
              </span>
            </p>
            <p className="posted-text">{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchComment;
