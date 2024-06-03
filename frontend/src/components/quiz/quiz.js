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
                    <div className='quiz-component-question-number'>
                        <p>{++i}</p>
                    </div>
                    <div className='quiz-component-question-each'>
                        <h2>{question.problem}</h2>
                        <h3>{question.image}</h3>
                        <div className='quiz-component-answers'>
                            <h3>Correct Answer: {question.answer}</h3>
                            <h3>Wrong Answer: {question.wronganswer1}</h3>
                            <h3>Wrong Answer: {question.wronganswer2}</h3>
                            <h3>Wrong Answer: {question.wronganswer3}</h3>
                        </div>
                    </div>
                </div>
            )):null}
        </div>
    );
}

export default Quiz;