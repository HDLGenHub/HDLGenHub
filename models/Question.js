const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema(
    {
        quizid: {
            type: Schema.Types.ObjectId,
            ref: "Quiz",
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
        answer: {
            type: String,
            require: true
        },
        wronganswer1: {
            type: String,
            require: true
        },
        wronganswer2: {
            type: String,
            require: true
        },
        wronganswer3: {
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