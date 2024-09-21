

import React, { useState } from "react";
import "./Contact.css";
// import { TEXTS } from "../../Hooks/Languages";
// import { LanguageContext } from "../../Hooks/LanguageContext";
import { ThemeContext } from "../../Hooks/ThemeContecs";
import git from '../../Assets/GitHub.webp';
import linkedin from '../../Assets/linkedin.webp';
import fb from '../../Assets/facebook.webp';
import inst from '../../Assets/instagram.webp';
import mail from '../../Assets/mail.webp';
import call from '../../Assets/calls.webp'
import { useContext } from "react";

const Contact = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); 
  // const { language, setLanguage } = useContext(LanguageContext);
  // State variables to store form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to store form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      // Send form data to Formspree endpoint
      const response = await fetch("https://formspree.io/f/xvoeyody", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      // Check if form submission was successful
      if (response.ok) {
        setSubmitted(true);
        // Reset form fields
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div id="contact" className={`contact ${theme}`}>
      <div className="section1">
        {/* <h1>{TEXTS[language].contactMe}</h1> */}
        <h1 >Contact Me</h1>

        {submitted ? (
          <p>message Sent, thank you! </p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* <div className="form-group">
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div> */}
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        )}
      </div>

      <div className="socIcons" id="socIcons">
        <a href="https://github.com/teokartvelishvili?tab=repositories" target="blank">
          {" "}
          <img alt="icon" src={git} /> <p>Github</p>
        </a>
        <a href="https://www.linkedin.com/in/teona-qartvelishvili-8a4005257/" target="blank">
          {" "}
          <img alt="icon" src={linkedin} /> <p>Linkedin</p>
        </a>
        <a href="https://www.instagram.com/teo.kartvel?igsh=dnUzODMxcnZzN3p5&utm_source=qr" target="blank">
          <img alt="icon" src={inst} /> <p>Instagram</p>
        </a>
        <a href="https://www.facebook.com/teo.qartvel" target="blank">
          <img alt="icon" src={fb} /> <p>Facebook</p>
        </a>
        {/* <a href="mailto:qartvelishviliteona@gmail.com">
          <img alt="icon" src={mail} />
        </a> */}
        <a href="tel:+995551999055">
          <img alt="icon" src={call} /><p>Mobile</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;