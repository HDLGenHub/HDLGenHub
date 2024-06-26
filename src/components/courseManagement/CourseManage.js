import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import './CourseManage.css'; // Import the CSS file
 
const CourseManagement = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Fetch all courses
    axios.get('http://localhost:4000/Course')
      .then(response => setAllCourses(response.data))
      .catch(error => {
        console.error('Error fetching all courses:', error);
        setError(error);
      });
  }, []);

 

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="course-management">
      <h1>Course Management</h1>
      <div className="course-section">
        <h2>All Courses</h2>
        <ul>
          {allCourses.map(course => (
            <li key={course._id}>
              <Link to={`/courses/${course._id}`}>{course.name}</Link>
             
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseManagement;
