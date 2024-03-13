import React, { useState, useEffect } from 'react';
import './EditUser.css';

import Dp from '../../images/defaultDp.jpg';

import axios from 'axios';

const url = "http://localhost:8070/uploads"
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

  const [postImage, setPostImage] = useState( { myFile : ""})

  /*const createPost = async (newImage) => {
    try{
      await axios.post(url, newImage)
    }catch(error){
      console.log(error)
    }
  }*/
  const createPost = async (newImage) => {
    try {
      // Upload the image
      const response = await axios.post(url, newImage);
      // Get the uploaded image URL from the response
      const imageUrl = response.data.imageUrl; // Adjust accordingly to your server response
      // Update the user data in localStorage with the new image URL
      const updatedUser = { ...user, profilePicture: imageUrl };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      // Alert message after successful photo submission
      window.alert("Photo submitted successfully!");
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form...");
    alert("Photo submitted successfully!");
  
    try {
      // Rest of your code...
    } catch (error) {
      console.error("Error submitting user data:", error);
    }
  };
  
  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(postImage)
    try {
      // Send form data to the backend route for storing in MongoDB
      await axios.post("http://localhost:8070/users/submit", {
        name: user.name,
        email: user.email,
        age: user.age,
        gender: user.gender,
        solid: user.solid,
        role: user.role,
        password: user.password
      });

      // If successful, log a message and perform any additional actions as needed
      console.log("User data submitted successfully");
    } catch (error) {
      // If an error occurs, log the error
      console.error("Error submitting user data:", error);
    }

  }*/

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      // When reading is complete, set the base64 data
      setPostImage({ ...postImage, myFile: reader.result });
    };
  
    // Read the file as base64
    reader.readAsDataURL(file);
  };
  

 /* const handleFileChange = (e) => {
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
*/
  return (
    <div className='edituser-container'>
      {user ? (
        <div className='user-details-box'>
           <div className="App">
      <form onSubmit={handleSubmit}>

        <label htmlFor="file-upload" className='custom-file-upload'>
          <img src={postImage.myFile || Dp} alt="" />
        </label>

        <input 
          type="file"
          lable="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
         />

       
         <button type='submit' className='blackButton' onClick={handleSubmit}>Submit</button>
      </form>
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