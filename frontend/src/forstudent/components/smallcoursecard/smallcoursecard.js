import { useEffect, useState } from 'react';
import { SERVER } from '../../../env.js';
import Coverimage from '../coverimage/coverimage';
import './smallcoursecard.css';
import { getCache } from '../../../caching/cache';
import Popup from 'reactjs-popup';
import axios from 'axios';

const Smallcoursecard=(Data)=>{
    const {data} = Data;
    const [student, setStudent] = useState();
    const [enrollmentkey, setEnrollmentkey] = useState();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    console.log("Last page: ", data);

    useEffect(()=>{
        setStudent(getCache('HDLGenHub_Student'));
    },[]);

    const handleEnroll=async()=>{
        //alert(JSON.stringify(student));
        //alert(JSON.stringify(data));
        const enrolledby = student._id;
        const courseid = data._id;
        const key = student._id+data._id;
        try{
            const res = await axios.post(`${SERVER}/EnrolledCourse/`,{
                enrolledby,
                courseid,
                key
            });
            //alert(JSON.stringify(res));
            window.location.reload();
        } catch{
            alert("Already Enrolled");
        }
    }

    return(
        <div className='student-smallcoursecardmaincontainer'>
            <Popup trigger = { 
                <button className='student-smallcoursecardcontainer'>
                    <div className="student-smallcoursecardpack">
                        <div className='student-smallcoursecardcover'>{data.coverimage?(<Coverimage Image={data.coverimage}/>):null}</div>
                        <div className='student-smallcoursecardtext'>
                            <h1>{data.name}</h1>
                            <h2>Course</h2>
                        </div>
                    </div>
                </button>
            } modal nested>
            {
                <div className='enroll-container'>
                    <div className='enroll-section'>
                        <label>{data.name}</label>
                        <h1 class="font-medium">Enrollmet key</h1>
                        <input type='text' onChange={(e)=>setEnrollmentkey(e.target.value)}/>
                        <button class='hover:scale-105' onClick={handleEnroll}>Enroll</button>
                    </div>
                </div>
            }
            </Popup>
        </div>
    );
}

export default Smallcoursecard;