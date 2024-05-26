const express = require('express');
const router = express.Router();
const Coding = require('../models/Coding');

router.get('/', async(req, res)=>{
    console.log(req);
    try{
        const codings = await Coding.find();
        res.json(codings);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async(req, res)=>{
    try{
        const coding = await Coding.findById(req.params.id);
        res.json(coding);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post('/', async(req, res)=>{
    const { name, description } = req.body;
    const coding = new Coding(
        {
            name ,
            description
        }
    )
    try{
        const newcoding = await coding.save();
        res.status(201).json(newcoding);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.put('/:id', async(req, res)=>{
    try{
        const updateCoding = await Coding.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updateCoding);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const response = await Coding.findByIdAndDelete(req.params.id);
        res.status(201).json(response);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

module.exports = router;