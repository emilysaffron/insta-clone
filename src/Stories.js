import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import StoryContent from "./Story-content";

const Stories = () => {
  const [loading, updateLoading] = useState(true);
  const [profile, updateProfile] = useState(false);
  const [modal, updateModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const url = "https://api.randomuser.me/";
      const response = await fetch(url);
      const data = await response.json();
      updateLoading(false);
      updateProfile(data.results[0]);
    }
    fetchData();
  }, []);

  const toggleModal = () => {
    updateModal(!modal);
  };

  return (
    <div>
      {loading || !profile ? (
        <div>loading...</div>
      ) : (
        <div className="userDetails">
          <img
            src={profile.picture.medium}
            alt="profile"
            onClick={toggleModal}
          />
        </div>
      )}
      {modal ? (
        <Modal>
          <div>
            <StoryContent />
            <div className="buttons">
              <button onClick={toggleModal}>Exit</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Stories;
