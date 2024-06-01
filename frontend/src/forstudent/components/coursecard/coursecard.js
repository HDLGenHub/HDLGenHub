import axios from "axios";
import { useEffect, useState } from "react";
import Coverimage from "../coverimage/coverimage";
import './coursecard.css';

const Coursecard=(Data)=>{
    const {data} = Data;
    const [course, setCourse] = useState();

    useEffect(()=>{
        const getCourse=async(courseid)=>{
            //alert(courseid);
           try{
               const res = await axios.get(`http://localhost:4000/Course/${courseid}`);
               setCourse(res.data);
               //alert(JSON.stringify(res));
           } catch{
               console.log('Error fetching courses');
           }
        }
        getCourse(data);
    },[])
    return(
        <div className="student-coursecardmaincontainer">
            {course?(
                <div className="student-coursecardcontainer">
                    <div className='student-coursecardcover'>{course.coverimage?(<Coverimage Image={course.coverimage}/>):null}</div>
                    <div className='student-coursecardtext'>
                        <h1>{course.name}</h1>
                        <h2>Enrolled Course</h2>
                    </div>
                </div>
            ):null}
        </div>
    )
}

export default Coursecard;