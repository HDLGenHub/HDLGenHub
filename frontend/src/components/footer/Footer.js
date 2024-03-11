import React from 'react';
import './Footer.css'; // Import your custom CSS

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>

      <div className="footer-section">
        <h4>Follow Us On</h4>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>

      <div className="footer-section">
        <h4>Help</h4>
        <p>FAQs</p>
        <p>Customer Support</p>
        <p>Terms and Conditions</p>
      </div>

      <div className="footer-section">
        <h4>About Us</h4>
        <p>At HDL Gen Hub, we're passionate about redefining education 
          through innovation and accessibility. Our journey began with 
          a vision to democratize learning, making high-quality education
           available to all, regardless of geographical boundaries or 
           constraints. We believe in the power of knowledge to transform 
           lives, and our e-learning platform stands as a testament to this 
           belief. Committed to excellence, we curate a diverse range of courses,
            leveraging cutting-edge technology to create an immersive and 
            interactive learning experience.</p>
      </div>
    </div>
  );
};

export default Footer;
