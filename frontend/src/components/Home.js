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
        </div>
        <div className='home'>
          <div className='home-line'></div>
          <p>Exclusive content, exceptional quality</p>
        </div>
        <div className='text-centering'>
            <h className='text-home'>
              Unlock the world of HDLs through our immersive e-learning platform. 
              From beginner basics to advanced techniques, dive into digital design at your own pace.
              Engage, practice,
              and connect in a community-driven space designed for mastering hardware description languages.</h>
          </div>
        
        <div className='box-container'>
          <div className='home-box'>
            <p><span>100+</span><br></br>hours of content to gain knowledge (updating regularly)</p>
          </div>
          <div className='home-box'>
            <p><span>10+</span><br></br>expert from the university with the best guidance</p>
          </div>
          <div className='home-box'>
            <p><span>350+</span><br></br>users to unleash their Potential through E-Learning Excellence</p>
          </div>
        </div>
        <div className='home-line'></div>

        <h1>Job-ready talent. Superior outcomes</h1>

      </div>
    );
  }

export default Home