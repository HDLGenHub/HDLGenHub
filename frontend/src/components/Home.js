import React from 'react'
import homeimage from '../images/Ico.jpg'
import './Home.css';
function Home() {
    return (
      <div className="home-container">
        <img src={homeimage} alt="Home" className="home-image" />
        <div className="home-content">
          {/* Other content for the home section */}
          <h3><span style={{color:'orange'}}>HDL</span> Gen Hub for learners</h3>
          <h1>Fast & easiest</h1> 
          <h1> way to</h1>
          <h1>learn <span style={{color:'orange'}}>HDL</span></h1>

          <p>Exclusive content, exceptional quality</p>
          <a>
            Unlock the world of HDLs through our immersive e-learning platform. 
            From beginner basics to advanced techniques, dive into digital design at your own pace.
             Engage, practice,
             and connect in a community-driven space designed for mastering hardware description languages.</a>
        </div>
      </div>
    );
  }

export default Home