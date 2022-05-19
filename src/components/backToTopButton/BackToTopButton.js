import React, { useContext, useEffect, useState } from "react";
import "./backToTop.css";

import { RiArrowUpSLine } from "react-icons/ri";
import { ThemeContext } from "../../context";

const BackToTopButton = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [showUpButton, setShowUpButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowUpButton(true);
      } else {
        setShowUpButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-button-parent" onClick={scrollTop}>
      {showUpButton && (
        <RiArrowUpSLine
          style={{
            backgroundColor: darkMode && "#3aafa9",
          }}
          className="top-button"
        />
      )}
    </div>
  );
};

export default BackToTopButton;
