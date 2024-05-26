const express = require('express');
const router = express.Router.Router();
const Video = require('../models/Video');

router.get('/', async(req, res)=>{
    console.log(req);
    try{
        const videos = await Video.find();
        res.json(videos);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async(req, res)=>{
    try{
        const video = await Video.findById(req.params.id);
        res.json(video);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post('/', async(req, res)=>{
    const { name, description, url } = req.body;
    const video = new Video(
        {
            name , 
            description, 
            url
        }
    )
    try{
        const newvideo = await video.save();
        res.status(201).json(newvideo);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.put('/:id', async(req, res)=>{
    try{
        const updateVideo = await Video.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updateVideo);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const response = await Video.findByIdAndDelete(req.params.id);
        res.status(201).json(response);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

module.exports = router;