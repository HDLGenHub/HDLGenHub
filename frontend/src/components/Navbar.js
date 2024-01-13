import React ,{useState, useEffect}from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './Navbar.css';
import {LogOut} from 'react-feather';
import {User} from 'react-feather';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import background from '../images/background.png'

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      //alert(parsedUser);
    }
  }, []);
  const navigate = useNavigate();
  const handleSignIn = () => {
    // Handle sign-in logic, e.g., navigate to the login page
    navigate('/login');
  };
  const handleEdit = () =>{
    navigate('/edituser');
  };
  const handleSignUp = () => {
    // Handle sign-up logic, e.g., navigate to the registration page
    navigate('/registration');
  };
  const handleLogOut = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
    window.location.reload();
  }
if(user)
{
  
if(user.role==="student"){
  return(
    <header>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">
            <span style={{ color: 'orange' }}>HDL </span> Gen Hub
          </Link>
        </li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/help">Help</Link></li>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-button">Search</button>
        </div>
        <div className='space-fix'>

        </div>
        <div className="edit-user">
          <button onClick={handleEdit}><User></User></button>
        </div>
        <div className="log-out-button">
          <button onClick={handleLogOut}><LogOut></LogOut></button>
        </div>
      </ul>
    </nav>
  </header>
  );
}
else if(user.role==="teacher"){
  return(
    <header>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" style={{marginLeft:"20px",minWidth:'200px'}}>
            <span style={{ color: 'orange'}}>HDL </span> Gen Hub
          </Link>
        </li>
        <li className="nav-item"><Link to="/courses">Courses</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/help">Help</Link></li>

        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-button">Search</button>
        </div>
        <div className="edit-user">
          <button onClick={handleEdit}><User></User></button>
        </div>
        <div className="log-out-button">
          <button onClick={handleLogOut}><LogOut></LogOut></button>
        </div>
      </ul>
    </nav>
  </header>
  );
}
else if(user.role==="admin"){
  return(
    <header>
    <nav className="navbar">
      <ul className="nav-list">
      <li className="nav-item">
      <Link to="/">
        <span style={{ color: 'orange' }}>HDL </span> Gen Hub
      </Link>
      </li>
        <li className="nav-item"><Link to="/setting">Setting</Link></li>
        <div className="auth-buttons">
          <button onClick={handleSignIn} className="sign-in-button">
          Sign In
          </button>
        </div>
        <div>
          <button onClick={handleLogOut} className="log-out-button"><LogOut></LogOut></button>
        </div>
      </ul>
    </nav>
  </header>
  );
}
}
else{
  return(
<header>
<nav className="navbar">
  <ul className="nav-list">
    <li className="nav-item">
      <Link to="/">
        <span style={{ color: 'orange' }}>HDL </span> Gen Hub
      </Link>
    </li>
    <li className="nav-item"><Link to="/about">About</Link></li>

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
}
export default Navbar;
