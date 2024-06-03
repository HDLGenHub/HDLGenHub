import { useEffect, useState } from 'react';
import './quizpage.css';
import { getCache } from '../../caching/cache';
import axios from 'axios';
import Quiz from '../../components/quiz/quiz';
import Popup from 'reactjs-popup';

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
                    <p>{++i}</p>
                    <div className='quizpage-quiz'>
                        <Popup trigger={<button>{quiz.name}</button>}
                        modal nested>{
                            <div className='quizpage-quizid'>
                                <p>Quiz Id: {quiz._id}</p>
                            </div>
                        }</Popup>
                        <h2>{quiz.description}</h2>
                        <div className='quizpage-quiz-question-container'>
                            <Quiz quizid = {quiz._id}/>
                        </div>
                    </div>
                </div>
            )):null}
        </div>
    )
}

export default Quizpage;