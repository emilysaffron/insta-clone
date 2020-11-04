import React, { Component, useState } from "react";
import styled from "@emotion/styled";

const StyledComments = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-top: solid 1px lightgray;
  & button {
    background-color: white;
    border: none;
    outline: none;
    color: #0095f6;
    display: flex;
    cursor: pointer;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
`;

const Comment2 = () =>{

  const [comments,updateComments] = useState([]);
  




}
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
        <StyledList>
          {this.state.comments.map((item) => {
            return <li>{item}</li>;
          })}
        </StyledList>
        <StyledComments>
          <StyledInput
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
        </StyledComments>
      </div>
    );
  }
}

export default Comment;
