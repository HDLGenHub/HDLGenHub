const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarksSchema = new Schema(
    {
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Video'||'Document'||'Quiz'||'Coding'
        },
        student: {
            type: Schema.Types.ObjectId,
            ref: 'Student'
        },
        grade: {
            type: Number,
            require: true
        }
    }
)

const Marks = mongoose.model("Marks", MarksSchema);
module.exports = Marks;