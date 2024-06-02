const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema(
    {
        quiz: {
            type: Schema.Types.ObjectId,
            ref: "Quiz",
            require: true
        },
        teacher: {
            type: Schema.Types.ObjectId,
            ref: "Teacher",
            require: true
        },
        problem: {
            type: String,
            require: true
        },
        image: {
            type: String,
            require: true
        },
        answers: {
            type: String,
            require: true
        },
        wronganswers1: {
            type: String,
            require: true
        },
        wronganswers2: {
            type: String,
            require: true
        },
        wronganswers3: {
            type: String,
            require: true
        },
        marks: {
            type: Number,
            require: true
        }
    }
)

const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;