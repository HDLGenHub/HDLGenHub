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
    },[])
    return(
        <div className='quiz-component-conatiner'>
            {questions?questions.map((question,i=0)=>(
                <div className='quiz-component-question'>
                    <h2>{++i}.{question.problem}</h2>
                    <h2>{question.image}</h2>
                    <h2>{question.answer}</h2>
                    <h2>{question.wronganswer1}</h2>
                    <h2>{question.wronganswer2}</h2>
                    <h2>{question.wronganswer3}</h2>
                </div>
            )):null}
        </div>
    );
}

export default Quiz;