import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const CreateUpdateContent = () => {
  const { courseId, contentId } = useParams(); // Retrieve courseId and contentId from URL parameters
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [content, setContent] = useState({
    title: '',
    type: '',
    fileUrl: '',
    submissions: [],
    feedback: '',
    resources: []
  });

  useEffect(() => {
    if (contentId) {
      // If editing existing content, fetch content details
      axios.get(`http://localhost:8070/Course/courses/${courseId}/content/${contentId}`)
        .then(response => {
          setContent(response.data);
        })
        .catch(error => console.error('Error fetching content details:', error));
    }
  }, [courseId, contentId]);

  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (contentId) {
        // Update existing content
        await axios.put(`http://localhost:8070/Course/courses/${courseId}/content/${contentId}`, content);
        alert('Content updated successfully!');
      } else {
        // Create new content
        await axios.post(`http://localhost:8070/Course/courses/${courseId}/content`, content);
        alert('Content created successfully!');
      }
      navigate(`/courses/${courseId}`); // Redirect to course page after saving
    } catch (error) {
      console.error('Error creating/updating content:', error);
      alert('An error occurred while creating/updating content. Please try again later.');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8070/Course/courses/${courseId}/content/${contentId}`);
      alert('Content deleted successfully!');
      navigate(`/courses/${courseId}`); // Redirect to course page after deleting
    } catch (error) {
      console.error('Error deleting content:', error);
      alert('An error occurred while deleting content. Please try again later.');
    }
  };

  return (
    <div className='m-20'>
      <h2>{contentId ? 'Update Content' : 'Create New Content'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={content.title} onChange={handleChange} required />
        <label>Type:</label>
        <input type="text" name="type" value={content.type} onChange={handleChange} required />
        <label>File URL:</label>
        <input type="text" name="fileUrl" value={content.fileUrl} onChange={handleChange} />
        <label>Feedback:</label>
        <textarea name="feedback" value={content.feedback} onChange={handleChange} />
        <label>Submissions:</label>
        <input type="text" name="submissions" value={content.submissions} onChange={handleChange} />
        <label>Resources:</label>
        <input type="text" name="resources" value={content.resources} onChange={handleChange} />
        <button type="submit">Save</button>
        {contentId && <button type="button" onClick={handleDelete}>Delete</button>}
      </form>
    </div>
  );
};

export default CreateUpdateContent;
