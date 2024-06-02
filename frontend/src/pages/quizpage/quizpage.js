import { useEffect, useState } from 'react';
import './quizpage.css';
import { getCache } from '../../caching/cache';
import axios from 'axios';

const Quizpage=()=>{
    const [teacher ,setTeacher] = useState();
    const [quizes, setQuizes] = useState();
    //const [questions, setQuestions] = useState();

    const getQuizes =async()=>{
        console.log(teacher)
        const res = await axios.get(`http://localhost:4000/Quiz/teacher/${teacher._id}`);
        setQuizes(res);
        console.log(res);
    }

    useEffect(()=>{
        setTeacher(getCache('HDLGenHub_Teacher'));
        getQuizes();
    },[]);

    return(
        <div className='quizpage-container'>
            {quizes?quizes.data.map((quiz,i=0)=>(
                <div className='quizpage-quiz-container'>
                    <h1>{++i}.{quiz.name}</h1>
                </div>
            )):null}
        </div>
    )
}

export default Quizpage;