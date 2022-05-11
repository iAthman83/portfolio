import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { RiWhatsappFill } from "react-icons/ri";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n018tzg",
        "template_ofu52il",
        formRef.current,
        "3Yx9xD62bgC0QZnuS"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div
        style={{ backgroundColor: darkMode && "#3aafa9" }}
        className="contact-bg"
      ></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's discuss your project</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <FaPhoneAlt size={25} className="contact-icon" />
              +256 783 373 764
            </div>
            <div className="contact-info-item">
              <FaEnvelope color="#0072c6" size={25} className="contact-icon" />
              abuathman83@gmail.com
            </div>
            <div className="contact-info-item">
              <RiWhatsappFill
                color="#25D366"
                size={25}
                className="contact-icon"
              />
              +256 783 373 764
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-description">
            <b>What's your story?</b> I'm baby seitan food truck tumblr prism
            ugh man braid artisan health goth taxidermy green juice mlkshk
          </p>
          <form className="form" ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333333" }}
              className="input"
              type="text"
              placeholder="Name"
              name="user_name"
              required={true}
            />
            <input
              style={{ backgroundColor: darkMode && "#333333" }}
              className="input"
              type="text"
              placeholder="Subject"
              name="user_subject"
              required={true}
            />
            <input
              style={{ backgroundColor: darkMode && "#333333" }}
              className="input"
              type="text"
              placeholder="Email"
              name="user_email"
              required={true}
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333333" }}
              className="textarea"
              rows="5"
              placeholder="Message"
              name="message"
              required={true}
            />
            <button
              className="button"
              style={{ backgroundColor: darkMode && "#3aafa9" }}
            >
              Submit
            </button>
            {sent && "Thank you!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
