import React, { useState, useEffect } from 'react';
import img from "../../images/learning.jpg";
import './Learn.css'; // Import CSS file for styling

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
        <div className="mt-24">
          <figure className="ml-10 mr-10 filter grayscale-0 hover:brightness-110 ">
            <img className="rounded-2xl size-full h-80" src={img} alt="product" />
            <div>
              <figcaption className="absolute text-white bottom-10 grid grid-cols-2 m-10 grid-rows-1 grid-flow-row gap-20">
                <div className="text-left">
                  <h1 className="text-5xl p-3 mt-8 ml-10">Explore Lessons...</h1>
                  <p className="text-lg ml-10 p-3">
                    From beginner basics to advanced techniques, dive into digital
                    design for mastering hardware description languages.
                  </p>
                </div>
                <div className="grid items-center grid-cols-2 gap-10 text-lg">
                  <button className="drop-shadow-lg rounded-tr-3xl h-16 rounded-bl-3xl bg-orange-500 hover:scale-105 hover:bg-orange-500">
                    Introduction to HDL
                  </button>
                  <button className="drop-shadow-lg rounded-tr-3xl h-16 rounded-bl-3xl bg-orange-500 hover:scale-105 hover:bg-orange-500">
                    Basic Syntax
                  </button>
                  <button className="drop-shadow-lg rounded-tr-3xl h-16 rounded-bl-3xl bg-orange-500 hover:scale-105 hover:bg-orange-500">
                    Combinational Logic
                  </button>
                  <button className="drop-shadow-lg rounded-tr-3xl h-16 rounded-bl-3xl bg-orange-500 hover:scale-105 hover:bg-orange-500">
                    Sequential Logic
                  </button>
                </div>
              </figcaption>
            </div>
          </figure>

        <div className="courses-container m-10">
          <h2 className="text-left font-bold mb-10">Enrolled Courses</h2>
          <div className="courses-grid">
            {enrolledCourses.map(course => (
              <div className="en-course-box shadow-md shadow-gray-300 hover:scale-105" key={course._id} onClick={() => navigateToCourse(course._id)}>
                <h3 className="font-bold bg-white p-5 rounded-xl">{course.title}</h3>
                <p className="p-2 font-medium">{course.description}</p>
                <p>Duration: {course.duration} hours</p>
                <p>Instructor: {instructors[course._id] ? instructors[course._id].user.name : 'Loading...'}</p>
              </div>
            ))}
          </div>

          <h2 className="text-left font-bold mb-10 mt-10">All Courses</h2>
          <div className="courses-grid">
            {allCourses.map(course => (
              <div className="course-box shadow-md shadow-gray-300 hover:scale-105" key={course._id} onClick={() => navigateToCourse(course._id)}>
                <h3 className="font-bold bg-white p-5 rounded-xl">{course.title}</h3>
                <p className="p-2 font-medium">{course.description}</p>
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
