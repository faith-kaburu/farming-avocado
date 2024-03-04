import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css'
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={branding}>
        <h2 style={brandingText}>Farm Fresh Avocados</h2>
        <p style={brandingDescription}>Connecting you with the finest quality avocados from passionate farmers.</p>
      </div>
      <div style={socialMediaStyle}>
        <a href="https://www.facebook.com"><FaFacebook size={20} /></a>
        <a href="https://www.twitter.com"><FaSquareXTwitter  size={20} /></a>
        <a href="https://www.instagram.com"><FaInstagram size={20} /></a>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'green', // Green color
  color: 'black', // Change text color to black
  padding: '1rem', // Add padding for better spacing
  textAlign: 'center', // Center align content
};

const branding = {
  marginBottom: '1rem', // Adjust spacing
};

const brandingText = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

const brandingDescription = {
  fontSize: '1rem',
  marginBottom: '1rem', // Adjust spacing
};

const socialMediaStyle = {
  marginTop: '1rem', // Add margin for better spacing
};

export default Footer;
