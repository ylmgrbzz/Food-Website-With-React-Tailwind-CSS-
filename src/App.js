import "./App.css";
import HeadLineCards from "./components/HeadLineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeadLineCards />
    </div>
  );
}

export default App;
