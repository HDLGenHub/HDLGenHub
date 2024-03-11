import React, { useState, useEffect } from 'react';
import './Lecturer_courses.css';

const Courses = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      
      // Fetch courses created by the user (lecturer)
      fetch(`http://localhost:8070/Course/courses?instructor=${parsedUser._id}`)
        .then(response => response.json())
        .then(data => setCourses(data))
        .catch(error => console.error('Error fetching courses:', error));
    }
  }, []);

  const handleEditCourse = courseId => {
    // Open a new tab to edit the course
    window.open(`http://localhost:8070/Course/courses/${courseId}`, '_blank');
  };

  const handleCreateCourse = () => {
    // Open a new tab to create a new course
    window.open('http://localhost:3000/createcourse', '_blank');
  };

  return (
    <div className='course-container'>
      {user ? (
        <div>
          <h2>Welcome to the Learning Portal, {user.name}!</h2>
          <div>
            <button onClick={handleCreateCourse}>Create Course</button>
          </div>
          <h3>Your Courses:</h3>
          <ul>
            {courses.map(course => (
              <li key={course._id}>
                {course.title}
                <button onClick={() => handleEditCourse(course._id)}>Edit Course</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>User data not found or not loaded yet.</p>
      )}
    </div>
  );
};

export default Courses;
