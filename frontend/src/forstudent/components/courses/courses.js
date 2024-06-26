import { useEffect, useState } from "react";
import { SERVER } from '../../../env.js';
import { getCache } from "../../../caching/cache";
import './courses.css';
import axios from "axios";
import Smallcoursecard from "../smallcoursecard/smallcoursecard";

const Courses=()=>{
    const [courses, setCourses] = useState();

    useEffect(()=>{
        const getcourses=async()=>{
            const res = await axios.get(`${SERVER}/Course/`);
            setCourses(res.data);
            console.log(res.data);
        }
        getcourses();
    },[]);
    return(
        <div className="coursecardcontainer">
            {courses?(courses.map((course)=>(
                <div className="coursecard-each"><Smallcoursecard data={course}/></div>
            ))):null}
        </div>
    );
}

export default Courses;