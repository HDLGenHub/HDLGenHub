// contentModel.js

const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  // For PDF, PPT, Excel
  fileUrl: String,
  // For submissions
  submissions: [String],
  // For feedback
  feedback: {
    type: String,
    default: ''
  },
  // For resources (e.g., YouTube links, other resource links, book names)
  resources: [{
    type: String,
    required: true
  }]
});

const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;
