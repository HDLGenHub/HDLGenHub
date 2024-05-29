import { useParams } from 'react-router';
import Coursecomponent from '../coursecomponent/coursecomponent'
import Coverimage from '../coverimage/coverimage';
import './coursecard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Coursecard =()=>{
    const {id} = useParams();
    const [data, setData] = useState();
    useEffect(()=>{
        const fetchData=async()=>{
            const response = await axios.get(`http://localhost:4000/Course/${id}`);
            setData(response);
        }
        fetchData();
    },[])
    console.log("Courses: ",id);

    if(data){
        return(
            <div className="coursecardcontainer">
                <div className="coursecardpack">
                    <h1>{data.name}</h1>
                    <h2>{data.description}</h2>
                    <div className='coursecardcover'>{data.coverimage?(<Coverimage Image={data.coverimage}/>):null}</div>
                    <div className="coursecard-coursecomponent">
                        {data.coursecomponents?(data.coursecomponents.map((coursecomponentid)=>(
                            <div key={coursecomponentid}>{<Coursecomponent id={coursecomponentid}/>}</div>
                        ))):null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Coursecard;