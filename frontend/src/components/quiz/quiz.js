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
                            <h3>Correct Answer</h3>
                            <h4>{question.answer}</h4>
                            <h3>Wrong Answer</h3>
                            <h4>{question.wronganswer1}</h4>
                            <h3>Wrong Answer</h3>
                            <h4>{question.wronganswer2}</h4>
                            <h3>Wrong Answer</h3>
                            <h4>{question.wronganswer3}</h4>
                        </div>
                    </div>
                </div>
            )):null}
        </div>
    );
}

export default Quiz;