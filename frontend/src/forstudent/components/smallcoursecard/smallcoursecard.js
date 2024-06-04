import { useEffect, useState } from 'react';
import Coverimage from '../coverimage/coverimage';
import './smallcoursecard.css';
import { getCache } from '../../../caching/cache';
import Popup from 'reactjs-popup';
import axios from 'axios';

const Smallcoursecard=(Data)=>{
    const {data} = Data;
    const [student, setStudent] = useState();
    const [enrollmentkey, setEnrollmentkey] = useState();
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
            const res = await axios.post(`${process.env.SERVER}/EnrolledCourse/`,{
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
                <div className='enroll-conatiner'>
                    <div className='enroll-section'>
                        <label>Enter the enrollmet key</label>
                        <input type='text' onChange={(e)=>setEnrollmentkey(e.target.value)}/>
                        <button onClick={handleEnroll}>Enroll</button>
                    </div>
                </div>
            }
            </Popup>
        </div>
    );
}

export default Smallcoursecard;