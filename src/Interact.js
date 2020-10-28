import React, { useState, useEffect, useCallback } from "react";
import "./Interact.css";
import liked from "./liked.png";
import unliked from "./unliked.png";

const Interact = () => {
  const [like, updateLike] = useState(false);
  const clicked = useCallback(() => updateLike(!like), [like]);
  const [button, updateButton] = useState(
    <img className="interact" src={unliked} onClick={clicked} alt={unliked} />
  );

  useEffect(() => {
    const classes = [liked, unliked];

    let name = like ? classes[0] : classes[1];

    updateButton(
      <img className="interact" src={name} onClick={clicked} alt={name} />
    );
  }, [like, clicked]);

  return button;
};

export default Interact;
