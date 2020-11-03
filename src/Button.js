import styled from "@emotion/styled";

const StyledButton = styled.button`
  background-color: white;
  color: black;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-style: solid;
  border-width: 1px;
  border-color: lightgray;
  height: 40px;
  width: 60px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;
const StyledDiv = styled.div`
  padding: 20px;
`;
const Button = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <StyledDiv>
      <StyledButton onClick={refreshPage}>Next</StyledButton>
    </StyledDiv>
  );
};

export default Button;
