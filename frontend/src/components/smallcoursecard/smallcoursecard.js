import { Link } from 'react-router-dom';
import Coursecomponent from '../coursecomponent/coursecomponent'
import Coverimage from '../coverimage/coverimage';
import './smallcoursecard.css';
import { useNavigate } from 'react-router-dom';

const Smallcoursecard =(Data)=>{
    const {data} = Data;
    const navigate = useNavigate();
    console.log("Courses: ",data);
    const handleSmallcourseclick =()=>{
        navigate(`/managecourse/${data._id}`);
    }
    return(
        <div className="smallcoursecardcontainer">
            <button onClick={handleSmallcourseclick}>
                <div className="smallcoursecardpack">
                    <h1>{data.name}</h1>
                    <h2>{((data.description).length<100)?data.description:null}</h2>
                    <div className='smallcoursecardcover'>{data.coverimage?(<Coverimage Image={data.coverimage}/>):null}</div>
                </div>
            </button>
        </div>
    );
}

export default Smallcoursecard;