import React from "react";
import "./Details.css";
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
          <div className="userDetails">
            <img src={this.state.person.picture.medium} alt="profile" />
            <div className="userName">
              {this.state.person.name.first + this.state.person.name.last}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Details;
