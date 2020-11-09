import React, { useState, useEffect } from "react";

const StoryContent = () => {
  const [loading, updateLoading] = useState(true);
  const [image1, updateImage1] = useState(null);
  const [image2, updateImage2] = useState(null);
  const [image3, updateImage3] = useState(null);
  const [image4, updateImage4] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let url =
        "https://api.unsplash.com/photos/random/?client_id=9Njuuq6n-SS10CSmB1lvvKQ-JLrDKUkJg3KyvNvkspI&count=4";
      let response = await fetch(url);
      let data = await response.json();
      updateLoading(false);
      updateImage1(data[0]);
      updateImage2(data[1]);
      updateImage3(data[2]);
      updateImage4(data[3]);
    }

    fetchData();
  }, []);

  return loading || !image1 ? (
    <div>loading...</div>
  ) : (
    <div className="storypost">
      <img src={image1.urls.small} alt="storypost"></img>
    </div>
  );
};

export default StoryContent;
