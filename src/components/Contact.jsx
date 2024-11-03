import React from "react";
import life_image from "../assets/media/trip.png"
import "../styles/Contact.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

function Contact() {
  const handleLinkClick = (url) => (event) => {
    event.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <div className="contact-container">
      <div className="contact-image-section">
        <img src={life_image} alt="Profile" className="contact-image" />
      </div>
      <div className="contact-content">
        <h2 className="contact-title">Interested in connecting?</h2>
        <p className="contact-description">
          I always enjoy connecting with industry professionals who share similar interests, backgrounds, and passions😊. Please kindly find me on
        </p>
        <ul className="contact-links">
          <li>
            <a href="#" onClick={handleLinkClick("https://www.linkedin.com/in/philip-cai-a45a3117b/")}>
              LinkedIn <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick("https://wa.me/61417166393")}>
              WhatsApp <WhatsAppIcon />
            </a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick("https://www.facebook.com/philip.cai.14")}>
              Facebook <FacebookIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Contact;