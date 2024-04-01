import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import './Course.css'; // Import CSS file for styling
import  IDECompiler from '../compiler/compiler.js'

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
    if (course) {
      fetch(`http://localhost:8070/User/get/${course.instructor}`)
        .then(response => response.json())
        .then(data => setInstructor(data))
        .catch(error => console.error('Error fetching course details:', error));
    }
  }, [course]);

  const isEnrolled = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).enrolledCourses.includes(courseId);

  const handleEnroll = async () => {
    try {
      if (isEnrolled) {
        alert('You are already enrolled in this course.');
        return;
      }

      // Send a POST request to enroll the user in the course
      const response = await fetch(`http://localhost:8070/User/enroll/${userId}/${courseId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
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

  const handleUnEnroll = async () => {
    try {
      if (!isEnrolled) {
        alert('You are not enrolled in this course.');
        return;
      }

      // Send a POST request to unenroll the user from the course
      const response = await fetch(`http://localhost:8070/User/unenroll/${userId}/${courseId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
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
      console.error('Error unenrolling from course:', error);
      alert('Error unenrolling from course. Please try again.');
    }
  };

  return (
    <div className="course-container">
      <div className="course-header">
        <h2>{course ? course.title : 'Loading...'}</h2>
        <p className="instructor">{course ? `Instructor: ${instructor ? instructor.user.name : 'Loading'}` : 'Loading...'}</p>
      </div>
      <div className="course-content">
        {course ? (
          <div>
            <p className="description">{course.description}</p>
            {course.materials && course.materials.length > 0 && (
              <div>
                <h3>Materials</h3>
                <ul className="materials-list">
                  {course.materials.map(material => (
                    <li key={material._id}>
                      <a href={material.url} target="_blank" rel="noopener noreferrer">
                        {material.title}
                      </a>
                      <li>{material.url}</li>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Embed Verilog compiler iframe */}
            <iframe
              title={`Verilog tutorial ${course.title}`}
              src="https://www.youtube.com/embed/nblGw37Fv8A"
              width="100%"
              height="500px"
              frameBorder="0"
              allowFullScreen
            ></iframe>
              <IDECompiler/>
            {/* Conditionally render the "Enroll" button or enrollment message */}
            {isEnrolled ? (
              <div class="m-5">
                <p>You are already enrolled in this course.</p>
                <button class="m-5 border-2 p-2 mt-5 bg-amber-500 rounded-full" onClick={handleUnEnroll}>Unenroll</button>
              </div>
            ) : (
              <button class="m-5 border-2 p-2 bg-amber-500 rounded-full" onClick={handleEnroll}>Enroll</button>
            )}
          </div>
        ) : (
          <p>Loading course details...</p>
        )}
      </div>
    </div>
  );
};

export default Course;

/*

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Course.css';
import IDECompiler from './compiler/compiler.js';
import YouTube from 'react-youtube';

const Course = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [instructor, setInstructor] = useState(null);

  const userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))._id : null;

  useEffect(() => {
    fetch(`http://localhost:8070/Course/courses/${courseId}`)
      .then(response => response.json())
      .then(data => setCourse(data))
      .catch(error => console.error('Error fetching course details:', error));
  }, [courseId]);

  useEffect(() => {
    if (course) {
      fetch(`http://localhost:8070/User/get/${course.instructor}`)
        .then(response => response.json())
        .then(data => setInstructor(data))
        .catch(error => console.error('Error fetching course details:', error));
    }
  }, [course]);

  const isEnrolled = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).enrolledCourses.includes(courseId);

  const handleEnroll = async () => {
    // Implement handleEnroll functionality
  };

  const handleUnEnroll = async () => {
    // Implement handleUnEnroll functionality
  };

  return (
    <div className="course-container">
      <div className="course-header">
        <h2>{course ? course.title : 'Loading...'}</h2>
        <p className="instructor">{course ? `Instructor: ${instructor ? instructor.user.name : 'Loading'}` : 'Loading...'}</p>
      </div>
      <div className="course-content">
        {course ? (
          <div>
            <p className="description">{course.description}</p>
            {course.materials && course.materials.length > 0 && (
              <div>
                <h3>Materials</h3>
                <ul className="materials-list">
                  {course.materials.map(material => (
                    <li key={material._id}>
                      <a href={material.url} target="_blank" rel="noopener noreferrer">
                        {material.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {course.youtubeVideoId && (
              <div>
                <h3>Verilog Tutorial</h3>
                <YouTube videoId={'https://www.youtube.com/watch?v=nblGw37Fv8A'} opts={{ width: '100%', height: '500px' }} />
              </div>
            )}
            <IDECompiler />
            {isEnrolled ? (
              <div>
                <p>You are already enrolled in this course.</p>
                <button onClick={handleUnEnroll}>Unenroll</button>
              </div>
            ) : (
              <button onClick={handleEnroll}>Enroll</button>
            )}
          </div>
        ) : (
          <p>Loading course details...</p>
        )}
      </div>
    </div>
  );
};

export default Course;
*/