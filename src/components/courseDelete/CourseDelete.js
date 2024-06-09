import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    <div className="course-delete">
      <h1>Are you sure you want to delete this course?</h1>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={handleCancel}>No, Cancel</button>
    </div>
  );
};

export default CourseDelete;
