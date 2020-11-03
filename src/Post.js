import React from "react";
import Details from "./Details";
import Interact from "./Interact";
import Caption from "./Caption";
import Comment from "./Comment";
import styled from "@emotion/styled";

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

class Post extends React.Component {
  state = {
    loading: true,
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  };

  async componentDidMount() {
    let url =
      "https://api.unsplash.com/photos/random/?client_id=9Njuuq6n-SS10CSmB1lvvKQ-JLrDKUkJg3KyvNvkspI&count=4";
    let response = await fetch(url);
    let data = await response.json();
    this.setState({
      image1: data[0],
      image2: data[1],
      image3: data[2],
      image4: data[3],
      loading: false,
    });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.image1 ? (
          <img src="./loading.png" alt="loading" />
        ) : (
          <div className="feed">
            <StyledPost id="1">
              <Details />
              <img src={this.state.image1.urls.small} alt="post"></img>
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
              <img src={this.state.image2.urls.small} alt="post"></img>
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
              <img src={this.state.image3.urls.small} alt="post"></img>
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
              <img src={this.state.image4.urls.small} alt="post"></img>
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
        )}
      </div>
    );
  }
}

export default Post;
