import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  const [themeDark, setThemeDark] = useState(true);

  return (
    <div className={themeDark ? "dark" : ""}>
      <Navbar setThemeDark={setThemeDark} themeDark={themeDark} />
      <Home />
    </div>
  );
};

export default App;
