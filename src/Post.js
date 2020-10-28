import React from "react";
import Details from "./Details";

class Post extends React.Component {
  state = {
    loading: true,
    image: null,
  };

  async componentDidMount() {
    const url =
      "https://api.unsplash.com/photos/random/?client_id=wMeE-b3XhPG8nLOlbunNci7M-Xym0rcU0-2YbsfsMyc";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ image: data, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.image ? (
          <img src="./loading.png" alt="loading" />
        ) : (
          <div>
            <div>
              <Details />
            </div>
            <img src={this.state.image.urls.small} alt="post"></img>
          </div>
        )}
      </div>
    );
  }
}

export default Post;
