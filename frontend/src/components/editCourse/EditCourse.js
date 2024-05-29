import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditCourse = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [editedCourse, setEditedCourse] = useState({
    title: '',
    description: '',
    duration: '',
    enrollmentStatus: '',
    instructor: '',
  });

  useEffect(() => {
    fetch(`http://localhost:8070/Course/courses/${courseId}`)
      .then(response => response.json())
      .then(data => setCourse(data))
      .catch(error => console.error('Error fetching course details:', error));
  }, [courseId]);

  useEffect(() => {
    if (course) {
      setEditedCourse({
        title: course.title,
        description: course.description,
        duration: course.duration ? course.duration.toString() : '',
        enrollmentStatus: course.enrollmentStatus,
        instructor: course.instructor,
      });
    }
  }, [course]);

  const handleInputChange = e => {
    setEditedCourse({
      ...editedCourse,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8070/Course/courses/${courseId}/editcourses`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedCourse),
      });

      if (response.ok) {
        alert('Course updated successfully!');
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
