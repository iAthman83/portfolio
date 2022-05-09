import { useRef } from "react";
import "./App.css";
import { Hero, About, Contact, Portfolio, Services } from "./sections/index";
import { NavBarComponent, FooterComponent } from "./components/index";

function App() {
  return (
    <>
      <NavBarComponent />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Portfolio />
      <FooterComponent />
    </>
  );
}

export default App;
