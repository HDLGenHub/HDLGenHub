import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CourseDelete.css'; // Ensure this path is correct

const CourseDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://localhost:4000/Course/${id}`)
      .then(() => {
        navigate('/courses'); // Redirect to course list after deletion
      })
      .catch(error => {
        console.error('Error deleting course:', error);
      });
  };

  const handleCancel = () => {
    navigate(`/courses/${id}`); // Go back to course detail page
  };

  return (
    <div className="course-delete-container">
      <div className="course-delete-form">
        <h1>Confirm Deletion</h1>
        <p>Are you sure you want to delete this course?</p>
        <div className="form-actions">
          <button className="delete-button" onClick={handleDelete}>Yes, Delete</button>
          <button className="cancel-button" onClick={handleCancel}>No, Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDelete;
