const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.get('/', async(req, res)=>{
    console.log(req);
    try{
        const students = await Student.find();
        res.json(students);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async(req, res)=>{
    try{
        const student = await Student.findById(req.params.id);
        res.json(student);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post('/', async(req, res)=>{
    const { name, email, registrationnumber, age, dp, gender, chatid, password } = req.body;
    const student = new Student(
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
        const newstudent = await student.save();
        res.status(201).json(newstudent);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.put('/:id', async(req, res)=>{
    try{
        const updateStudent = await Student.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updateStudent);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const response = await Student.findByIdAndDelete(req.params.id);
        res.status(201).json(response);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.post('/login', async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);
    try{
        const response = await Student.findOne({email});
        console.log(response);
        if(response){
            if(password === response.password){
                res.status(200).json({status: "success", response});
            }
            else{
                res.status(201).json({status: "incorrect password"});
            }
        } else{
            console.log("Pass");
            res.status(201).json({status: "user not found"});
        }
    } catch{
        res.status(200).json({status: "error with login"});
    }
});

module.exports = router;