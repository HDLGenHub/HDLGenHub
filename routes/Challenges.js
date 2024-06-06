const express = require('express');
const router = express.Router();
const Challenges = require('../models/Challenges');

router.get('/', async(req, res)=>{
    console.log(req);
    try{
        const challengess = await Challenges.find();
        res.json(challengess);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async(req, res)=>{
    try{
        const challenges = await Challenges.findById(req.params.id);
        res.json(challenges);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post('/', async(req, res)=>{
    const { name, challenges } = req.body;
    const challenges = new Challenges(
        {
            name , 
            challenges
        }
    )
    try{
        const newchallenges = await challenges.save();
        res.status(201).json(newchallenges);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.put('/:id', async(req, res)=>{
    try{
        const updateChallenges = await Challenges.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updateChallenges);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const response = await Challenges.findByIdAndDelete(req.params.id);
        res.status(201).json(response);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

module.exports = router;