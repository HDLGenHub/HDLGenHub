import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import "./Course.css";
import IDECompiler from "../compiler/compiler.js";

const Course = () => {
  const { courseId } = useParams(); 
  const [course, setCourse] = useState(null);
  const [instructor, setInstructor] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false); // Add state for enrollment status

  const userId = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))._id
    : null;

  useEffect(() => {
    // Fetch course details from your backend API based on the courseId
    fetch(`http://localhost:8070/Course/courses/${courseId}`)
      .then((response) => response.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error("Error fetching course details:", error));
  }, [courseId]);

  useEffect(() => {
    // Fetch instructor details from your backend API based on the course instructor
    if (course) {
      fetch(`http://localhost:8070/User/get/${course.instructor}`)
        .then((response) => response.json())
        .then((data) => setInstructor(data))
        .catch((error) =>
          console.error("Error fetching instructor details:", error)
        );
    }
  }, [course]);

  useEffect(() => {
    // Check if the user is enrolled in the course
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      setIsEnrolled(user.enrolledCourses.includes(courseId));
    }
  }, [courseId]);

  const handleEnroll = async () => {
    try {
      if (isEnrolled) {
        alert("You are already enrolled in this course.");
        return;
      }

      // Send a POST request to enroll the user in the course
      const response = await fetch(
        `http://localhost:8070/User/enroll/${userId}/${courseId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      alert(data.message); // Show success message

      // Update local storage
      const user = JSON.parse(localStorage.getItem("user"));
      user.enrolledCourses.push(courseId);
      localStorage.setItem("user", JSON.stringify(user));

      // Update state
      setIsEnrolled(true);
    } catch (error) {
      console.error("Error enrolling in course:", error);
      alert("Error enrolling in course. Please try again.");
    }
  };

  const handleUnEnroll = async () => {
    try {
      if (!isEnrolled) {
        alert("You are not enrolled in this course.");
        return;
      }

      // Send a POST request to unenroll the user from the course
      const response = await fetch(
        `http://localhost:8070/User/unenroll/${userId}/${courseId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      alert(data.message); // Show success message

      // Update local storage
      const user = JSON.parse(localStorage.getItem("user"));
      user.enrolledCourses = user.enrolledCourses.filter(
        (id) => id !== courseId
      );
      localStorage.setItem("user", JSON.stringify(user));

      // Update state
      setIsEnrolled(false);
    } catch (error) {
      console.error("Error unenrolling from course:", error);
      alert("Error unenrolling from course. Please try again.");
    }
  };

  const renderMaterial = (material) => {
    if (material.type === "pdf") {
      return (
        <div key={material._id}>
          <a href={material.url} target="_blank" rel="noopener noreferrer">
            {material.title} (PDF)
          </a>
          <iframe
            src={material.url}
            width="100%"
            height="500px"
            frameBorder="0"
            title={material.title}
          ></iframe>
        </div>
      );
    } else if (material.type === "video") {
      return (
        <div key={material._id}>
          <h4>{material.title} (Video)</h4>
          <iframe
            src={material.url}
            width="100%"
            height="500px"
            frameBorder="0"
            allowFullScreen
            title={material.title}
          ></iframe>
        </div>
      );
    } else {
      return (
        <li key={material._id}>
          <a href={material.url} target="_blank" rel="noopener noreferrer">
            {material.title} (Link)
          </a>
        </li>
      );
    }
  };

  if (course) {
    if (course.title === "Intoduction to HDL") {
      return (
        <>
          <div className="course-container">
            <div className="course-header m-20">
              <h2 class="font-bold">{course ? course.title : "Loading..."}</h2>
              <p className="instructor font-medium font-serif text-xl">
                {course
                  ? `Instructor: ${
                      instructor ? instructor.user.name : "Loading"
                    }`
                  : "Loading..."}
              </p>
            </div>
            <div className="course-content items-center">
              {course ? (
                <div>
                  <p className="description">{course.description}</p>
                  {course.materials && course.materials.length > 0 && (
                    <div>
                      <h3>Materials</h3>
                      <ul className="materials-list">
                        {course.materials.map((material) =>
                          renderMaterial(material)
                        )}
                      </ul>
                    </div>
                  )}
                  <div class="mt-10 items-center w-full">
                    {/* Embed Verilog compiler iframe */}
                    <iframe
                      title={`Verilog tutorial ${course.title}`}
                      src="https://www.youtube.com/embed/nblGw37Fv8A"
                      width="80%"
                      height="400px"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                    <hr className="m-10"></hr>
                    <IDECompiler />
                  </div>
                  {/* Conditionally render the "Enroll" button or enrollment message */}
                  {isEnrolled ? (
                    <div className="m-5">
                      <p>You are already enrolled in this course.</p>
                      <button
                        className="m-5 border-2 p-2 mt-5 bg-amber-500 rounded-full"
                        onClick={handleUnEnroll}
                      >
                        Unenroll
                      </button>
                    </div>
                  ) : (
                    <button
                      className="m-5 border-2 p-2 bg-amber-500 rounded-full"
                      onClick={handleEnroll}
                    >
                      Enroll
                    </button>
                  )}
                </div>
              ) : (
                <p>Loading course details...</p>
              )}
            </div>
          </div>
        </>
      );
    } else {
      // Render course details
      return (
        <div className="course-container">
          <div className="course-header m-20">
            <h2>{course ? course.title : "Loading..."}</h2>
            <p className="instructor">
              {course
                ? `Instructor: ${instructor ? instructor.user.name : "Loading"}`
                : "Loading..."}
            </p>
          </div>
          <div className="course-content">
            {course ? (
              <div>
                <p className="description">{course.description}</p>
                {course.materials && course.materials.length > 0 && (
                  <div>
                    <h3>Materials</h3>
                    <ul className="materials-list">
                      {course.materials.map((material) =>
                        renderMaterial(material)
                      )}
                    </ul>
                  </div>
                )}

                {/* Conditionally render the "Enroll" button or enrollment message */}
                {isEnrolled ? (
                  <div className="m-5">
                    <p>You are already enrolled in this course.</p>
                    <button
                      className="m-5 border-2 p-2 mt-5 bg-amber-500 rounded-full"
                      onClick={handleUnEnroll}
                    >
                      Unenroll
                    </button>
                  </div>
                ) : (
                  <button
                    className="m-5 border-2 p-2 bg-amber-500 rounded-full"
                    onClick={handleEnroll}
                  >
                    Enroll
                  </button>
                )}
              </div>
            ) : (
              <p>Loading course details...</p>
            )}
          </div>
        </div>
      );
    }
  } else {
    return null; // Or any other fallback JSX if needed
  }
};

export default Course;
