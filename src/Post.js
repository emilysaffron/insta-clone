import React from "react";
import Details from "./Details";

class Post extends React.Component {
  state = {
    loading: true,
    image1: null,
    image2: null,
  };

  async componentDidMount() {
    let url =
      "https://api.unsplash.com/photos/random/?client_id=prCgC9KYjIRWRTVXm_gE-OxCYBDK9qWDAIOG9uGNF8g&count=4";
    let response = await fetch(url);
    let data = await response.json();
    this.setState({ image1: data[0], loading: false, image2: data[1] });

    console.log({ data });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.image1 ? (
          <img src="./loading.png" alt="loading" />
        ) : (
          <div>
            <div className="first">
              <Details />
              <img src={this.state.image1.urls.small} alt="post"></img>
            </div>
            <div className="second">
              <Details />
              <img src={this.state.image2.urls.small} alt="post"></img>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Post;
