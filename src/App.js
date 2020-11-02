import "./App.css";
import Post from "./Post";
import Navbar from "./Navbar";
import Button from "./Button";
import StoryBar from "./Story-bar";

function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
      </section>

      <section className="App-content">
        <div className="stories">
          <StoryBar />
        </div>
        <br />
        <Post />
        <Button />
      </section>
    </div>
  );
}

export default App;
