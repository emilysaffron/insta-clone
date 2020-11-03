import Stories from "./Stories";

import styled from "@emotion/styled";

const StyledBar = styled.div`
  display: flex;
  border-style: solid;
  border-color: lightgray;
  border-width: 1px;
  & img {
    cursor: pointer;
    margin: 14px;
    border-radius: 50%;
  }
`;
const StoryBar = () => {
  return (
    <StyledBar>
      <Stories />
      <Stories />
      <Stories />
      <Stories />
    </StyledBar>
  );
};

export default StoryBar;
