import { useEffect, useState } from "react";
import { getCache } from "../../../caching/cache";
import axios from "axios";
import Coverimage from "../coverimage/coverimage";
import './enrolledcourses.css';
import Coursecard from "../coursecard/coursecard";

const Enrolledcourses=()=>{
    const [student, setStudent] = useState();
    const [enrolledcourses, setEnrolledCourses] = useState();
    const [course, setCourse] = useState();

    useEffect(()=>{
        const getEnrolled=async()=>{
            console.log("Start fetching...");
            const id = getCache('HDLGenHub_Student')._id
            const res = await axios.get(`${process.env.SERVER}/EnrolledCourse/student/${id}`);
            setEnrolledCourses(res.data);
        }
        setStudent(getCache('HDLGenHub_Student'));
        getEnrolled();
        console.log("Fetching...");
    },[])

    //alert(JSON.stringify(courses));
    return(
        <div className="student-coursecardset">{enrolledcourses?(enrolledcourses.map(enrolledcourse=>(
            <div key={enrolledcourse._id} className="student-coursecardpack">
                <Coursecard data={enrolledcourse.courseid}/>
            </div>
        ))):<h1>You do not have courses</h1>}
        </div>
    )
}

export default Enrolledcourses;