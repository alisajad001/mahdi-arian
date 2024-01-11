import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [themeDark, setThemeDark] = useState(true);

  return (
    <div className={themeDark ? "dark" : ""}>
      <Navbar setThemeDark={setThemeDark} themeDark={themeDark} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
