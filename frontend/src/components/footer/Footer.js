import React from 'react';
import './Footer.css'; // Import your custom CSS
import fb_icon from '../../images/fb_icon.png';
import linkedin_icon from '../../images/linkedin_icon.png';
import insta_icon from '../../images/insta_icon.png';
import call_icon from '../../images/call_icon.png';
import email_icon from '../../images/email_icon.png';

const Footer = () => {
  return (
    <div>
      <div className="footer-container">

        <div className="footer-section">
          <h4 class="ml-5 font-medium">Contact Us</h4>
          <p class="flex m-5"><img class="h-6 mr-2" src={call_icon} alt="call"/>+94 (11) 476 7840</p>
          <a href="#" class="flex m-5 hover:text-amber-600"><img class="h-6 mr-2" src={email_icon} alt="email"/>info@hdlgenhub.com</a>
        </div>

        <div class="ml-24">
          <h4 class="ml-6 font-medium">Follow Us On</h4>
          <div class="flex">
            <a href="#"><img class="h-8 m-5" src={fb_icon} alt="Facebook"/></a>
            <a href="#"><img class="h-8 m-5" src={insta_icon} alt="Insta"/></a>
            <a href="#"><img class="h-8 m-5" src={linkedin_icon} alt="LinkedIn"/></a>
          </div>
        </div>
        
        <div class="ml-36 text-left">
          <p class="font-medium mb-2">HDL Gen Hub</p>
          <p class="text-justify">At HDL Gen Hub, we're revolutionizing education with innovation and accessibility. Our e-learning platform breaks geographical barriers, providing high-quality education for all. We believe in knowledge's transformative power and offer diverse courses with immersive technology for an exceptional learning journey.</p>
        </div>
      </div>

      <div class="h-10 bg-amber-600 text-center">
        <p class="text-center text-white p-2">© 2024 HDL Gen Hub. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
