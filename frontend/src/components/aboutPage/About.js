// About.js
import React from 'react';
import './About.css'; // Import a separate CSS file for styling (optional)
import img2 from '../../images/about.png'
function About() {
  return (
    <div>
      <div style={{display:"flex"}}>
        <div className='topic'>
          <p>Learn today,<br/>lead tomorrow</p>
        </div>

        <div className='about-image'>
          <img src={img2} alt="" />
        </div>
        <div className='box'>
        </div>
      </div>
      <div className='about-box'></div>

      <div className='text-box'>
      <p className='welcome'>Welcome to HDL Gen Hub </p>
      <p1>
        At HDL Gen Hub, we are dedicated to revolutionizing education by offering a dynamic
        and comprehensive platform tailored to your learning needs. Our mission is to empower
        individuals globally by providing accessible, high-quality education that transcends boundaries.
      </p1>
      <div className='his-text'>
      <h3>Our Story</h3>

      <p>
        Established by a team of passionate educators and tech enthusiasts,
        HDL Gen Hub was born from the belief that education should be engaging, interactive, and adaptable.
        We understand the evolving landscape of learning and aim to bridge the gap between traditional education and the digital era.
      </p>
      </div>
      </div>
    
    </div>
  );
}

export default About;