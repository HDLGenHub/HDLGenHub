import { useParams } from 'react-router';
import { SERVER } from '../../env.js';
import './attemptingquiz.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getCache, setCache } from '../../caching/cache';
import Questioncard from '../components/questioncard/questioncard.js';
import 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'

const Attemptingquiz =()=>{
    const {quizid} = useParams();
    const student = getCache('HDLGenHub_Student');
    const [courseid, setCourseid] = useState();
    const [questions, setQuestions] = useState();
    const [page, setPage] = useState(0);
    const [coursecomponent, setCoursecomponent] = useState();

    const fetchCourse=async()=>{
        const res = await axios.get(`${SERVER}/Coursecomponent/item/${quizid}`);
        setCoursecomponent(res.data);
        alert(JSON.stringify(res.data));
    }
    const postAttemptedquiz=async()=>{
        alert(courseid);
        alert(quizid);
        alert(getCache('HDLGenHub_Student')._id);
        const res = await axios.post(`${SERVER}/AttemptedQuiz/`, {
            courseid:courseid,
            quizid:quizid,
            studentid:getCache('HDLGenHub_Student')._id
        });
        alert(JSON.stringify(res));
        setCache('HDLGenHub_Attemptedquiz', JSON.stringify(res.data));
    }

    const getQuestions =async()=>{
        try{
            const res = await axios.get(`${SERVER}/Question/quiz/${quizid}`);
            setQuestions(res.data);
        } catch{
            console.log("Fetching question error");
        }
    }
    useEffect(()=>{
    setCourseid(getCache('HDLGenHub_Loggedcourse')._id);
        getQuestions();
        fetchCourse();
        postAttemptedquiz();
    },[]);

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
                            <button onClick={()=>setPage(page!==0?(page-1):0)}>
                                <ion-icon name="arrow-back-circle-sharp"></ion-icon>
                            </button>
                            <button onClick={()=>setPage(questions.length-1>page?(page+1):page)}>
                                <ion-icon name="arrow-forward-circle-sharp"></ion-icon>
                            </button>
                        </div>
                    </div>
                ):null}
            </div>
        </div>
    );
}

export default Attemptingquiz;