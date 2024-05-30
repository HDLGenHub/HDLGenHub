import { useEffect, useState } from 'react';
import './enrolledstudentshow.css';
import axios from 'axios';

const Enrolledstudentshow =(studentId)=>{
    const {studentid} = studentId;
    const [student, setStudent] = useState(); 
    useEffect(()=>{
        const fetchStudent =async()=>{
            const response = await axios.get(`http://localhost:4000/Student/${studentid}`);
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