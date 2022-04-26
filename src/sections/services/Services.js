import React from "react";
import { TitleComponent, CardComponent } from "../../components/index";

import { ImLaptop, ImCodepen, ImMakeGroup, ImMobile } from "react-icons/im";
import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <TitleComponent secondary="Features" primary="What I Offer" />
      <div className="services__wrapper">
        <CardComponent
          backgroundColor="#dc143c"
          title="website development"
          description="Need putting your website together? Let me help you with that. I'll
            have your website up and running with a professional look in no time"
        >
          <ImCodepen className="card__icon" size={45} color="#dc143c" />
        </CardComponent>
        <CardComponent
          backgroundColor="#4969e1"
          title="web design"
          description="Let me professionally design and put together a stunning website for you. I can even create a logo for you and come up with brand colors"
        >
          <ImLaptop className="card__icon" size={45} color="#4969e1" />
        </CardComponent>
        <CardComponent
          backgroundColor="#3aafa9"
          title="app development"
          description="You possibly want to create an app fr your existing business, or maybe you've got a great idea for a new app. I can help bring that idea to life"
        >
          <ImMobile className="card__icon" size={45} color="#3aafa9" />
        </CardComponent>
        <CardComponent
          backgroundColor="#800080"
          title="private tutor"
          description="I am also a private tutor to students who are willing to learn programming concepts. I tutor beginner and advanced python, JavaScript, HTML, CSS"
        >
          <ImMakeGroup className="card__icon" size={45} color="#800080" />
        </CardComponent>
      </div>
    </div>
  );
};

export default Services;
