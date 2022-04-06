import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import About from "./pages/aboutpage/About";
import Contact from "./pages/contactpage/Contact";
import Portfolio from "./pages/portfoliopage/Portfolio";
import NavBarComponent from "./components/pages/navbar/NavBarComponent";
import FooterComponent from "./components/pages/footer/FooterComponent";

function App() {
  return (
    <>
      <div className="App">
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
