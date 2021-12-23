import React from "react";
import CommentsApi from "../Api/CommentsApi";
import Comment from "../components/Comment";

class Comments extends React.Component {
  state = { comments: [] };
  componentDidMount = () => {
    this.getComments("/comments");
  };

  getComments = async (term) => {
    const response = await CommentsApi.get(term);
    console.log(response.data);
    this.setState({ comments: response.data });
  };

  render() {
    return (
      <div className="comments">
        <h1>Tell us What are you thinking about right now?</h1>
        {this.state.comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    );
  }
}

export default Comments;
