import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [themeDark, setThemeDark] = useState(false);

  return (
    <div className={themeDark ? "dark" : ""}>
      <Navbar setThemeDark={setThemeDark} themeDark={themeDark} />
    </div>
  );
};

export default App;
