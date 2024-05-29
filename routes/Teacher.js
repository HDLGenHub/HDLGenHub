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

router.post('/login', async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    try{
        const response = await Teacher.findOne({email});
        if(response){
            if(password === response.password){
                res.status(200).json({status: "success", response});
            }
            else{
                res.status(201).json({status: "incorrect password"});
            }
        } else{
            res.status(201).json({status: "user not found"});
        }
    } catch{
        res.status(200).json({status: "error with login"});
    }
});

module.exports = router;