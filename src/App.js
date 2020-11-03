import Post from "./Post";
import Navbar from "./Navbar";
import Button from "./Button";
import StoryBar from "./Story-bar";
import styled from "@emotion/styled";

const StyledContent = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
  padding: 30px;
`;

const StyledApp = styled.div`
  text-align: center;
`;
function App() {
  return (
    <StyledApp>
      <section>
        <Navbar />
      </section>

      <StyledContent>
        <div className="stories">
          <StoryBar />
        </div>
        <br />
        <Post />
        <Button />
      </StyledContent>
    </StyledApp>
  );
}

export default App;
