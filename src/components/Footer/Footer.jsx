import React from 'react';
import './Footer.css'; 
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-container">
          <img src="../../../public/Polescience-logo.png"alt="PoleScience Logo" />
        </div>
        <div className="footer-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/technologies">Services</a>
          <a href="/projects">Training</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="contact-info">
          <p>+91 12345 09876</p>
          <p>info@example.com</p>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com"><i className="icon-instagram"></i></a>
          <a href="https://www.youtube.com"><i className="icon-youtube-play"></i></a>
          <a href="https://www.facebook.com"><i className="icon-facebook-square"></i></a>
          <a href="https://www.linkedin.com"><i className="icon-linkedin-square"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Designed and built by <span>PoleSciences</span></p>
      </div>
    </footer>
  );
}

export default Footer;