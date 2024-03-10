import React, { useState, useEffect } from 'react';
import "./Registered_home_page.css";
import img from "../images/learning.jpg"; 
import img2 from "../images/course-2.jpg"; 

const Registered_home_page = () => {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
  //fetching the courses from the backend
  fetch('http://localhost:8070/Course/courses')
  .then(response => response.json())
  .then(data => setAllCourses.log(data))
  .catch(error => console.error('Error fetching all courses:', error));
}, []);

  // Function to navigate to the Course page when a course box is clicked
  const navigateToCourse = (courseId) => {
    // Replace the URL with the Course page URL using window.location.href
    window.location.href = `/course/${courseId}`;
  };

  return (
    <div className="registered-home-page-container">
      <div class="text-2xl text-left p-5 ml-10">
        <h1>Explore Learning Paths</h1>
      </div>
      <div className="content">
        <div class="couses">
          <figure class="ml-10 mr-10 filter grayscale-0 hover:brightness-125 ">
            <img class="rounded-2xl size-full h-80" src={img} alt="product"/>
            <div>
              <figcaption class="absolute text-white bottom-20 grid grid-cols-2 ml-10 grid-rows-1 grid-flow-row gap-20">
                <div class="text-left">
                  <h1 class="text-5xl p-3 mt-8 ml-20">Explore Lessons...</h1>
                  <p class="text-lg ml-20 mt-3">
                  From beginner basics to advanced techniques, dive into digital
                  design for mastering hardware description languages.
                  </p>
                </div>
                <div className="learning-path ">
                  <button class="drop-shadow-lg rounded-tr-3xl rounded-bl-3xl bg-orange-500 hover:scale-105 hover:bg-orange-500">Introduction to HDL</button>
                  <button class="drop-shadow-lg rounded-tr-3xl rounded-bl-3xl bg-orange-500 hover:scale-105 hover:bg-orange-500">Basic Syntax</button>
                  <button class="drop-shadow-lg rounded-tr-3xl rounded-bl-3xl bg-orange-500 hover:scale-105 hover:bg-orange-500">Combinational Logic</button>
                  <button class="drop-shadow-lg rounded-tr-3xl rounded-bl-3xl bg-orange-500 hover:scale-105 hover:bg-orange-500">Sequential Logic</button>
                </div>
            </figcaption>
            </div>
            
          </figure>
        </div>
        <div class="text-left text-2xl m-10 mb-0 ml-20">
            <h1>Personalized Courses for You</h1>
        </div>
      </div>

      <div class="p-10">

        <div class="grid grid-cols-3 ml-10 grid-rows-2 grid-flow-row gap-20 hover:brightness-110">
          <div class="hover:brightness-150 rounded-2xl hover:drop-shadow-2xl drop-shadow-xl bg-gray-800">
            <a href="#">
              <img class=" p-5 pb-0" src={img2} alt="HDL" />
              <h5 class="text-2xl font-bold tracking-tight p-5 text-left text-white">Introduction to HDL</h5>
              <p class=" p-5 pt-0 font-normal text-left text-gray-400">Course</p>
            </a>
          </div>
        </div>

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
    </div>
  );
};

export default Registered_home_page;
