import About from "./components/About";
import Contact from "./components/Contact";
import DotRing from "./components/DotRing/DotRing";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <DotRing />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
