import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage, About, Contact, Portfolio, Services } from "./pages/index";
import NavBarComponent from "./components/pages/navbar/NavBarComponent";
import FooterComponent from "./components/pages/footer/FooterComponent";

function App() {
  return (
    <>
      <div>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
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
