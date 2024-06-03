const express = require("express");
const router = express.Router();
const AttemptedQuiz = require("../models/AttemptedQuiz");

router.get('/', async(req, res)=>{
    try{
        const attemptedQuizes = await AttemptedQuiz.find();
        res.json(attemptedQuizes);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.get('/:id', async(req, res)=>{
    try{
        const attemptedQuiz = await AttemptedQuiz.findById(req.params.id);
        res.json(attemptedQuiz);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

router.post('/', async(req, res)=>{
    const { courseid, quizid, questionid, answer, assignedmarks, marksgot } = req.body;
    const attemptedQuiz = new AttemptedQuiz(
        {
            courseid,
            quizid,
            questionid,
            answer,
            assignedmarks,
            marksgot
        }
    )
    try{
        const newattemptedQuiz= await attemptedQuiz.save();
        res.status(201).json(newattemptedQuiz);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.put('/:id', async(req, res)=>{
    try{
        const updateAttemptedQuiz = await AttemptedQuiz.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updateAttemptedQuiz);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const response = await AttemptedQuiz.findByIdAndDelete(req.params.id);
        res.status(201).json(response);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});

module.exports = router;
