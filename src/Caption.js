import React from "react";
import "./Caption.css";
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
    console.log(data);
  }

  render() {
    return this.state.loading || !this.state.caption ? (
      <div>"loading..."</div>
    ) : (
      <div className="text">{this.state.caption.joke}</div>
    );
  }
}

export default Caption;
