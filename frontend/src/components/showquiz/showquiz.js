import './showquiz.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Showquiz=(Id)=>{
    const {id} = Id;
    const [quiz, setQuiz] = useState();

    useEffect(()=>{
        const getQuiz=async()=>{
            const res = await axios.get(`http://localhost:4000/Quiz/${id}`);
            setQuiz(res);
        }
        getQuiz();
    },[]);

    if(quiz){
        return(
            <div>
                {JSON.stringify(quiz)}
            </div>
        );
    }
}
export default Showquiz;