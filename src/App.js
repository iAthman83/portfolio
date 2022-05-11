import { useContext, useRef } from "react";
import "./App.css";
import {
  Hero,
  About,
  Contact,
  Portfolio,
  Services,
  ProductList,
} from "./sections/index";
import {
  NavBarComponent,
  FooterComponent,
  ToggleComponent,
} from "./components/index";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222222" : "white",
        color: darkMode ? "#BDC1C6" : "#222222",
      }}
    >
      <ToggleComponent />
      <NavBarComponent />
      <Hero />
      <Services />
      <About />
      <ProductList />
      <Contact />
      {/* <Portfolio /> */}
      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;
