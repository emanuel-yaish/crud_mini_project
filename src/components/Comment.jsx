import React from "react";

function Comment({ avatar, name, createdAt, text }) {
  return (
    <div className="comment">
      <a className="avatar">
        <img src={avatar} alt="avatar" />
      </a>
      <div className="content">
        <a className="author">{name}</a>
        <div className="metadata">
          <span className="date">{createdAt}</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
}

export default Comment;
