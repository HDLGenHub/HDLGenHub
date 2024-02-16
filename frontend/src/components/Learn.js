import React, { useState, useEffect } from 'react';
import './Learn.css'; // Import CSS file for styling

const CoursesPage = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Fetch all courses from your backend API
    fetch('http://localhost:8070/Course/courses')
      .then(response => response.json())
      .then(data => setAllCourses(data))
      .catch(error => console.error('Error fetching all courses:', error));

    // Fetch enrolled courses from your backend API (replace userId with the actual user ID)
    const userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))._id : null;
    if (userId) {
      fetch(`http://localhost:8070/User/enroll/${userId}`)
        .then(response => response.json())
        .then(data => setEnrolledCourses(data))
        .catch(error => console.error('Error fetching enrolled courses:', error));
    }
  }, []);

  // Function to navigate to the Course page when a course box is clicked
  const navigateToCourse = (courseId) => {
    // Replace the URL with the Course page URL using window.location.href
    window.location.href = `/course/${courseId}`;
  };

  return (
    <div className="courses-container">
      <h2>Enrolled Courses</h2>
      <div className="courses-grid">
        {enrolledCourses.map(course => (
          <div className="course-box" key={course._id} onClick={() => navigateToCourse(course._id)}>
            {/* Add onClick event to trigger the navigateToCourse function */}
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Instructor: {course.instructor}</p>
            <p>Duration: {course.duration} hours</p>
            {/* Add more course details here as needed */}
          </div>
        ))}
      </div>
      <h2>All Courses</h2>
      <div className="courses-grid">
        {allCourses.map(course => (
          <div className="course-box" key={course._id} onClick={() => navigateToCourse(course._id)}>
            {/* Add onClick event to trigger the navigateToCourse function */}
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Instructor: {course.instructor}</p>
            <p>Duration: {course.duration} hours</p>
            {/* Add more course details here as needed */}
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default CoursesPage;
