import React, { useState } from "react";
import "./navbar.css";
// import { Link } from "react-router-dom";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { PrimaryButtonComponent } from "../index";

import logo from "../../assets/logo.png";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#services">Services</a>
    </p>
    <p>
      <a href="#about">About Me</a>
    </p>
    <p>
      <a href="#contact">Contact Me</a>
    </p>
    <p>
      <a href="#portfolio">Portfolio</a>
    </p>
  </>
);

const NavBarComponent = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="pwa__navbar">
      <div className="pwa__navbar-links">
        <div className="pwa__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="pwa__navbar-links-wrapper">
          <Menu />
        </div>
      </div>
      <div className="pwa__navbar-button">
        {/* <button type="button">Hire me</button> */}
        <PrimaryButtonComponent title={"Hire me"} />
      </div>
      <div className="pwa__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#333333"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#333333"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="pwa__navbar-menu-wrapper scale-up-center">
            <div className="pwa__navbar-menu-wrapper-links">
              <Menu />
              <div className="pwa__navbar-menu-wrapper-links-button">
                {/* <button type="button">Hire me</button> */}
                <PrimaryButtonComponent title={"Hire me"} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBarComponent;
