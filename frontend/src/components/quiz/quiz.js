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
        <div>
            {JSON.stringify(questions)}
        </div>
    );
}

export default Quiz;