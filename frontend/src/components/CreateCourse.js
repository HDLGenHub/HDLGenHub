import React, { useState } from 'react';
import axios from 'axios';

const CreateCourse = ({ userId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [material, setMaterial] = useState(null); // Changed from array to single file
  const [duration, setDuration] = useState('');
  const [enrollmentStatus, setEnrollmentStatus] = useState('open');


  const handleSubmit = async e => {
    e.preventDefault();
    
    try {
      const materialData = new FormData();
      materialData.append('file', material); // Append file data
      alert(material);
      console.log(material)

      const materialResponse = await axios.post('http://localhost:8070/Document/upload', materialData);

      if (!materialResponse.ok) {
        throw new Error('Error uploading document');
      }

      const documentId = materialResponse.data.document._id;

      const courseData = {
        title,
        description,
        instructor: userId,
        materials: [{
          documentId: documentId
        }],
        duration: Number(duration),
        enrollmentStatus
      };

      const response = await axios.post('http://localhost:8070/Course/courses', courseData);

      if (response.ok) {
        alert('Course created successfully!');
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error('Error creating course:', error);
      alert('An error occurred while creating the course. Please try again later.');
    }
  };

  const handleFileChange = e => {
    setMaterial(e.target.files[0]); // Set single file instead of array
  };

  return (
    <div>
      <h2>Create a New Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="material">Material:</label> {/* Changed ID to singular */}
          <input
            type="file"
            id="material"
            onChange={handleFileChange}
            accept=".pdf, .doc, .docx, .jpg, .jpeg, .png, .mp4"
            required
          />
        </div>
        <div>
          <label htmlFor="duration">Duration (hours):</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={e => setDuration(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="enrollmentStatus">Enrollment Status:</label>
          <select
            id="enrollmentStatus"
            value={enrollmentStatus}
            onChange={e => setEnrollmentStatus(e.target.value)}
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <button type="submit">Create Course</button>
      </form>
    </div>
  );
};

export default CreateCourse;
