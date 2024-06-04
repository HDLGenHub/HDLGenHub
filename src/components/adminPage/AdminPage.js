import React from 'react';
import './AdminPage.css';
import coursesIcon from '../../images/courses.png';
import settingsIcon from '../../images/settings.png';
import userIcon from '../../images/user.jpg';
import backgroundImage from '../../images/background.png'; // Ensure this path is correct

function HomePage() {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay"></div>
      <div className="content">
        <div className="button-container">
          <button className="home-button">
            <img src={coursesIcon} alt="Courses" />
            <span>Courses</span>
          </button>
          <button className="home-button">
            <img src={settingsIcon} alt="Settings" />
            <span>Settings</span>
          </button>
          <button className="home-button">
            <img src={userIcon} alt="Users" />
            <span>Users</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
