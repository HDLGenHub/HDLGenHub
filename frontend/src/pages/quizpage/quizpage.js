import { useEffect, useState } from 'react';
import './quizpage.css';
import { getCache } from '../../caching/cache';
import axios from 'axios';

const Quizpage=()=>{
    const [teacher ,setTeacher] = useState();
    const [quizes, setQuizes] = useState();

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
        <div>
            {JSON.stringify(quizes)}
        </div>
    )
}

export default Quizpage;