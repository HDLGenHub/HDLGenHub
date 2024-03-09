import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import './Course.css'; // Import CSS file for styling

const Course = () => {
  const { courseId } = useParams(); // Get the courseId from the URL params
  const [course, setCourse] = useState(null);
  const [instructor, setInstructor] = useState(null);

  const userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))._id : null;

  useEffect(() => {
    // Fetch course details from your backend API based on the courseId
    fetch(`http://localhost:8070/Course/courses/${courseId}`)
      .then(response => response.json())
      .then(data => setCourse(data))
      .catch(error => console.error('Error fetching course details:', error));
  }, [courseId]);

  
  useEffect(() => {
    // Fetch course details from your backend API based on the courseId
    course?(
    fetch(`http://localhost:8070/User/get/${course.instructor}`)
      .then(response => response.json())
      .then(data => setInstructor(data))
      .catch(error => console.error('Error fetching course details:', error))):setInstructor(null);
  }, [courseId,course]);

  console.log(instructor);
  
  const handleEnroll = async () => {
    try {
      // Send a POST request to enroll the user in the course
      const response = await fetch(`http://localhost:8070/User/enroll/${userId}/${courseId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // If you need to send any data in the request body, stringify it here
        body: JSON.stringify({
          // Add any additional data if required
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      alert(data.message); // Show success message
    } catch (error) {
      console.error('Error enrolling in course:', error);
      alert('Error enrolling in course. Please try again.');
    }
  };

  return (
    <div className="course-container">
      <div className="course-header">
        <h2>{course ? course.title : 'Loading...'}</h2>
        <p className="instructor">{course ? `Instructor: ${instructor?instructor.user.name:'Loading'}` : 'Loading...'}</p>
      </div>
      <div className="course-content">
        {course ? (
          <div>
            <p className="description">{course.description}</p>
            {/* Display materials */}
            {course.materials && course.materials.length > 0 && (
              <div>
                <h3>Materials</h3>
                <ul className="materials-list">
                  {course.materials.map(material => (
                    <li key={material._id}>
                      <a href={material.url} target="_blank" rel="noopener noreferrer">
                        {material.title}
                      </a>
                      {/*<li>{material.title}</li>*/}
                      <li>{material.url}</li>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Add more course details here as needed */}
            <button onClick={handleEnroll}>Enroll</button>
          </div>
        ) : (
          <p>Loading course details...</p>
        )}
      </div>
    </div>
  );
};

export default Course;
