const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Document = require('../models/Document');

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); // Generate unique filename
    const extension = path.extname(file.originalname); // Extract file extension
    cb(null, uniqueSuffix + extension); // Set filename
  }
});

// Multer upload configuration
const upload = multer({ storage: storage });

// Route to upload a document
router.post('/upload', upload.single('document'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    const filePath = req.file.path; // Save file path to database
    const document = new Document({ filePath });
    await document.save();
    res.status(201).json({ message: 'Document uploaded', document });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error uploading document' });
  }
});

// Route to get all documents
router.get('/', async (req, res) => {
  try {
    const documents = await Document.find();
    res.json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching documents' });
  }
});

// Route to get a single document by ID
router.get('/:id', async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.json(document);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching document' });
  }
});

// Route to delete a document by ID
router.delete('/:id', async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    fs.unlinkSync(document.filePath); // Delete file from file system
    await document.remove(); // Delete document from database
    res.json({ message: 'Document deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting document' });
  }
});

module.exports = router;
