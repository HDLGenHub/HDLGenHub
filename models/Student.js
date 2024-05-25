const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        registrationnumber: {
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
        password: {
            type: String,
            require: true
        }
    }
)

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;