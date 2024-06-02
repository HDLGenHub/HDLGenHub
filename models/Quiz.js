const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        course: {
            type: Schema.Types.ObjectId,
            ref: 'Course'
        },
        starttime: {
            type: Number,
            require: false
        },
        timespan: {
            type: String,
            require: true
        }
    }
)

const Quiz = mongoose.model("Quiz", QuizSchema);
module.exports = Quiz;