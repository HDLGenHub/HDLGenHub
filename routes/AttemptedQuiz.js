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