
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateUpdateContent = ({ courseId }) => {
  const [content, setContent] = useState({
    title: '',
    type: '',
    fileUrl: '',
    submissions: [],
    feedback: '',
    resources: []
  });

  useEffect(() => {
    // If editing existing content, fetch content details
    // Replace 'contentId' with the ID of the content you want to edit
    // If creating new content, remove this useEffect or modify it accordingly
    axios.get(`http://localhost:8070/Course/courses/${courseId}/content/contentId`)
      .then(response => {
        setContent(response.data);
      })
      .catch(error => console.error('Error fetching content details:', error));
  }, [courseId]);

  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8070/Course/courses/${courseId}/content`, content);
      alert('Content created/updated successfully!');
    } catch (error) {
      console.error('Error creating/updating content:', error);
      alert('An error occurred while creating/updating content. Please try again later.');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8070/Course/courses/${courseId}/content/contentId`);
      alert('Content deleted successfully!');
    } catch (error) {
      console.error('Error deleting content:', error);
      alert('An error occurred while deleting content. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Create/Update Content</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={content.title} onChange={handleChange} required />
        <label>Type:</label>
        <input type="text" name="type" value={content.type} onChange={handleChange} required />
        <label>File URL:</label>
        <input type="text" name="fileUrl" value={content.fileUrl} onChange={handleChange} />
        {/* Add input fields for submissions, feedback, resources */}
        <button type="submit">Save</button>
        <button type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default CreateUpdateContent;
