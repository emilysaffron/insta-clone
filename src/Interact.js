import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import liked from "./images/liked.png";
import unliked from "./images/unliked.png";

const StyledImage = styled.img`
  width: min-content;
  cursor: pointer;
`;
const Interact = () => {
  const [like, updateLike] = useState(false);
  const clicked = useCallback(() => updateLike(!like), [like]);
  const [button, updateButton] = useState(
    <StyledImage src={unliked} onClick={clicked} alt={unliked} />
  );

  useEffect(() => {
    const classes = [liked, unliked];

    let name = like ? classes[0] : classes[1];

    updateButton(<StyledImage src={name} onClick={clicked} alt={name} />);
  }, [like, clicked]);

  return button;
};

export default Interact;
