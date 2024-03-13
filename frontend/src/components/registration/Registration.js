import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import './Registration.css';
import '../../App.css'
import background from '../../images/background.png'

function Registration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [solid, setSolid] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  //const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic, e.g., navigate to the login page
    navigate('/login');
  };

  const handleRegistration = async () => {
    try {
      // Simulate a registration request (replace with your actual registration API call)
      if((firstName || lastName) && email && age && solid && gender && role && password)
      {
        const response = await axios.post('http://localhost:8070/User/add', {
          name: `${firstName} ${lastName}`,
          email,
          age,
          solid,
          gender,
          role,
          password,
        });
        console.log(response.data);
        alert('User is registred sucessfully')
      }


      
      // Show success popup
      //setShowSuccessPopup(true);
      // Reset form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setSolid('');
      setAge('');
      setGender('');
      setRole('');
    } catch (error) {
      alert('Error registering user');
      console.error('Error registering user:', error);
    }
  };

  /*const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };*/

  return (
    <div className="background-container">
      <div>
        {/* Use your background image here */}
        <img src={background} alt="background" className="background-image" />
      </div>
      <div className="reg-container">
        <h2 style={{ fontWeight: '800', fontSize: '30px' }}>Sign Up</h2>
        <form className="login-form">
          {/* ... (other form fields) */}
          <div className="form-group">
          <label htmlFor="firstName">First Name<span style={{color:'red'}}>*</span></label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name<span style={{color:'red'}}>*</span></label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email<span style={{color:'red'}}>*</span></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password<span style={{color:'red'}}>*</span></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age<span style={{color:'red'}}>*</span></label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="solid">Reg No<span style={{color:'red'}}>*</span></label>
          <input
            type="text"
            id="solid"
            value={solid}
            onChange={(e) => setSolid(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender<span style={{color:'red'}}>*</span></label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
  
        <div className="radio-group">
        <label>
          <input
            type="radio"
            name="role"
            value="teacher"
            checked={role === 'teacher'}
            onChange={() => setRole('teacher')}
          />
          Teacher
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="student"
            checked={role === 'student'}
            onChange={() => setRole('student')}
          />
          Student
        </label>
        </div>
        </div>

          <button className="button1" type="button" onClick={handleRegistration}>
            Sign Up
          </button>
          <div class="p-8">
            <p>Already have an account? <button className='signupbutton' onClick={handleLogin}>Sign In</button></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;