import React from 'react';
import fb_icon from '../../images/fb_icon.png';
import linkedin_icon from '../../images/linkedin_icon.png';
import insta_icon from '../../images/insta_icon.png';
import call_icon from '../../images/call_icon.png';
import email_icon from '../../images/email_icon.png';

const Footer = () => {
  return (
    <div>
      <div className="flex justify-around bg-gray-200 lg:gap-20 md:p-8 p-2 gap-10">
        <div class="md:flex md:gap-20 p-2 pr-0">
          <div class="text-left m-2">
            <h4 class="font-medium md:ml-5">Contact Us</h4>
            <p class="flex md:m-5 m-3 ml-0"><img class="h-6 mr-2" src={call_icon} alt="call"/>+94 (11) 476 7840</p>
            <a href="#" class="flex md:m-5 m-3 ml-0 hover:text-amber-600"><img class="h-6 mr-2" src={email_icon} alt="email"/>info@hdlgenhub.com</a>
          </div>
          <div>
            <h4 class="font-medium md:ml-5 text-left m-2 mt-5 md:mt-2">Follow Us On</h4>
            <div class="flex md:gap-3">
              <a href="#"><img class="h-7 md:m-5 m-3" src={fb_icon} alt="Facebook"/></a>
              <a href="#"><img class="h-8 md:m-5 m-3" src={insta_icon} alt="Insta"/></a>
              <a href="#"><img class="h-8 md:m-5 m-3" src={linkedin_icon} alt="LinkedIn"/></a>
            </div>
          </div>
        </div>
        <div class="text-left md:mr-10 m-2 ml-0 md:p-2">
          <p class="font-medium mb-2"><span style={{color:'orange'}}>HDL</span> Gen Hub</p>
          <p class="text-justify">At HDL Gen Hub, we're revolutionizing education with innovation and accessibility. Our e-learning platform breaks geographical barriers, providing high-quality education for all.</p>
        </div>
    </div>
    

    <div class="h-10 bg-amber-600 text-center opacity-75">
      <p class="text-center text-white p-2">© 2024 HDL Gen Hub. All rights reserved.</p>
    </div>
  </div>
  );
};

export default Footer;
