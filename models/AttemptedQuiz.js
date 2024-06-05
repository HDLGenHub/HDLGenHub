const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttemptedQuizSchema = new Schema(
    {
        courseid: {
            type: Schema.Types.ObjectId,
            ref: "Course"
        },
        quizid: {
            type: Schema.Types.ObjectId,
            ref: "Quiz"
        },
        questionid: {
            type: Schema.Types.ObjectId,
            ref: "Question"
        },
        studentid: {
            type: Schema.Types.ObjectId,
            ref: "Student"
        },
        answer: {
            type: String,
            require: false
        },
        assignedmarks: {
            type: String,
            require: true
        },
        marksgot: {
            type: String,
            require: false
        },
        iscompleted: {
            type: Boolean,
            require: true,
            default: false
        }
    }
)

const AttemptedQuiz = mongoose.model("AttemptedQuiz", AttemptedQuizSchema);
module.exports = AttemptedQuiz;