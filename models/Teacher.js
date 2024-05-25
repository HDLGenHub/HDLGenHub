const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
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
        registrationnumber: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        }
    }
)

const Teacher = mongoose.model("Teacher", TeacherSchema);
module.exports = Teacher;