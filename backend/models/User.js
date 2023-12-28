const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type : String,
        require: true
    },
    email : {
        type : String,
        require: true
    },
    age : {
        type : Number,
        require : true
    },
    gender : {
        type : String,
        require : true
    },
    solid : {
        type : String,
        require : true
    },
    role : {
        type : String,
        require: true
    }
})

const User = mongoose.model("User",UserSchema);
module.exports = User;