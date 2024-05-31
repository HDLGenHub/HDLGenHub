import Coverimage from '../coverimage/coverimage';
import './smallcoursecard.css';

const Smallcoursecard=(Data)=>{
    const {data} = Data;

    return(
        <div className='student-smallcoursecardcontainer'>
            <div className="student-smallcoursecardpack">
                <div className='student-smallcoursecardcover'>{data.coverimage?(<Coverimage Image={data.coverimage}/>):null}</div>
                <div className='student-smallcoursecardtext'>
                    <h1>{data.name}</h1>
                    <h2>Course</h2>
                </div>
            </div>
        </div>
    );
}

export default Smallcoursecard;