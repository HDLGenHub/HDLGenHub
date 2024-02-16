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
    },
    password : {
        type : String,
        require : true
    },
    dpUrl: {
        type: String,
        default: "",
    },
    enrolledCourses: [{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }]
})

const User = mongoose.model("User",UserSchema);
module.exports = User;