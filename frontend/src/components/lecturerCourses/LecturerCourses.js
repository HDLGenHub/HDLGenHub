import React, { useState, useEffect } from "react";
import img from "../../images/course-vector.jpg"; // Import your image

const Courses = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      // Fetch courses for the logged-in user (lecturer)
      fetch(`http://localhost:8070/Course/courses?instructor=${parsedUser._id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          // Ensure that the fetched courses are for the logged-in user
          const userCourses = data.filter(course => course.instructor === parsedUser._id);
          setCourses(userCourses);
        })
        .catch((error) => console.error("Error fetching courses:", error));
    }
  }, []);

  const handleEditCourse = (courseId) => {
    window.location.href = `http://localhost:3000/courses/${courseId}/editcourses`;
  };

  const handleCreateCourse = () => {
    window.location.href = "http://localhost:3000/createcourse";
  };

  const handleCreateContent = (courseId) => {
    window.location.href = `http://localhost:3000/courses/${courseId}/content`;
  };

  const navigateToCourse = (courseId) => {
    window.location.href = `/course/${courseId}`;
  };

  return (
    <div className="m-10 mt-32">
      {user ? (
        <div>
          <h2 className="font-bold">
            Welcome to the Learning Portal, {user.name}!
          </h2>
          <div>
            <button
              className="rounded-full bg-amber-500 text-white p-3 m-5 hover:bg-amber-600 hover:scale-105 transform transition duration-300 ease-in-out"
              onClick={handleCreateCourse}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-6 w-6 inline-block mr-2"
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
            <h3 className="text-2xl font-bold text-left ml-28 pb-5 mt-10">
              Your Courses
            </h3>

            <div className="grid grid-cols-2 grid-flow-row gap-y-5 gap-x-10 mr-10 ml-10">
              {courses.map((course) => (
                <div
                  className="rounded-xl overflow-hidden shadow-lg m-5"
                  key={course._id}
                >
                  <div className="p-2 flex items-center">
                    <img className="h-48 cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out" src={img} alt="cover-img" onClick={() => navigateToCourse(course._id)}/>
                    <div className="flex w-2/3 flex-col items-center">
                    <div className="font-bold text-xl mb-5 cursor-pointer hover:text-amber-600" onClick={() => navigateToCourse(course._id)}>{course.title}</div>
                    <p class="p-2 font-medium">{course.description}</p>
                    <p>Duration: {course.duration} hours</p>
                    <div className="flex items-center m-5 gap-5">
                      <button
                        className="border-2 border-amber-500 hover:bg-amber-500 hover:text-white py-2 px-4 rounded-full"
                        onClick={() => handleEditCourse(course._id)}
                      >
                        Edit Course
                      </button>
                      <button
                        className="border-2 border-amber-500 hover:bg-amber-500 hover:text-white py-2 px-4 rounded-full"
                        onClick={() => handleCreateContent(course._id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-6 w-6 inline-block mr-2"
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
