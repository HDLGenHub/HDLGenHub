import React, { useState, useEffect } from 'react';
import img from "../../images/learning.jpg";
import "../learn/Learn.css";

const CoursesPage = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [instructors, setInstructors] = useState({}); // To store instructors by course ID

  useEffect(() => {
    // Fetch all courses
    fetch('http://localhost:8070/Course/courses')
      .then(response => response.json())
      .then(data => setAllCourses(data))
      .catch(error => console.error('Error fetching all courses:', error));
  
    const userId = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))._id : null;
  
    // Fetch enrolled courses for the user
    if (userId) {
      const userCourseIds = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).enrolledCourses : [];
      console.log(userCourseIds);
      // Fetch courses based on the list of course IDs from the user object
      Promise.all(userCourseIds.map(courseId =>
        fetch(`http://localhost:8070/Course/courses/${courseId}`)
          .then(response => response.json())
      ))
      .then(data => setEnrolledCourses(data))
      .catch(error => console.error('Error fetching enrolled courses:', error));
    }
  }, []);

  useEffect(() => {
    // Fetch instructors for all courses
    if (allCourses.length > 0) {
      const instructorPromises = allCourses.map(course => 
        fetch(`http://localhost:8070/User/get/${course.instructor}`)
          .then(response => response.json())
          .then(data => ({ courseId: course._id, instructor: data }))
      );

      Promise.all(instructorPromises)
        .then(results => {
          const instructorMap = {};
          results.forEach(({ courseId, instructor }) => {
            instructorMap[courseId] = instructor;
          });
          setInstructors(instructorMap);
        })
        .catch(error => console.error('Error fetching instructors:', error));
    }
  }, [allCourses]);

  // Function to navigate to the Course page when a course box is clicked
  const navigateToCourse = (courseId) => {
    window.location.href = `/course/${courseId}`;
  };

  return (
    <div>
        <div class="mt-24">
          <figure class="ml-10 mr-10 filter grayscale-0 hover:brightness-110 ">
            <img class="rounded-2xl size-full h-80" src={img} alt="product" />
            <div>
              <figcaption class="absolute text-white bottom-10 grid grid-cols-2 m-10 grid-rows-1 grid-flow-row gap-20">
                <div class="text-left">
                  <h1 class="text-5xl p-3 mt-8 ml-10">Explore Lessons...</h1>
                  <p class="text-lg ml-10 p-3">
                    From beginner basics to advanced techniques, dive into digital
                    design for mastering hardware description languages.
                  </p>
                </div>
                <div class="grid items-center grid-cols-2 gap-10 text-lg">
                  <button class="drop-shadow-lg rounded-tr-3xl h-16 rounded-bl-3xl bg-orange-500 hover:scale-105 hover:bg-orange-500 transform transition duration-300 ease-in-out">
                    Introduction to HDL
                  </button>
                  <button class="drop-shadow-lg rounded-tr-3xl h-16 rounded-bl-3xl bg-orange-500 hover:scale-105 hover:bg-orange-500 transform transition duration-300 ease-in-out">
                    Basic Syntax
                  </button>
                  <button class="drop-shadow-lg rounded-tr-3xl h-16 rounded-bl-3xl bg-orange-500 hover:scale-105 hover:bg-orange-500 transform transition duration-300 ease-in-out">
                    Combinational Logic
                  </button> 
                  <button class="drop-shadow-lg rounded-tr-3xl h-16 rounded-bl-3xl bg-orange-500 hover:scale-105 hover:bg-orange-500 transform transition duration-300 ease-in-out">
                    Sequential Logic
                  </button>
                </div>
              </figcaption>
            </div>
          </figure>

        <div class="courses-container m-10">
          <h2 class="text-left font-bold mb-10">Enrolled Courses</h2>
          <div class="courses-grid">
            {enrolledCourses.map(course => (
              <div class="bg-amber-200 p-5 rounded-lg cursor-pointer hover:bg-green-200 shadow-md shadow-gray-300 hover:scale-105 transform transition duration-300 ease-in-out" key={course._id} onClick={() => navigateToCourse(course._id)}>
                <h3 class="font-bold bg-white p-5 rounded-xl">{course.title}</h3>
                <p class="p-2 font-medium">{course.description}</p>
                <p>Duration: {course.duration} hours</p>
                <p>Instructor: {instructors[course._id] ? instructors[course._id].user.name : 'Loading...'}</p>
              </div>
            ))}
          </div>

          <h2 class="text-left font-bold mb-10 mt-10">All Courses</h2>
          <div class="courses-grid">
            {allCourses.map(course => (
              <div class="bg-blue-200 p-5 rounded-lg cursor-pointer hover:bg-red-200 shadow-md shadow-gray-300 hover:scale-105 transform transition duration-300 ease-in-out" key={course._id} onClick={() => navigateToCourse(course._id)}>
                <h3 class="font-bold bg-white p-5 rounded-xl">{course.title}</h3>
                <p class="p-2 font-medium">{course.description}</p>
                <p>Duration: {course.duration} hours</p>
                <p>Instructor: {instructors[course._id] ? instructors[course._id].user.name : 'Loading...'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
