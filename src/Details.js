import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const StyledDetails = styled.div`
  display: flex;
  flex-direction: row;
  & img {
    border-radius: 50%;
    margin: 10px;
  }
`;

const StyledName = styled.div`
  text-transform: lowercase;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Details = () => {
  const [loading, updateLoading] = useState(true);
  const [details, updateDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url = "https://api.randomuser.me/";
      const response = await fetch(url);
      const data = await response.json();

      updateLoading(false);
      updateDetails(data.results[0]);
    }
    fetchData();
  }, []);

  return loading || !details ? (
    <div>"loading..."</div>
  ) : (
    <StyledDetails>
      <img src={details.picture.medium} alt="profile" />
      <StyledName>{details.name.first + details.name.last}</StyledName>
    </StyledDetails>
  );
};

export default Details;
