import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [themeDark, setThemeDark] = useState(true);

  return (
    <div className={themeDark ? "dark" : ""}>
      <Navbar setThemeDark={setThemeDark} themeDark={themeDark} />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
