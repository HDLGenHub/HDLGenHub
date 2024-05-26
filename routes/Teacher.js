const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');

router.get('/', async(req, res)=>{
    console.log(req);
    try{
        const teachers = await Teacher.find();
        res.json(teachers);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async(req, res)=>{
    try{
        const teacher = await Teacher.findById(req.params.id);
        res.json(teacher);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post('/', async(req, res)=>{
    const { name, email, registrationnumber, age, dp, gender, chatid, password } = req.body;
    const teacher = new Teacher(
        {
            name,
            email,
            registrationnumber,
            age,
            dp,
            gender,
            chatid,
            password
        }
    )
    try{
        const newteacher = await teacher.save();
        res.status(201).json(newteacher);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.put('/:id', async(req, res)=>{
    try{
        const updateTeacher = await Teacher.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updateTeacher);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const response = await Teacher.findByIdAndDelete(req.params.id);
        res.status(201).json(response);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

module.exports = router;