import React from "react";
import SingleComment from "./SingleComment";

const CommentsList = ({ comments }) => {
  return (
    <div>
      <h3>Commenti</h3>
      <ul>
        {comments.map((comment) => (
          <SingleComment key={comment._id} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
