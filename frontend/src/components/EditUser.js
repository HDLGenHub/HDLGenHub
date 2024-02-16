import React, { useState, useEffect } from 'react';
import './EditUser.css';
import Dp from '../images/defaultDp.jpg';

const EditUser = () => {
  const [user, setUser] = useState(null);
  const [dpFile, setDpFile] = useState(null); // State to store the selected profile picture file

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const handleFileChange = (e) => {
    // Set the selected file to the state
    setDpFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!dpFile) {
      alert('Please select a profile picture.');
      return;
    }

    const formData = new FormData();
    formData.append('dp', dpFile);

    try {
      const response = await fetch(`http://localhost:8070/User/upload/${user._id}`, {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        alert('Profile picture uploaded successfully.');
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to upload profile picture.');
      }
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      alert('An error occurred while uploading profile picture. Please try again later.');
    }
  };

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
            <input type='file' accept='image/*' onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Profile Picture</button>
            <div className='user-profile-head'>
              <h2>Welcome: {user.name}!</h2>
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
