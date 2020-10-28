import "./App.css";
import Post from "./Post";
import Navbar from "./Navbar";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
      </section>
      <section className="App-content">
        <Post />
        <Button />
      </section>
    </div>
  );
}

export default App;
