import React, { useState } from 'react';
import background from '../../images/background.png';
//import axios from 'axios';

const CreateCourse = ({ userId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fields, setFields] = useState([]);
  const [duration, setDuration] = useState('');
  const [enrollmentStatus, setEnrollmentStatus] = useState('open');
  const [instructor, setInstructor]=useState('');

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
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch('http://localhost:8070/Course/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          fields,
          duration,
          enrollmentStatus,
          instructor,
        }),
      });
  
      if (response.ok) {
        // Course created successfully
        alert('Course created successfully!');
      } else {
        // Handle errors
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error creating course:', error.message);
      // Display error message
      alert('Error creating course: ' + error.message);
    }
  };

  return (
    <div className="background-container">
      <div>
        <img src={background} alt="background" className="background-image" />
      </div>
      <div class="m-96 mt-20 mb-10 border-2 border-amber-500 rounded-3xl bg-orange-500 bg-opacity-10">
        <h2 class="font-bold m-10">Create a New Course</h2>

        <form class="max-w-xl mx-auto" onSubmit={handleSubmit}>

          <div class="mb-5">
            <label class="block mb-2 text-base font-medium text-gray-900" htmlFor="title">Title</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>

          <div class="mb-5 w-full">
            <label class="block mb-2 text-base font-medium text-gray-900" htmlFor="description">Description</label>
            <textarea id="description" value={description}
              onChange={(e) => setDescription(e.target.value)} required class="border border-gray-300 p-2 rounded-2xl w-full h-15"></textarea>
          </div>

          <div class="mb-5">
            <label class="block mb-2 text-base font-medium text-gray-900" htmlFor="duration">Duration (hours)</label>
            <input type="number" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} required/>
          </div>

          <div class="mb-5">
            <label class="block mb-2 text-base font-medium text-gray-900" htmlFor="enrollmentStatus">Enrollment Status</label>
            <select id="enrollmentStatus" value={enrollmentStatus} onChange={(e) => setEnrollmentStatus(e.target.value)}>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
          </div>


          {fields.map((field, index) => (
            <div key={index}>
              <label class="block mb-2 text-base font-medium text-gray-900">{`Field ${index + 1}: ${field.type}`}</label>
              <input type="text" value={field.value} onChange={(e) => handleChangeField(index, e.target.value)} />
              <button type="button" class=" border-2 m-2 w-20 rounded-full border-red-500 hover:bg-red-500 hover:text-white" 
              onClick={() => handleRemoveField(index)}>
                Remove
              </button>
            </div>
          ))}
          <div class="w-40 mb-5">
            <label class="block mb-2 text-base font-medium text-gray-900">Add Field</label>
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " onChange={(e) => handleAddField(e.target.value)}>
              <option selected="">Select Field</option>
              <option value="material">Material</option>
              <option value="link">Link</option>
              <option value="youtube">YouTube Video</option>
            </select>
          </div>

          <div class="mb-5">
            <label class="block mb-2 text-base font-medium text-gray-900" htmlFor="instructor">Instructor</label>
            <input type="text" id="instructor" value={instructor} onChange={(e) => setInstructor(e.target.value)} required/>
          </div>

          


          <button class="m-10 p-2 w-32 rounded-full font-bold hover:scale-110 bg-amber-500 text-white"  onClick={handleSubmit}  type="submit">Create Course</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
