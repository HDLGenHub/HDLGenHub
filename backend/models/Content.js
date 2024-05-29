const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Course'
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  fileUrl: {
    type: String,
    required: true
  },
  submissions: {
    type: [String],
    default: []
  },
  feedback: {
    type: [String],
    default: []
  },
  resources: [{
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }]
});

module.exports = mongoose.model('Content', contentSchema);
