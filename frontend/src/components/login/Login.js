import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import background from '../../images/background.png';
import '../../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlesignup = () => {
    navigate('/registration');
  };

  const handleForgotPassword = () => {
    toast.info('Please contact our customer service for assistance.', {
      position: "top-center",
    });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8070/User/login', {
        email,
        password,
      });

      if (response.data.status === 'success') {
        toast.success('Login successful!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          closeButton: false,
        });
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('ref', 1);
        setTimeout(() => {
          navigate('/');
          window.location.reload();
        },2000);

      } else {
        toast.error('Incorrect email or password', {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Error during login. Please try again.', {
        position: "top-center",
      });
    }
  };

  return (
    <div className='background-container'>
      <div>
        <img src={background} alt="background" className="background-image" />
      </div>
      <div className="login-container">
        <h2 style={{ fontWeight: '800', fontSize: '30px' }}>Sign In</h2>
        <form className="login-form">
          <div className="form-group">
            <label className='label' htmlFor="email">Email Address<span style={{ color: "red" }}>*</span></label>
            <input
              className='input'
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className='label' htmlFor="password">Password<span style={{ color: "red" }}>*</span></label>
            <input
              className='input'
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='forgotpasswordDiv'>
            <button className='forogotpassword' type="button" onClick={handleForgotPassword}>Forgot password?</button>
          </div>
          <div>
            <p className='p'>By clicking "Sign in," you agree to our <Link>Terms of Use</Link> and our <Link>Privacy Policy.</Link></p>
          </div>
          <button className='button1' type="button" onClick={handleLogin}>
            Sign In
          </button>
          <div className="p-5">
            <p>Don't have an account? <button className='signupbutton' type="button" onClick={handlesignup}>Sign Up</button></p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
