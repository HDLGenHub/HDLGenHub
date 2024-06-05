import { useEffect, useState } from 'react';
import { SERVER } from '../../env.js';
import './enrolledstudentshow.css';
import axios from 'axios';

const Enrolledstudentshow =(studentId)=>{
    const {studentid} = studentId;
    const [student, setStudent] = useState(); 
    useEffect(()=>{
        const fetchStudent =async()=>{
            const response = await axios.get(`${SERVER}/Student/${studentid}`);
            setStudent(response.data.name);
        }
        fetchStudent(studentid);
    },[]);
    console.log(student);
    return(
        <>
            {student?(student):null}
        </>
    );
}

export default Enrolledstudentshow;