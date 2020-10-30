import React, { Component } from "react";

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
    let updated = this.state.comments.slice();
    updated.push(this.state.comment);
    this.setState({ comments: updated });
    console.log(this.state.comments);
  }

  render() {
    return (
      <div>
        <div>
          <input
            name="comment"
            type="text"
            value={this.state.comment}
            onChange={this.onInputchange}
          />
        </div>

        <ul>
          {this.state.comments.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
        <div>
          <button onClick={this.onSubmitComment}>Send</button>
        </div>
      </div>
    );
  }
}

export default Comment;
