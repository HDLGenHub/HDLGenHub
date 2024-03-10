import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import './Course.css'; // Import CSS file for styling

const Course = () => {
  const { courseId } = useParams(); // Get the courseId from the URL params
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch course details from your backend API based on the courseId
    fetch(`http://localhost:8070/Course/courses/${courseId}`)
      .then(response => response.json())
      .then(data => setCourse(data))
      .catch(error => console.error('Error fetching course details:', error));
  }, [courseId]);

  return (
    <div className="course-container">
      <div className="course-header">
        <h2 class="text-3xl font-bold text-left m-10 mb-3">{course ? course.title : 'Loading...'}</h2>
        <p className="instructor">{course ? `Instructor: ${course.instructor}` : 'Loading...'}</p>
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
                      <li>{material.title}</li>
                      <li>{material.url}</li>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Add more course details here as needed */}
          </div>
        ) : (
          <p>Loading course details...</p>
        )}
      </div>
    </div>
  );
};

export default Course;
