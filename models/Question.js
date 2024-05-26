const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema(
    {
        problem: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        },
        answers: [{
            type: String,
            require: true
        }],
        marks: [{
            type: Number,
            require: true
        }]
    }
)

const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;