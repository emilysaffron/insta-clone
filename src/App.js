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
      <section className="stories">
        <StoryBar />
      </section>
      <section className="App-content">
        <Post />
        <Button />
      </section>
    </div>
  );
}

export default App;
