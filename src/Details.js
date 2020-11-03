import React from "react";
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
class Details extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ) : (
          <StyledDetails>
            <img src={this.state.person.picture.medium} alt="profile" />
            <StyledName>
              {this.state.person.name.first + this.state.person.name.last}
            </StyledName>
          </StyledDetails>
        )}
      </div>
    );
  }
}

export default Details;
