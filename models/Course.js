const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        coursecomponents: [{
            type: Schema.Types.ObjectId,
            ref: 'CourseComponent'
        }],
        age: {
            type: Number,
            require: false
        },
        dp: {
            type: String,
            require: true
        },
        gender: {
            type: String,
            require: true
        },
        chatid: {
            type: Schema.Types.ObjectId,
            require: true
        },
        password: {
            type: String,
            require: true
        }
    }
)

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;