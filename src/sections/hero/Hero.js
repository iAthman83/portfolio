import React from "react";
import "./hero.css";
import profile from "../../assets/profile.png";
import {
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
  FaInstagramSquare,
  FaGithub,
} from "react-icons/fa";
// import {
//   SecondaryButtonComponent,
//   PrimaryButtonComponent,
// } from "../../components/index";

const Hero = () => {
  return (
    <div className="hero">
      <div class="custom-shape-divider-bottom-1650973913">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="hero-left">
        <div className="hero-left-wrapper">
          <div className="hero-social-icons-wrapper">
            <a
              href="https://www.linkedin.com/in/abubakar-athman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="hero-social-icon"
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
                className="hero-social-icon"
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
                className="hero-social-icon"
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
                className="hero-social-icon"
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
                className="hero-social-icon"
                size={25}
                style={{ color: "#333333" }}
              />
            </a>
          </div>
          <h2 className="hero-intro">Hi, my name is</h2>
          <h1 className="hero-name">Abubakar Athman</h1>
          <div className="hero-job-title">
            <div className="hero-job-title-wrapper">
              <div className="hero-job-title-item">Web Developer</div>
              <div className="hero-job-title-item">Front-End Developer</div>
              <div className="hero-job-title-item">Back-End Developer</div>
              <div className="hero-job-title-item">Video Editor</div>
              <div className="hero-job-title-item">Graphics Designer</div>
            </div>
          </div>
          <div className="hero-description">
            I design and develop professional stylish and mordern applications
            for clients of all sizes using ReactJS, React Native, NodeJS or
            WordPress.
          </div>
          {/* <div className="hero-btn-wrapper">
            <PrimaryButtonComponent title="See more" />
            <SecondaryButtonComponent title="Vist YouTube" />
          </div> */}
        </div>
      </div>
      <div className="hero-right">
        <img src={profile} alt="profile" className="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
