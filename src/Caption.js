import React from "react";
import styled from "@emotion/styled";

const StyledText = styled.div`
  font-size: 12px;
  text-align: left;
  display: flex;
  justify-content: center;
  padding: 8px;
`;
class Caption extends React.Component {
  state = {
    loading: true,
    caption: null,
  };

  async componentDidMount() {
    const url = "https://icanhazdadjoke.com";
    const options = {
      headers: {
        Accept: "application/json",
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();

    this.setState({ caption: data, loading: false });
  }

  render() {
    return this.state.loading || !this.state.caption ? (
      <div>"loading..."</div>
    ) : (
      <StyledText>{this.state.caption.joke}</StyledText>
    );
  }
}

export default Caption;
