import React from "react";
import Modal from "./Modal";
import StoryContent from "./Story-content";
class Stories extends React.Component {
  state = {
    loading: true,
    profile: false,
    showModal: false,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    const { showModal } = this.state;
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>loading...</div>
        ) : (
          <div className="userDetails">
            <img
              src={this.state.person.picture.medium}
              alt="profile"
              onClick={this.toggleModal}
            />
          </div>
        )}
        {showModal ? (
          <Modal>
            <div>
              <StoryContent />
              <div className="buttons">
                <button onClick={this.toggleModal}>Exit</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default Stories;
