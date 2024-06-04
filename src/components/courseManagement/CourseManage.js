import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import './CourseManagement.css';

const CourseManagement = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    // Fetch enrolled courses
    
    // Fetch all courses
    axios.get('http://localhost:4000/Course')
      .then(response => setAllCourses(response.data))
      .catch(error => console.error('Error fetching all courses:', error));
  }, []);

  return (
    <div className="course-management">
      <h1>Course Management</h1>
      <div className="course-section">
      
        <ul>
          {enrolledCourses.map(course => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      </div>
      <div className="course-section">
        <h2>All Courses</h2>
        <ul>
          {allCourses.map(course => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseManagement;
