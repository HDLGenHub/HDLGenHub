import React from 'react';
import fb_icon from '../../images/fb_icon.png';
import linkedin_icon from '../../images/linkedin_icon.png';
import insta_icon from '../../images/insta_icon.png';
import call_icon from '../../images/call_icon.png';
import email_icon from '../../images/email_icon.png';

const Footer = () => {
  return (
    <div>
      <div className="flex justify-around bg-gray-200 lg:gap-28 lg:p-10">
        <div class="flex lg:gap-20">
          <div class="text-left">
            <h4 class="lg:font-medium lg:ml-5">Contact Us</h4>
            <p class="flex lg:m-5"><img class="lg:h-6 lg:mr-2" src={call_icon} alt="call"/>+94 (11) 476 7840</p>
            <a href="#" class="flex lg:m-5 hover:text-amber-600"><img class="lg:h-6 lg:mr-2" src={email_icon} alt="email"/>info@hdlgenhub.com</a>
          </div>

          <div>
            <h4 class="lg:font-medium lg:ml-7">Follow Us On</h4>
            <div class="flex">
              <a href="#"><img class="lg:h-8 lg:m-5" src={fb_icon} alt="Facebook"/></a>
              <a href="#"><img class="h-8 m-5 mr-6" src={insta_icon} alt="Insta"/></a>
              <a href="#"><img class="h-8 m-5" src={linkedin_icon} alt="LinkedIn"/></a>
            </div>
          </div>
      </div>
      <div class="text-left mr-10">
        <p class="font-medium mb-2"><span style={{color:'orange'}}>HDL</span> Gen Hub</p>
        <p class="text-justify text-">At HDL Gen Hub, we're revolutionizing education with innovation and accessibility. Our e-learning platform breaks geographical barriers, providing high-quality education for all.</p>
      </div>
    </div>

    <div class="h-10 bg-amber-600 text-center opacity-75">
      <p class="text-center text-white p-2">© 2024 HDL Gen Hub. All rights reserved.</p>
    </div>
  </div>
  );
};

export default Footer;
