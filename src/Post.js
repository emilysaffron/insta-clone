import React from "react";
import Details from "./Details";
import Interact from "./Interact";
import Caption from "./Caption";
import "./Post.css";

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
      "https://api.unsplash.com/photos/random/?client_id=prgp4m1EtMeK9dpbjkfZRfhK9KxDwx_kr2sl_ee62Pc&count=4";
    let response = await fetch(url);
    let data = await response.json();
    this.setState({
      image1: data[0],
      image2: data[1],
      image3: data[2],
      image4: data[3],
      loading: false,
    });

    console.log({ data });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.image1 ? (
          <img src="./loading.png" alt="loading" />
        ) : (
          <div className="feed">
            <div className="post" id="1">
              <Details />
              <img src={this.state.image1.urls.small} alt="post"></img>
              <div className="footer">
                <Interact />
                <div className="caption">
                  <Caption />
                </div>
              </div>
            </div>
            <br />
            <div className="post" id="2">
              <Details />
              <img src={this.state.image2.urls.small} alt="post"></img>
              <div className="footer">
                <Interact />
                <div className="caption">
                  <Caption />
                </div>
              </div>
            </div>
            <br />
            <div className="post" id="3">
              <Details />
              <img src={this.state.image3.urls.small} alt="post"></img>
              <div className="footer">
                <Interact />
                <div className="caption">
                  <Caption />
                </div>
              </div>
            </div>
            <br />
            <div className="post" id="4">
              <Details />
              <img src={this.state.image4.urls.small} alt="post"></img>
              <div className="footer">
                <Interact />
                <div className="caption">
                  <Caption />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Post;
