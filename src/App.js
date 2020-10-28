import "./App.css";
import Post from "./Post";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <section>
        <Navbar />
      </section>
      <section className="App-content">
        <Post />
      </section>
    </div>
  );
}

export default App;
