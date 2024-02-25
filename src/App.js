import "./App.css";
import HeadLineCards from "./components/HeadLineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeadLineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
