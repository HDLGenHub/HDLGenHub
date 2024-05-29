const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("Mongodb Connection success!");
})

const UserRouter = require("./routes/Users.js");
app.use("/User",UserRouter);
const CourseRouter = require("./routes/Courses.js");
app.use("/Course",CourseRouter);
const ActiveCourseRouter = require("./routes/ActiveCourses.js");
app.use("/ActiveCourse",ActiveCourseRouter);
const DocumentRouter = require("./routes/Documents.js");
app.use("/Document",DocumentRouter);
const ContentRouter = require("./routes/Contents.js");
app.use("/", ContentRouter);

app.listen(PORT,()=>{
    console.log(`Server is up and running on port number: ${PORT}`);
})