import axios from "axios";
import { useEffect, useState } from "react";
import Coverimage from "../coverimage/coverimage";
import './coursecard.css';
import { useNavigate } from "react-router";

const Coursecard=(Data)=>{
    const {data} = Data;
    const [course, setCourse] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        const getCourse=async(courseid)=>{
            //alert(courseid);
           try{
               const res = await axios.get(`${process.env.SERVER}/Course/${courseid}`);
               setCourse(res.data);
               //alert(JSON.stringify(res));
           } catch{
               console.log('Error fetching courses');
           }
        }
        getCourse(data);
    },[])

    const handleOpencourse=()=>{
        const courseid = data;
        navigate(`/coursepage/${courseid}`);
    }

    return(
        <div className="student-coursecardmaincontainer">
            {course?(
                <button onClick={handleOpencourse} className="student-coursecardcontainer">
                    <div className='student-coursecardcover'>{course.coverimage?(<Coverimage Image={course.coverimage}/>):null}</div>
                    <div className='student-coursecardtext'>
                        <h1>{course.name}</h1>
                        <h2>Enrolled Course</h2>
                    </div>
                </button>
            ):null}
        </div>
    )
}

export default Coursecard;