const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CodingSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        }
    }
)

const Coding = mongoose.model("Coding", CodingSchema);
module.exports = Coding;