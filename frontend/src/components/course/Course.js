import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Course.css";
import IDECompiler from "../compiler/compiler.js";

const Course = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [instructor, setInstructor] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const userId = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))._id
    : null;

  useEffect(() => {
    fetch(`http://localhost:8070/Course/courses/${courseId}`)
      .then((response) => response.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error("Error fetching course details:", error));
  }, [courseId]);

  useEffect(() => {
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
      alert(data.message);

      const user = JSON.parse(localStorage.getItem("user"));
      user.enrolledCourses.push(courseId);
      localStorage.setItem("user", JSON.stringify(user));

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
      alert(data.message);

      const user = JSON.parse(localStorage.getItem("user"));
      user.enrolledCourses = user.enrolledCourses.filter(
        (id) => id !== courseId
      );
      localStorage.setItem("user", JSON.stringify(user));

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

  return (
    <div className="course-page mt-20">
      <div className="course-header">
        <h1>{course ? course.title : "Loading..."}</h1>
        <p>
          {course
            ? `Instructor: ${instructor ? instructor.user.name : "Loading..."}`
            : "Loading..."}
        </p>
        <p>{course ? course.description : "Loading..."}</p>
        <p>Duration: {course ? course.duration : "Loading..."} hours</p>
      </div>

      <div className="course-main">
        <aside className="course-sidebar">
          <div className="progress-section">
            <h3>Your Progress</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: "70%" }}></div>
            </div>
            <span>70%</span>
          </div>
          <div className="grades-section">
            <h3>Grades</h3>
            <ul>
              <li>
                Assignment 01 <span>10</span>
              </li>
              <li>
                Assignment 02 <span>10</span>
              </li>
              <li>
                Assignment 03 <span>10</span>
              </li>
              <li>
                Assignment 04 <span>10</span>
              </li>
              <li>
                Overall <span>10</span>
              </li>
            </ul>
          </div>
          <div className="discussion-forums">
            <h3>Discussion Forums</h3>
            <textarea placeholder="Any doubts..."></textarea>
            <button>Submit</button>
          </div>
        </aside>

        <main className="course-content">
          <section className="learning-materials">
            <h2>Learning Materials</h2>
            <details>
              {course && course.materials
                ? course.materials.map((material) => renderMaterial(material))
                : "Loading..."}
            </details>
            <details>
              <summary>Videos</summary>
              <div className="video-grid">
                {course && course.materials
                  ? course.materials
                      .filter((material) => material.type === "video")
                      .map((material) => renderMaterial(material))
                  : "Loading..."}
              </div>
            </details>
            <details>
              <summary>Notes</summary>
              <ul>
                {course && course.materials
                  ? course.materials
                      .filter((material) => material.type === "note")
                      .map((material) => renderMaterial(material))
                  : "Loading..."}
              </ul>
            </details>
            <details>
              <summary>Recommended Books</summary>
              <ul>
                {course && course.materials
                  ? course.materials
                      .filter((material) => material.type === "book")
                      .map((material) => renderMaterial(material))
                  : "Loading..."}
              </ul>
            </details>
          </section>

          {course && course.title === "Intoduction to HDL" && (
            <>
              <section className="video-section">
                <iframe
                  title="Verilog tutorial"
                  src="https://www.youtube.com/embed/nblGw37Fv8A"
                  width="100%"
                  height="400px"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </section>
              <section className="compiler-section">
                <IDECompiler />
              </section>
            </>
          )}

          <section className="assignment">
            <h2>Assignment</h2>
            <p>Details about assignments will be provided here.</p>
          </section>

          <section className="quiz">
            <h2>Quiz</h2>
            <p>Details about quizzes will be provided here.</p>
          </section>
          {isEnrolled ? (
            <div className="enrollment">
              <p>You are already enrolled in this course.</p>
              <button onClick={handleUnEnroll}>Unenroll</button>
            </div>
          ) : (
            <button className="enroll-button" onClick={handleEnroll}>
              Enroll
            </button>
          )}
        </main>
      </div>
    </div>
  );
};

export default Course;
