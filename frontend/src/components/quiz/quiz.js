import { useEffect, useState } from 'react';
import './quiz.css';
import axios from 'axios';

const Quiz =(quizId)=>{
    const {quizid} = quizId;
    const [questions, setQuestions] = useState();

    const getQuestions=async()=>{
        const res = await axios.get(`http://localhost:4000/Question/quiz/${quizid}`);
        setQuestions(res.data);
    }

    useEffect(()=>{
        getQuestions();
    },[]);

    return(
        <div className='quiz-component-conatiner'>
            {questions?questions.map((question,i=0)=>(
                <div className='quiz-component-question'>
                    <h2>{++i}.{question.problem}</h2>
                    <h3>{question.image}</h3>
                    <h3>Correct Answer: {question.answer}</h3>
                    <h3>Wrong Answer: {question.wronganswer1}</h3>
                    <h3>Wrong Answer: {question.wronganswer2}</h3>
                    <h3>Wrong Answer: {question.wronganswer3}</h3>
                </div>
            )):null}
        </div>
    );
}

export default Quiz;