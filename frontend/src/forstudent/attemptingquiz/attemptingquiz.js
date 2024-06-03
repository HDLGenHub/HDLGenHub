import { useParams } from 'react-router';
import './attemptingquiz.css';
import { useEffect } from 'react';
import { getCache } from '../../caching/cache';

const Attemptingquiz =()=>{
    const {quizid} = useParams();
    const student = getCache('HDLGenHub_Student');

    return(
        <div>
            {JSON.stringify(student)}
            {quizid}
        </div>
    );
}

export default Attemptingquiz;