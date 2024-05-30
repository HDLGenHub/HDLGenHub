const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        coverimage: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        createdby: {
            type: Schema.Types.ObjectId,
            ref: 'Teacher'
        }
    }
)

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;