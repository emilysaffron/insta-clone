import React from "react";

class StoryContent extends React.Component {
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
    return this.state.loading || !this.state.image1 ? (
      <div>loading...</div>
    ) : (
      <div className="storypost">
        <img src={this.state.image1.urls.small} alt="storypost"></img>
      </div>
    );
  }
}

export default StoryContent;
