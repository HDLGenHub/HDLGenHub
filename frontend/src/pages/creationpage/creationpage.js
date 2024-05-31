import { useEffect, useState } from 'react';
import './creationpage.css';
import { getCache } from '../../caching/cache';
import axios from 'axios';

const CreationPage =()=>{
    const [teacher, setTeacher] = useState();
    const [name, setName] = useState();
    const [coverimage, setCoverimage] = useState();
    const [description, setDescription] = useState();
    const [createdby, setCreatedby] = useState();

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

    return(
        <div className='creationpagecontainer'>
            <div className='creationcoursecontainer'>
                <div className='creationcourseform'>
                    <label>Course Heading</label>
                    <input alt='name' value={name} onChange={(e)=>setName(e.target.value)} type='text'></input>
                    <label>Cover Image Url</label>
                    <input alt='coverimage' value={coverimage} onChange={(e)=>setCoverimage(e.target.value)} type='text'></input>
                    <label >Course Description</label>
                    <input alt='description' value={description} onChange={(e)=>setDescription(e.target.value)} className='creationcourseform-description' type='text'></input>
                    <button onClick={postCourse}>Create Course</button>
                </div>
            </div>
            <div className='creationquizcontainer'>
                <div className='creationquizform'>
                    <h1>Currently Quizes Are Unavailable!</h1>
                </div>
            </div>
        </div>
    )
}

export default CreationPage;