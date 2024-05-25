const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DocumentSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        url: {
            type: Number,
            require: false
        }
    }
)

const Document = mongoose.model("Document", DocumentSchema);
module.exports = Document;