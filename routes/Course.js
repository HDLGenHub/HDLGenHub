const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.get('/', async(req, res)=>{
    console.log(req);
    try{
        const courses = await Course.find();
        res.json(courses);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async(req, res)=>{
    try{
        const course = await Course.findById(req.params.id);
        res.json(course);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post('/', async(req, res)=>{
    const { name, description, coursecomponents, age, dp, gender, chatid, password } = req.body;
    const course = new Course(
        {
            name,
            description,
            coursecomponents,
            age,
            dp,
            gender,
            chatid,
            password
        }
    )
    try{
        const newcourse = await course.save();
        res.status(201).json(newcourse);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.put('/:id', async(req, res)=>{
    try{
        const updateCourse = await Course.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updateCourse);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const response = await Course.findByIdAndDelete(req.params.id);
        res.status(201).json(response);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

module.exports = router;