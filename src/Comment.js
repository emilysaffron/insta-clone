import React, { Component } from "react";
import "./Comment.css";

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitComment = this.onSubmitComment.bind(this);
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmitComment() {
    if (this.state.comment) {
      let updated = this.state.comments.slice();
      updated.push(this.state.comment);
      this.setState({ comments: updated });
      console.log(this.state.comments);
    }
    this.clear();
  }

  clear() {
    let reset = "";
    this.setState({
      comment: reset,
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.comments.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
        <div className="commentsblock">
          <input
            name="comment"
            type="text"
            placeholder="Add a comment..."
            autoComplete="off"
            value={this.state.comment}
            onChange={this.onInputchange}
          />
          <div>
            <button onClick={this.onSubmitComment}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
