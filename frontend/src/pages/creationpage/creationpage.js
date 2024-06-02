import { useEffect, useState } from 'react';
import './creationpage.css';
import { getCache } from '../../caching/cache';
import axios from 'axios';
import Popup from 'reactjs-popup';

const CreationPage =()=>{
    const [teacher, setTeacher] = useState();
    const [name, setName] = useState();
    const [coverimage, setCoverimage] = useState();
    const [description, setDescription] = useState();
    const [createdby, setCreatedby] = useState();
    const [quizheading, setQuizheading] = useState();
    const [quizdescription, setQuizdescription] = useState();
    const [newquestion, setNewquestion] = useState();
    const [question, setQuestion] = useState();
    const [questionimage, setQuestionimage] = useState();
    const [correctanswer, setCorrestanswer] = useState();
    const [wronganswer1, setWronganswer1] = useState();
    const [wronganswer2, setWronganswer2] = useState();
    const [wronganswer3, setWronganswer3] = useState();

    useEffect(()=>{
        setTeacher(getCache('HDLGenHub_Teacher'));
        setCreatedby(getCache('HDLGenHub_Teacher')._id);
    },[])

    const postCourse=async()=>{
        if(name && coverimage && description){
            const res = await axios.post(`http://localhost:4000/Course/`, {
                name,
                coverimage,
                description,
                createdby
            })
            console.log(res);
            alert(name,' is created');
            setName('');
            setCoverimage('');
            setDescription('');
        }
    }

    const handleAddquestion=()=>{
        alert(quizheading);
        alert(quizdescription);
        alert(question);
        alert(questionimage);
        alert(correctanswer);
        alert(wronganswer1);
        alert(wronganswer2);
        alert(wronganswer3);
    }

    return(
        <div className='creationpagecontainer'>
            <div className='creationcoursecontainer'>
                <h1>Course Creation</h1>
                <div className='creationcourseform'>
                    <label>Course Heading</label>
                    <input alt='name' value={name} onChange={(e)=>setQuizheading(e.target.value)} type='text'></input>
                    <label>Cover Image Url</label>
                    <input alt='coverimage' value={coverimage} onChange={(e)=>setCoverimage(e.target.value)} type='text'></input>
                    <label >Course Description</label>
                    <input alt='description' value={description} onChange={(e)=>setDescription(e.target.value)} className='creationcourseform-description' type='text'></input>
                    <button onClick={postCourse}>Create Course</button>
                </div>
            </div>
            <div className='creationquizcontainer'>
                <h1>Quiz Creation</h1>
                <div className='creationquizform'>
                    <label>Quiz Heading</label>
                    <input alt='quizheading' value={quizheading} onChange={(e)=>setQuizheading(e.target.value)} type='text'></input>
                    <label>Quiz Description</label>     
                    <input alt='quizdescription' value={quizdescription} onChange={(e)=>setQuizdescription(e.target.value)} type='text'></input>
                    <Popup className='quizcreation-button' trigger={
                        <button>
                            Add a question
                        </button>
                    } modal nested>{
                        <div className='quizcreation-popup'>
                            <div className='quizcreation-popup-form'>
                                <label>Question</label>
                                <input onChange={(e)=>setQuestion(e.target.value)} type='text'></input>
                                <label>Question Image</label>
                                <input onChange={(e)=>setQuestionimage(e.target.value)} type='text'></input>
                                <label>Correct Answer</label>
                                <input onChange={(e)=>setCorrestanswer(e.target.value)} type='text'></input>
                                <label>Wrong Answer 1</label>
                                <input onChange={(e)=>setWronganswer1(e.target.value)} type='text'></input>
                                <label>Wrong Answe 2r</label>
                                <input onChange={(e)=>setWronganswer2(e.target.value)} type='text'></input>
                                <label>Wrong Answer 3</label>
                                <input onChange={(e)=>setWronganswer3(e.target.value)} type='text'></input>
                                <button onClick={handleAddquestion}>Add</button>
                            </div>
                        </div>
                    }</Popup>        
                </div>
            </div>
        </div>
    )
}

export default CreationPage;