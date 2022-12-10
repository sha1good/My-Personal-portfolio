import { useContext } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/ProductList/ProductList";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./context/context";

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
