import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CourseEdit.css'; // Ensure this path is correct

const CourseEdit = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({
    name: '',
    description: '',
    coverimage: '', // Include coverimage field
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/Course/${id}`)
      .then(response => {
        setCourse(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching course details:', error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse(prevCourse => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleSave = () => {
    axios.put(`http://localhost:4000/Course/${id}`, course)
      .then(() => {
        navigate(`/courses/${id}`); // Redirect to course detail page
      })
      .catch(error => {
        console.error('Error updating course:', error);
        setError(error);
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="course-edit-container">
      <h1>Edit Course</h1>
      <form className="course-edit-form">
        <div className="form-group">
          <label htmlFor="name">Course Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={course.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={course.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="coverimage">Cover Image URL:</label>
          <input
            type="text"
            id="coverimage"
            name="coverimage"
            value={course.coverimage}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-actions">
          <button type="button" onClick={handleSave}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default CourseEdit;
