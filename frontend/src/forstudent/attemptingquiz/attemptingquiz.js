import { useParams } from 'react-router';
import { SERVER } from '../../env.js';
import './attemptingquiz.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getCache } from '../../caching/cache';
import Questioncard from '../components/questioncard/questioncard.js';

const Attemptingquiz =()=>{
    const {quizid} = useParams();
    const student = getCache('HDLGenHub_Student');
    const [questions, setQuestions] = useState();

    const getQuestions =async()=>{
        try{
            const res = await axios.get(`${SERVER}/Question/quiz/${quizid}`);
            setQuestions(res.data);
        } catch{
            console.log("Fetching question error");
        }
    }
    useEffect(()=>{
        getQuestions();
    });

    return(
        <div>
            <div>
                {questions?(
                    questions.map(question=>(
                        <Questioncard questiondata = {question}/>
                    ))
                ):null}
            </div>
        </div>
    );
}

export default Attemptingquiz;