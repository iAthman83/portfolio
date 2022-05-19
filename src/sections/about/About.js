import React, { useContext } from "react";
import "./about.css";
import { TitleComponent } from "../../components/index";
import aboutImg from "../../assets/about.JPG";
import {
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
  FaInstagramSquare,
  FaGithub,
} from "react-icons/fa";
import { ThemeContext } from "../../context";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="about-parent">
      <TitleComponent secondary="Who am i?" primary="My Story" />
      <div className="about">
        <div className="about-left">
          {/* <div
            style={{ backgroundColor: darkMode && "#3aafa9" }}
            className="about-card bg"
          ></div> */}
          <div
            style={{ boxShadow: darkMode && "-8px 8px 2px 2px #3aafa9" }}
            className="about-card"
          >
            <img className="about-img" src={aboutImg} alt="About Image" />
          </div>
        </div>
        <div className="about-right">
          {/* <h1 className="about-title">About Me</h1> */}
          <p className="about-subtitle">
            Professional software engineer with over 4 years of Experience
          </p>
          <p className="about-description">
            I am a self taught programmer who started my programming journey
            with Java prgramming language. Using Java I built mobile
            applications for Android mobile phones using Android studio. With
            the need to start building wen applications, I taught myself HTML,
            CSS & JavaScript. I built web applications using embedded JavaScript
            (EJS) as a templating engine for plane HTML. I then got into React
            and Node to fully become a full stack developer. At the same time I
            built applications with WordPress CMS. I have two personal websites{" "}
            <a
              href="http://programwithabu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              style={{ color: darkMode ? "#3aafa9" : "#dc143c" }}
            >
              programwithabu.com
            </a>{" "}
            and{" "}
            <a
              href="http://wordpress.programwithabu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              style={{ color: darkMode ? "#3aafa9" : "#dc143c" }}
            >
              wordpress.programwithabu.com
            </a>{" "}
            are build on React and WordPress respectively.
          </p>
          <p className="about-description">
            With this love for pragramming and the belief that everyone should
            at least learn the basics of programming, I created a{" "}
            <a
              href="https://www.youtube.com/channel/UCPVAawyAdFtxPFwWS1hCjMQ"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              style={{ color: darkMode ? "#3aafa9" : "#dc143c" }}
            >
              YouTube
            </a>{" "}
            channel where I teach programming concepts of JavaScript, React,
            Node, HTML, CSS, Git and WordPress
          </p>
          <div className="about-social-icons-wrapper">
            <a
              href="https://www.linkedin.com/in/abubakar-athman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="about-social-icon"
                size={25}
                style={{ color: darkMode ? "#3aafa9" : "#333333" }}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCPVAawyAdFtxPFwWS1hCjMQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube
                className="about-social-icon"
                size={25}
                style={{ color: darkMode ? "#3aafa9" : "#333333" }}
              />
            </a>
            <a
              href="https://github.com/iathman83"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="about-social-icon"
                size={25}
                style={{ color: darkMode ? "#3aafa9" : "#333333" }}
              />
            </a>
            <a
              href="https://www.instagram.com/programwithabu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare
                className="about-social-icon"
                size={25}
                style={{ color: darkMode ? "#3aafa9" : "#333333" }}
              />
            </a>
            <a
              href="https://twitter.com/iathman83"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitterSquare
                className="about-social-icon"
                size={25}
                style={{ color: darkMode ? "#3aafa9" : "#333333" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
