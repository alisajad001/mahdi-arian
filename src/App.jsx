import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  const [themeDark, setThemeDark] = useState(true);

  return (
    <div className={themeDark ? "dark" : ""}>
      <Navbar setThemeDark={setThemeDark} themeDark={themeDark} />
      <Home />
      <About />
    </div>
  );
};

export default App;
