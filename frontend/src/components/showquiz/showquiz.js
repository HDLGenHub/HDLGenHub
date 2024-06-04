import './showquiz.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Showquiz=(Id)=>{
    const {id} = Id;
    const [quiz, setQuiz] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        const getQuiz=async()=>{
            const res = await axios.get(`http://localhost:4000/Quiz/${id}`);
            setQuiz(res);
        }
        getQuiz();
    },[]);

    const handleAttempquiz=()=>{
        navigate(`/attemptingquiz/${id}`);
    }

    if(quiz){
        return(
            <div className='quizcomponent-conatainer'>
                <h1>{quiz.data.name}</h1>
                <p>{quiz.data.description}</p>
                <button onClick={handleAttempquiz}>Attempt</button>
            </div>
        );
    }
}
export default Showquiz;