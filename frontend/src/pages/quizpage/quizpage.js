import { useEffect, useState } from 'react';
import './quizpage.css';
import { getCache } from '../../caching/cache';
import axios from 'axios';
import Quiz from '../../components/quiz/quiz';

const Quizpage=()=>{
    const [teacher ,setTeacher] = useState();
    const [quizes, setQuizes] = useState();

    const getQuizes =async()=>{
        console.log(teacher)
        const res = await axios.get(`http://localhost:4000/Quiz/teacher/${getCache('HDLGenHub_Teacher')._id}`);
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
                    <h1>{quiz.description}</h1>
                    <Quiz quizid = {quiz._id}/>
                </div>
            )):null}
        </div>
    )
}

export default Quizpage;