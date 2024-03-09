const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  filePath: {
    type: String,
    required: true
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

// Create the Document model using the schema
const Document = mongoose.model('Document', DocumentSchema);

// Export the Document model
module.exports = Document;
