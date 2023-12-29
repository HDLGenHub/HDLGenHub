import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Navbar.css';
//import background from '../images/background.png'

function Navbar() {

  const navigate = useNavigate();

  const handleSignIn = () => {
    // Handle sign-in logic, e.g., navigate to the login page
    navigate('/login');
  };

  const handleSignUp = () => {
    // Handle sign-up logic, e.g., navigate to the registration page
    navigate('/registration');
  };
  return (
    <header>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">
              <span style={{ color: 'orange' }}>HDL </span> Gen Hub
            </Link>
          </li>
          <li className="nav-item"><Link to="/learn">Learn</Link></li>
          <li className="nav-item"><Link to="/catalog">Catalog</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/help">Help</Link></li>

          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-button">Search</button>
          </div>

          <div className="auth-buttons">
            <button onClick={handleSignIn} className="sign-in-button">
            Sign In
            </button>
            <button onClick={handleSignUp} className="sign-up-button">
            Sign Up
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
