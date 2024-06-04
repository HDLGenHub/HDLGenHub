const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodeSchema = new Schema(
    {
        student: {
            type: Schema.Types.ObjectId,
            ref: "Student",
            require: true
        },
        belong: {
            type: Schema.Types.ObjectId,
            ref: "Coding",
            require: true
        },
        type: {
            type: String,
            require: true
        },
        code: {
            type: String,
            require: true
        },
        filename: {
            type: String,
            require: true
        }
    }
)

const Code = mongoose.model("Code", CodeSchema);
module.exports = Code;