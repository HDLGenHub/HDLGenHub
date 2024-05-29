const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseComponentSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Video'||'Document'||'Quiz'||'Coding'
        },
        itemtype: {
             type: String,
             require: true
        }
    }
)

const CourseComponent = mongoose.model("CourseComponent", CourseComponentSchema);
module.exports = CourseComponent;