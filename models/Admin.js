const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        encryptionkey: {
            type: String,
            require: true
        },
        about: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        }
    }
)

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;