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
    const [page, setPage] = useState(0);

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
        <div className='attemptingquiz-container'>
            <div className='attemptingquiz-pack'>
                {questions?(
                    <div className='attemptingquiz-nav'>
                        <div className='attemptingquiz-question'>
                            <Questioncard questiondata={questions[page]}/>
                            <p>Page {page+1}</p>
                        </div>
                        <div className='attemptingquiz-bottom'>
                            <button onClick={()=>setPage(page!==0?(page-1):0)}>Previous</button>
                            <button onClick={()=>setPage(questions.length-1>page?(page+1):page)}>Next</button>
                        </div>
                    </div>
                ):null}
            </div>
        </div>
    );
}

export default Attemptingquiz;