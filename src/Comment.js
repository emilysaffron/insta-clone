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

const Comment = () => {
  const [comments, updateComments] = useState([]);
  const [comment, updateComment] = useState("");

  const SubmitComment = () => {
    if (comment) {
      let updated = comments.slice();
      updated.push(comment);
      updateComments(updated);
    }
    updateComment("");
  };

  return (
    <div>
      <StyledList>
        {comments.map((item) => {
          return <li>{item}</li>;
        })}
      </StyledList>
      <StyledComments>
        <StyledInput
          name="comment"
          type="text"
          placeholder="Add a comment..."
          autoComplete="off"
          value={comment}
          onChange={(e) => updateComment(e.target.value)}
        />
        <div>
          <button onClick={SubmitComment}>Send</button>
        </div>
      </StyledComments>
    </div>
  );
};

export default Comment;
