const express = require('express');
const router = express.Router();
const Marks = require('../models/Marks');

router.get('/', async(req, res)=>{
    console.log(req);
    try{
        const markss = await Marks.find();
        res.json(markss);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async(req, res)=>{
    try{
        const marks = await Marks.findById(req.params.id);
        res.json(marks);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post('/', async(req, res)=>{
    const { item, student, grade } = req.body;
    const marks = new Marks(
        {
            item , 
            student, 
            grade, 
        }
    )
    try{
        const newmarks = await marks.save();
        res.status(201).json(newmarks);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.put('/:id', async(req, res)=>{
    try{
        const updateMarks = await Marks.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updateMarks);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const response = await Marks.findByIdAndDelete(req.params.id);
        res.status(201).json(response);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

module.exports = router;