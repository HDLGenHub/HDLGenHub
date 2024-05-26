const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

router.get('/', async(req, res)=>{
    console.log(req);
    try{
        const documents = await Document.find();
        res.json(documents);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async(req, res)=>{
    try{
        const document = await Document.findById(req.params.id);
        res.json(document);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post('/', async(req, res)=>{
    const { name, description, url } = req.body;
    const document = new Document(
        {
            name , 
            description, 
            url
        }
    )
    try{
        const newdocument = await document.save();
        res.status(201).json(newdocument);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.put('/:id', async(req, res)=>{
    try{
        const updateDocument = await Document.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updateDocument);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const response = await Document.findByIdAndDelete(req.params.id);
        res.status(201).json(response);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

module.exports = router;