import React from "react";
import "./hero.css";
import profile from "../../assets/profile.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-left-wrapper">
          <h2 className="hero-hello">Hi, my name is</h2>
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
        </div>
      </div>
      <div className="hero-right">
        <img src={profile} alt="profile" className="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
