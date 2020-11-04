import React, { useState, useEffect } from "react";
import Details from "./Details";
import Interact from "./Interact";
import Caption from "./Caption";
import Comment from "./Comment";
import styled from "@emotion/styled";
import loadingImg from "./images/loading.png";
const StyledPost = styled.div`
  border-style: solid;
  border-color: lightgray;
  border-width: 1px;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: min-content;
`;

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

const Post = () => {
  const [loading, updateLoading] = useState(true);
  const [image1, updateImage1] = useState(null);
  const [image2, updateImage2] = useState(null);
  const [image3, updateImage3] = useState(null);
  const [image4, updateImage4] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let url =
        "https://api.unsplash.com/photos/random/?client_id=wMeE-b3XhPG8nLOlbunNci7M-Xym0rcU0-2YbsfsMyc&count=4";
      let response = await fetch(url);
      let data = await response.json();
      updateImage1(data[0]);
      updateImage2(data[1]);
      updateImage3(data[2]);
      updateImage4(data[3]);
      updateLoading(false);
    }
    fetchData();
  }, []);

  return loading || !image1 ? (
    <img src={loadingImg} alt="loading" />
  ) : (
    <div className="feed">
      <StyledPost id="1">
        <Details />
        <img src={image1.urls.small} alt="post"></img>
        <StyledFooter>
          <Interact />

          <div className="caption">
            <Caption />
          </div>
          <div className="comments">
            <Comment />
          </div>
        </StyledFooter>
      </StyledPost>
      <br />
      <StyledPost id="2">
        <Details />
        <img src={image2.urls.small} alt="post"></img>
        <StyledFooter>
          <Interact />

          <div className="caption">
            <Caption />
          </div>
          <div className="comments">
            <Comment />
          </div>
        </StyledFooter>
      </StyledPost>
      <br />
      <StyledPost id="3">
        <Details />
        <img src={image3.urls.small} alt="post"></img>
        <StyledFooter>
          <Interact />

          <div className="caption">
            <Caption />
          </div>
          <div className="comments">
            <Comment />
          </div>
        </StyledFooter>
      </StyledPost>
      <br />
      <StyledPost id="4">
        <Details />
        <img src={image4.urls.small} alt="post"></img>
        <StyledFooter>
          <Interact />

          <div className="caption">
            <Caption />
          </div>
          <div className="comments">
            <Comment />
          </div>
        </StyledFooter>
      </StyledPost>
    </div>
  );
};

export default Post;
