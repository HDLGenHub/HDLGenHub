import { useState } from 'react';
import { SERVER } from '../../../env.js';
import './addingquiz.css';
import { useParams } from 'react-router';
import axios from 'axios';

const Addingquiz =()=>{
    const [quizid, setQuizid] = useState();
    const {id} = useParams();
    const [name, setName] = useState();
    const [description, setDescription] = useState();

    const postcomponent =async()=>{
        const courseid = id;
        const itemtype = 'quiz';
        const item = quizid;
        if(courseid && name && description && item && itemtype){
            const postedcoursecomponentresponse = await axios.post(`${SERVER}/Coursecomponent/`, {
                courseid,
                name,
                description,
                item,
                itemtype
            });
            console.log(postedcoursecomponentresponse);
            setName('')
            setQuizid('');
            setDescription('');
            window.location.reload();
        } else{
            alert("Missing details to add an item");
        }
    }

    const handlePostquiz=()=>{
        alert(quizid);
        postcomponent();
    }
    return(
        <div className="addingquizcontainer">
            <label>Enter the quiz id</label>
            <input type='text' onChange={(e)=>setQuizid(e.target.value)}/>
            <label>Enter the quiz title</label>
            <input type='text' onChange={(e)=>setName(e.target.value)}/>
            <label>Enter the quiz description</label>
            <input type='text' onChange={(e)=>setDescription(e.target.value)}/>
            <button onClick={handlePostquiz}>Add</button>
        </div>
    );
}

export default Addingquiz;