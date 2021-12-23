import React from "react";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";

function CommentWrapper(props) {
  let params = useParams();
  return (
    <div className="CommentWrapper">
      <Comment commentId={params.commentid} />
    </div>
  );
}

export default CommentWrapper;
