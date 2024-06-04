import { useParams } from 'react-router';
import Coursecomponent from '../coursecomponent/coursecomponent'
import Coverimage from '../coverimage/coverimage';
import './coursecard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Coursecard =()=>{
    const {id} = useParams();
    const [data, setData] = useState();
    const [coursecomponents, setCoursecomponents] = useState();
    useEffect(()=>{
        const fetchCoursecomponents=async(data)=>{
            console.log("under fetching course components: ", data);
            const res = await axios.get(`${process.env.SERVER}/Coursecomponent/course/${id}`);
            setCoursecomponents(res.data);
        }
        const fetchData=async()=>{
            const response = await axios.get(`${process.env.SERVER}/Course/${id}`);
            setData(response.data);
        }
        fetchData();
        fetchCoursecomponents(data);
    },[])
    console.log("Courses: ",id);
    console.log("Data", data);
    console.log("Course components: ", coursecomponents)
    if(data){
        return(
            <div className="coursecardcontainer">
                <div className="coursecardpack">
                    <div className='coursecardpack-top'>
                        <h1>{data.name}</h1>
                        <h2>{data.description}</h2>
                        <div className='coursecardcover'>{data.coverimage?(<Coverimage Image={data.coverimage}/>):null}</div>
                    </div>
                    <div className="coursecard-coursecomponent">
                        {coursecomponents?(coursecomponents.map((coursecomponentid)=>(
                            <div className='coursecard-coursecomponent-each' key={coursecomponentid._id}>{<Coursecomponent id={coursecomponentid._id}/>}</div>
                        ))):null}
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div>Hi</div>
        );
    }
}

export default Coursecard;