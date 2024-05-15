// contentRoutes.js

const express = require('express');
const router = express.Router();
const Content = require('../models/Content');

// Route to create new content
router.post('/courses/:courseId/content', async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, type, fileUrl, submissions, feedback, resources } = req.body;
    const content = new Content({ courseId, title, type, fileUrl, submissions, feedback, resources });
    await content.save();
    res.status(201).json(content);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to get all content for a specific course
router.get('/courses/:courseId/content', async (req, res) => {
  try {
    const { courseId } = req.params;
    const content = await Content.find({ courseId });
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to update content
router.put('/courses/:courseId/content/:contentId', async (req, res) => {
  try {
    const { courseId, contentId } = req.params;
    const { title, type, fileUrl, submissions, feedback, resources } = req.body;
    const updatedContent = await Content.findByIdAndUpdate(contentId, 
      { title, type, fileUrl, submissions, feedback, resources }, 
      { new: true }
    );
    res.json(updatedContent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to delete content
router.delete('/courses/:courseId/content/:contentId', async (req, res) => {
  try {
    const { contentId } = req.params;
    await Content.findByIdAndDelete(contentId);
    res.json({ message: 'Content deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
