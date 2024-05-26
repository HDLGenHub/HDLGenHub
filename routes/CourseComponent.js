const express = require('express');
const router = express.Router();
const CourseComponent = require('../models/CourseComponent');

router.get('/', async(req, res)=>{
    console.log(req);
    try{
        const coursecomponents = await CourseComponent.find();
        res.json(coursecomponents);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async(req, res)=>{
    try{
        const coursecomponent = await CourseComponent.findById(req.params.id);
        res.json(coursecomponent);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post('/', async(req, res)=>{
    const { name, description, item } = req.body;
    const coursecomponent = new CourseComponent(
        {
            name , 
            description, 
            item
        }
    )
    try{
        const newcoursecomponent = await coursecomponent.save();
        res.status(201).json(newcoursecomponent);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.put('/:id', async(req, res)=>{
    try{
        const updateCourseComponent = await CourseComponent.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updateCourseComponent);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const response = await CourseComponent.findByIdAndDelete(req.params.id);
        res.status(201).json(response);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

module.exports = router;