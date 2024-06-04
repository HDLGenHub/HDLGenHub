const express = require('express');
const router = express.Router();
const Code = require('../models/Code');

router.get('/', async(req, res)=>{
    console.log(req);
    try{
        const codes = await Code.find();
        res.json(codes);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async(req, res)=>{
    try{
        const code = await Code.findById(req.params.id);
        res.json(code);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post('/', async(req, res)=>{
    const { student, belong, type, code, filename } = req.body;
    const codefile = new Code(
        {
            student,
            belong,
            type,
            code,
            filename
        }
    )
    try{
        const newcode = await codefile.save();
        res.status(201).json(newcode);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.put('/:id', async(req, res)=>{
    try{
        const updateCode = await Code.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updateCode);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const response = await Code.findByIdAndDelete(req.params.id);
        res.status(201).json(response);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

module.exports = router;