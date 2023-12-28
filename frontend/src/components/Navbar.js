import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
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
            <Link to="/login" className="sign-in-button">Sign In</Link>
            <Link to="/registration" className="sign-up-button">Sign Up</Link>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
