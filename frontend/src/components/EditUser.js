import React, { useState, useEffect } from 'react';
import './EditUser.css';
import Dp from '../images/defaultDp.jpg'

const EditUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  return (
    <div className='edituser-container'>
      {user ? (
        <div className='user-details-box'>
          <div className='user-profile'>
            <img
              src={user.dpUrl || Dp} // Set a default image URL or use a placeholder
              alt='Profile'
              className='user-dp'
            />
            <div className='user-profile-head'>
              <h2>Welcome : {user.name}!</h2>
              <h3>User Details:</h3>
            </div>
          </div>
          <div className='user-details'>
            <table>
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td>Age:</td>
                  <td>{user.age}</td>
                </tr>
                <tr>
                  <td>Gender:</td>
                  <td>{user.gender}</td>
                </tr>
                <tr>
                  <td>Solid:</td>
                  <td>{user.solid}</td>
                </tr>
                <tr>
                  <td>Role:</td>
                  <td>{user.role}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>User data not found or not loaded yet.</p>
      )}
    </div>
  );
};

export default EditUser;
