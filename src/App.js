import "./App.css";
import Post from "./Post";
import Navbar from "./Navbar";
import Button from "./Button";
import Stories from "./Stories";
function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
      </section>
      <section className="stories">
        <Stories />
      </section>
      <section className="App-content">
        <Post />
        <Button />
      </section>
    </div>
  );
}

export default App;
