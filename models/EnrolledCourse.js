const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnrolledCourseSchema = new Schema(
    {
        key: {
            type: String,
            unique: true
        },
        enrolledby: {
            type: Schema.Types.ObjectId,
            ref: 'Student'
        },
        courseid: {
            type: Schema.Types.ObjectId,
            ref: 'Course'
        },
        date: {
            type: String,
            require: false
        }
    }
)

const EnrolledCourse = mongoose.model("EnrolledCourse", EnrolledCourseSchema);
module.exports = EnrolledCourse;