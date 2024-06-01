import React from 'react';
import fb_icon from '../../images/fb_icon.png';
import linkedin_icon from '../../images/linkedin_icon.png';
import insta_icon from '../../images/insta_icon.png';
import call_icon from '../../images/call_icon.png';
import email_icon from '../../images/email_icon.png';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="flex justify-around lg:gap-24 gap-5 md:p-10 p-5">

        <div className="md:flex md:gap-24">
          <div className="text-left m-4">
            <h4 className="font-bold text-lg text-center">Contact Us</h4>
            <p className="flex items-center mt-4"><img className="h-6 mr-5" src={call_icon} alt="call"/>+94 (11) 476 7840</p>
            <a href="mailto:info@hdlgenhub.com" className="flex items-center mt-4 hover:text-amber-600 transition duration-300 ease-in-out">
              <img className="h-6 mr-5" src={email_icon} alt="email"/>info@hdlgenhub.com
            </a>
          </div>

          <div className="mt-10 md:mt-5 text-center w-32">
            <h4 className="font-bold text-lg">Follow Us On</h4>
            <div className="flex gap-3 mt-4">
              <a href="www.facebook.com" className="transform hover:scale-110 transition duration-300 ease-in-out"><img className="h-7" src={fb_icon} alt="Facebook"/></a>
              <a href="www.instagram.com" className="transform hover:scale-110 transition duration-300 ease-in-out"><img className="h-8" src={insta_icon} alt="Insta"/></a>
              <a href="www.linkedin.com" className="transform hover:scale-110 transition duration-300 ease-in-out"><img className="h-8" src={linkedin_icon} alt="LinkedIn"/></a>
            </div>
          </div>
        </div>

        <div className="text-left m-4">
          <p className="font-bold text-xl mb-2 md:text-left text-center"><span className="text-orange-500">HDL</span> Gen Hub</p>
          <p className="text-justify">At HDL Gen Hub, we're revolutionizing education with innovation and accessibility. Our e-learning platform breaks geographical barriers, providing high-quality education for all.</p>
        </div>
      </div>

      <div className="bg-amber-600 h-0.5 mx-10"></div>
      <p className="text-center py-4">© 2024 HDL Gen Hub. All rights reserved.</p>
    </div>
  );
};

export default Footer;
