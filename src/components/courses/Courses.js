import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import './CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [creator, setCreator] = useState(null); // State for creator
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [role, setRole] = useState(null); // State for role
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch course details
    axios.get(`http://localhost:4000/Course/${id}`)
      .then(response => {
        const courseData = response.data;
        setCourse(courseData);

        // Fetch creator's details
        if (courseData.createdby) {
          axios.get(`http://localhost:4000/Teacher/${courseData.createdby}`)
            .then(response => setCreator(response.data))
            .catch(error => console.error('Error fetching creator details:', error));
        }

        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching course details:', error);
        setError(error);
        setLoading(false);
      });

    // Retrieve user role
    const storedRole = localStorage.getItem('userRole');
    console.log('Retrieved role:', storedRole);
    setRole(storedRole);
  }, [id]);

  const handleEditCourse = () => {
    navigate(`/courseEdit/${id}`);
  };

  const handleDeleteCourse = () => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      axios.delete(`http://localhost:4000/Course/${id}`)
        .then(() => {
          navigate('/courses'); // Redirect to course list after deletion
        })
        .catch(error => {
          console.error('Error deleting course:', error);
          setError(error);
        });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="course-detail">
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <p>Created by: {creator ? creator.name : 'Unknown'}</p> {/* Display creator's name */}
      {/* Add other course details as needed */}
      
          <button onClick={handleEditCourse}>Edit</button>
          <button onClick={handleDeleteCourse}>Delete</button>
    
    </div>
  );
};

export default CourseDetail;
