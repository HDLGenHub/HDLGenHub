const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
    fileUrl: { type: String },
    submissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Submission' }],
    feedback: { type: String },
    resources: [{ type: String }]
});

module.exports = mongoose.model('Content', contentSchema);
