import React, { useState, useEffect } from 'react';
import './Learn.css'; // Import CSS file for styling

const CoursesPage = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  //const [enrolledCoursesId, setEnrolledCoursesId] = useState([]);

  useEffect(() => {
    // Fetch all courses
    fetch('http://localhost:8070/Course/courses')
      .then(response => response.json())
      .then(data => setAllCourses(data))
      .catch(error => console.error('Error fetching all courses:', error));
  
    const userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))._id : null;
  
    // Fetch enrolled courses for the user
    if (userId) {
      // Assuming the user object contains a property called courseIds which is an array of course IDs
      const userCourseIds = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).enrolledCourses : [];
      console.log(userCourseIds);
      //setAllCourses([]);
      // Fetch courses based on the list of course IDs from the user object
      Promise.all(userCourseIds.map(courseId =>
        fetch(`http://localhost:8070/Course/courses/${courseId}`)
          .then(response => response.json())
      ))
      .then(data => setEnrolledCourses(data))
      .catch(error => console.error('Error fetching enrolled courses:', error));
    }
  }, [allCourses, enrolledCourses, localStorage.getItem('user')]);
  

  // Function to navigate to the Course page when a course box is clicked
  const navigateToCourse = (courseId) => {
    // Replace the URL with the Course page URL using window.location.href
    window.location.href = `/course/${courseId}`;
  };

  return (
    <div>
      
    
    <div className="courses-container m-10">
      <h2 class="text-left font-bold mb-10">Enrolled Courses</h2>
      <div className="courses-grid">
        {enrolledCourses.map(course => (
          <div className="en-course-box" key={course._id} onClick={() => navigateToCourse(course._id)}>
            {/* Add onClick event to trigger the navigateToCourse function */}
            <h3 class="font-bold">{course.title}</h3>
            <p>{course.description}</p>
            <p>Duration: {course.duration} hours</p>
            {/* Add more course details here as needed */}
          </div>
        ))}
      </div>
      <h2 class="text-left font-bold mb-10 mt-10">All Courses</h2>
      <div className="courses-grid">
        {allCourses.map(course => (
          <div className="course-box" key={course._id} onClick={() => navigateToCourse(course._id)}>
            {/* Add onClick event to trigger the navigateToCourse function */}
            <h3 class="font-bold">{course.title}</h3>
            <p>{course.description}</p>
            <p>Duration: {course.duration} hours</p>
            {/* Add more course details here as needed */}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CoursesPage;