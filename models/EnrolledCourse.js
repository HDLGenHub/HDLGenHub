const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EnrolledCourseSchema = new Schema(
    {
        enrolledby: {
            type: Schema.Types.ObjectId,
            ref: 'Student'
        },
        courseid: {
            type: Schema.Types.ObjectId,
            ref: 'Teacher'
        },
        Date: {
            type: String,
            require: false
        }
    }
)

const EnrolledCourse = mongoose.model("EnrolledCourse", EnrolledCourseSchema);
module.exports = EnrolledCourse;