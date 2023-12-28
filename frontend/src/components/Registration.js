import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './Registration.css'; // Import a separate CSS file for styling (optional)

function Registration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    try {
      // Send a POST request to your server's "/add" endpoint
      const response = await axios.post('http://localhost:8070/User/add', {
        name: `${firstName} ${lastName}`,
        email,
        password,
        // Add other fields as needed
      });

      // Handle the response from the server
      console.log(response.data); // You can log or handle the response as needed
    } catch (error) {
      alert("Error registering user");
      console.error('Error registering user:', error);
      // Handle errors (e.g., show an error message to the user)
    }
  };

  return (
    <div className="registration-container">
      <h2 className="registration-title">Registration Form</h2>
      <form className="registration-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleRegistration}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
