import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const StyledText = styled.div`
  font-size: 12px;
  text-align: left;
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const Caption = () => {
  const [loading, updateLoading] = useState(true);
  const [caption, updateCaption] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url = "https://icanhazdadjoke.com";
      const options = {
        headers: {
          Accept: "application/json",
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();

      updateLoading(false);
      updateCaption(data);
    }
    fetchData();
  }, []);

  return loading || !caption ? (
    <div>"loading..."</div>
  ) : (
    <StyledText>{caption.joke}</StyledText>
  );
};

export default Caption;
