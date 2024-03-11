const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instructor: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    materials: [{
        /*
        title: {
            type: String,
            required: true
        },
        type: {
            type: String,
            enum: ['video', 'document', 'quiz', 'assignment'],
            required: true
        },*/
        documentId: {
            type: Schema.Types.ObjectId,
            ref: 'Document',
            required: true
        }
    }],
    duration: {
        type: Number,
        required: true
    },
    enrollmentStatus: {
        type: String,
        enum: ['open', 'closed'],
        default: 'open'
    },
    enrolledUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;