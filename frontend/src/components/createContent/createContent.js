import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const CreateUpdateContent = () => {
  const { courseId, contentId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState({
    title: '',
    type: '',
    fileUrl: '',
    submissions: [],
    feedback: [],
    resources: [{ title: '', url: '' }],
  });

  useEffect(() => {
    if (contentId) {
      axios.get(`http://localhost:8070/courses/${courseId}/content/${contentId}`)
        .then(response => {
          setContent(response.data);
        })
        .catch(error => console.error('Error fetching content details:', error));
    }
  }, [courseId, contentId]);

  const handleChange = (e) => {
  
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
  };

  const handleResourceChange = (index, event) => {
    const newResources = content.resources.map((resource, i) => {
      if (i === index) {
        return { ...resource, [event.target.name]: event.target.value };
      }
      return resource;
    });
    setContent({ ...content, resources: newResources });
  };

  const addResource = () => {
    setContent({
      ...content,
      resources: [...content.resources, { title: '', url: '' }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form:', content); // Add logging
    console.log('courseId:', courseId); // Log courseId to check if it is defined

    try {
      if (contentId) {
        await axios.put(`http://localhost:8070/courses/${courseId}/content/${contentId}`, content);
        alert('Content updated successfully!');
      } else {
        await axios.post(`http://localhost:8070/courses/${courseId}/content`, content);
        alert('Content created successfully!');
      }
      navigate(`/courses`);
    } catch (error) {
      console.error('Error creating/updating content:', error);
      alert('An error occurred while creating/updating content. Please try again later.');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8070/courses/${courseId}/content/${contentId}`);
      alert('Content deleted successfully!');
      navigate(`/courses/${courseId}`);
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
        <select name="type" value={content.type} onChange={handleChange} required>
          <option value="">Select type</option>
          <option value="video">video</option>
          <option value="Assignment">Assignment</option>
          <option value="Quiz">Quiz</option>
          <option value="Project">Project</option>
        </select>
        <label>File URL:</label>
        <input type="text" name="fileUrl" value={content.fileUrl} onChange={handleChange} />
        <label>Resources:</label>
        {content.resources.map((resource, index) => (
          <div key={index}>
            <input
              type="text"
              name="title"
              placeholder="Resource Title"
              value={resource.title}
              onChange={(e) => handleResourceChange(index, e)}
            />
            <input
              type="text"
              name="url"
              placeholder="Resource URL"
              value={resource.url}
              onChange={(e) => handleResourceChange(index, e)}
            />
          </div>
        ))}
        <button type="button" onClick={addResource}>Add Resources</button>
        <button type="submit">Save</button>
        {contentId && <button type="button" onClick={handleDelete}>Delete</button>}
      </form>
    </div>
  );
};

export default CreateUpdateContent;
