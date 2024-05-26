const express = require('express');
const router = express.Router.Router();
const Quiz = require('../models/Quiz');

router.get('/', async(req, res)=>{
    console.log(req);
    try{
        const quizs = await Quiz.find();
        res.json(quizs);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async(req, res)=>{
    try{
        const quiz = await Quiz.findById(req.params.id);
        res.json(quiz);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post('/', async(req, res)=>{
    const { name, description, question, starttime, timespan } = req.body;
    const quiz = new Quiz(
        {
            name,
            description,
            question,
            starttime,
            timespan
        }
    )
    try{
        const newquiz = await quiz.save();
        res.status(201).json(newquiz);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.put('/:id', async(req, res)=>{
    try{
        const updateQuiz = await Quiz.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updateQuiz);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const response = await Quiz.findByIdAndDelete(req.params.id);
        res.status(201).json(response);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

module.exports = router;