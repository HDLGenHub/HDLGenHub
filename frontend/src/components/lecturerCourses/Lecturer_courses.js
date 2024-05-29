import React, { useState, useEffect } from "react";
import img from "../../images/course-vector.jpg"; // Import your image

const Courses = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      // Fetch courses created by the user (lecturer)
      fetch(`http://localhost:8070/Course/courses?instructor=${parsedUser._id}`)
        .then((response) => response.json())
        .then((data) => setCourses(data))
        .catch((error) => console.error("Error fetching courses:", error));
    }
  }, []);

  /* const handleEditCourse = (courseId) => {
    // Open a new tab to edit the course
    window.location.href="http://localhost:8070/Course/courses/${courseId}";
  };*/
  const handleEditCourse = (courseId) => {
    // Open a new tab to edit the course
    window.location.href = `http://localhost:3000/courses/${courseId}/editcourses`;
  };

  const handleCreateCourse = () => {
    // Open a new tab to create a new course
    window.location.href = "http://localhost:3000/createcourse";
  };
  const handleCreateContent = (courseId) => {
    // Open a new tab to create course content for the specified course
    window.location.href = `http://localhost:3000/courses/${courseId}/content`;
  };

  return (
    <div class="m-10 mt-32">
      {user ? (
        <div>
          <h2 class=" font-bold">
            Welcome to the Learning Portal, {user.name}!
          </h2>
          <div>
            <button
              class="rounded-full bg-amber-500 text-white p-3 m-5 hover:bg-amber-600 hover:scale-105"
              onClick={handleCreateCourse}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-6 w-6 inline-block mr-2"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="white"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-9H8v2h3v3h2v-3h3v-2h-3V8h-2v3z"
                />
              </svg>
              Create Course
            </button>
          </div>

          <div>
            <hr />
            <h3 class="text-2xl font-bold text-left ml-28 pb-5 mt-10">
              Your Courses
            </h3>

            <div class="grid grid-cols-4 grid-flow-row gap-y-4 mr-20 ml-20">
              {courses.map((course) => (
                <div
                  class="w-60 rounded-xl overflow-hidden shadow-lg m-5 hover:scale-110"
                  key={course._id}
                >
                  <div class="px-10 py-4">
                    <img class="pb-5" src={img} alt="cover-img" />
                    <div class="font-bold text-xl mb-5">{course.title}</div>
                    <div className="flex flex-col items-center">
                      <button
                        className="border-2 border-amber-500 hover:bg-amber-500 hover:text-white py-2 px-4 rounded-full"
                        onClick={() => handleEditCourse(course._id)}
                      >
                        Edit Course
                      </button>
                      <button
                        class="rounded-full py-2 px-3 mt-5 border-amber-500 border-2 hover:border-2  hover:text-white hover:bg-amber-500 w-44"
                        onClick={() => handleCreateContent(course._id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          class="h-6 w-6 inline-block mr-2 hover:fill-amber-500"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            fill="black"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-9H8v2h3v3h2v-3h3v-2h-3V8h-2v3z"
                          />
                        </svg>
                        Create Content
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>User data not found or not loaded yet.</p>
      )}
    </div>
  );
};

export default Courses;
