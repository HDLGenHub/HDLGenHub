import React, { useState } from 'react';
//import axios from 'axios';

const CreateCourse = ({ userId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fields, setFields] = useState([]);
  const [duration, setDuration] = useState('');
  const [enrollmentStatus, setEnrollmentStatus] = useState('open');

  const handleAddField = (type) => {
    const newField = {
      type: type,
      value: ''
    };
    setFields([...fields, newField]);
  };

  const handleChangeField = (index, newValue) => {
    const updatedFields = [...fields];
    updatedFields[index].value = newValue;
    setFields(updatedFields);
  };

  const handleRemoveField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission...
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
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        {fields.map((field, index) => (
          <div key={index}>
            <label>{`Field ${index + 1}: ${field.type}`}</label>
            <input
              type="text"
              value={field.value}
              onChange={(e) => handleChangeField(index, e.target.value)}
            />
            <button type="button" onClick={() => handleRemoveField(index)}>
              Remove
            </button>
          </div>
        ))}
        <div>
          <label>Add Field:</label>
          <select onChange={(e) => handleAddField(e.target.value)}>
            <option value="material">Material</option>
            <option value="link">Link</option>
            <option value="youtube">YouTube Video</option>
          </select>
        </div>
        <div>
          <label htmlFor="duration">Duration (hours):</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="enrollmentStatus">Enrollment Status:</label>
          <select
            id="enrollmentStatus"
            value={enrollmentStatus}
            onChange={(e) => setEnrollmentStatus(e.target.value)}
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
