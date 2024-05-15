import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters

const EditCourse = () => {
  const { courseId } = useParams(); // Get the courseId from the URL params
  const [course, setCourse] = useState(null);
  const [editedCourse, setEditedCourse] = useState({
    title: '',
    description: '',
    duration: '',
    fields: [],
    enrollmentStatus: '',
    instructor: '',
    // Add more fields as needed
  });

  useEffect(() => {
    // Fetch course details from your backend API based on the courseId
    fetch(`http://localhost:8070/Course/courses/${courseId}`)
      .then(response => response.json())
      .then(data => setCourse(data))
      .catch(error => console.error('Error fetching course details:', error));
  }, [courseId]);

  useEffect(() => {
    // Set editedCourse state when course details are available
    if (course) {
      setEditedCourse({
        title: course.title,
        description: course.description,
        duration: course.duration ? course.duration.toString() : '',
        enrollmentStatus: course.enrollmentStatus,
        instructor: course.instructor,
        //lectureNotes: course.lectureNotes || '', // Update with actual lecture notes data
        //youtubeVideo: course.youtubeVideo || '', // Update with actual YouTube video data
       // fields: course.fields || [], // Assuming fields is an array of strings
        // Update with more fields as needed
      });
    }
  }, [course]);

  const handleInputChange = e => {
    // Update editedCourse state when form inputs change
    setEditedCourse({
      ...editedCourse,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
  
      // Append text data to formData
      formData.append('title', editedCourse.title);
      formData.append('description', editedCourse.description);
      formData.append('duration', editedCourse.duration);
      formData.append('enrollmentStatus', editedCourse.enrollmentStatus);
      formData.append('instructor', editedCourse.instructor);
      // Append lectureNotes file to formData
      //formData.append('lectureNotes', editedCourse.lectureNotes);
  
      const response = await fetch(`http://localhost:8070/Course/editcourses/${courseId}`, {
        method: 'PUT',
        body: formData, // Send formData instead of JSON.stringify(editedCourse)
      });
  
      if (response.ok) {
        alert('Course updated successfully!');
        // Optionally, you can redirect the user to the course details page or another route
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      console.error('Error updating course:', error);
      alert('An error occurred while updating the course. Please try again later.');
    }
  };
  

  return (
    <div className="course-container">
      <div className="course-header">
        <h2>Edit Course: {course ? course.title : 'Loading...'}</h2>
      </div>
      <div className="course-content">
        {course ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={editedCourse.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={editedCourse.description}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            {/* Add more fields for editing */}
            <div>
              <label htmlFor="duration">Duration (hours):</label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={editedCourse.duration}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="enrollmentStatus">Enrollment Status:</label>
              <select
                id="enrollmentStatus"
                name="enrollmentStatus"
                value={editedCourse.enrollmentStatus}
                onChange={handleInputChange}
              >
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          
            {/* Add more form fields for other properties */}
            <button type="submit">Save Changes</button>
          </form>
        ) : (
          <p>Loading course details...</p>
        )}
      </div>
    </div>
  );
};

export default EditCourse;