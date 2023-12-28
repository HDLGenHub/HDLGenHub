// About.js
import React from 'react';
import './About.css'; // Import a separate CSS file for styling (optional)

function About() {
  return (
    <div className="about-container">
      <h2>About HDL Gen Hub</h2>
      <p>
        HDL Gen Hub is an E-Learning platform dedicated to Hardware Description Language (HDL) education.
        It provides a comprehensive learning experience for students and enthusiasts interested in
        computer engineering, specifically focusing on HDLs like Verilog and VHDL.
      </p>
      <p>
        Developed by a team of talented undergraduate students in Computer Engineering at the University
        of Ruhuna, HDL Gen Hub aims to make HDL education accessible and enjoyable.
      </p>
      <h3>Client: Mr. Achintha Iroshan</h3>
      <p>
        Mr. Achintha Iroshan is a Lecturer in the Department of Electronic and Information Engineering
        at the University of Ruhuna. His expertise and guidance have been invaluable in shaping HDL Gen Hub.
      </p>
      <h3>Developers</h3>
      <ul>
        <li>Siriwardhana T.D.R.D</li>
        <li>Sandarenu D.T</li>
        <li>Nadeeshani Jayarathne</li>
        <li>Dahami Nethsarani</li>
      </ul>
    </div>
  );
}

export default About;
