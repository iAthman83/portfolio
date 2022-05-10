import React from "react";
import "./about.css";
import aboutImg from "../../assets/about.JPG";
import {
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
  FaInstagramSquare,
  FaGithub,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            className="about-img"
            src={aboutImg}
            alt="About Image"
            srcset=""
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-subtitle">
          This is all you need to know about and what i do
        </p>
        <p className="about-description">
          I'm baby seitan food truck tumblr prism ugh man braid artisan health
          goth taxidermy green juice mlkshk pitchfork lo-fi. Paleo hashtag
          portland williamsburg tattooed pabst next level lo-fi enamel pin
          biodiesel artisan sustainable. Hammock vape distillery bushwick 3 wolf
          moon hoodie vaporware offal tumeric.
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
              style={{ color: "#333333" }}
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
              style={{ color: "#333333" }}
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
              style={{ color: "#333333" }}
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
              color={{ color: "#333333" }}
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
              style={{ color: "#333333" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
