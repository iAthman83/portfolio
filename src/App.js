import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Hero, About, Contact, Portfolio, Services } from "./sections/index";
import { NavBarComponent, FooterComponent } from "./components/index";

function App() {
  return (
    <>
      <div>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
