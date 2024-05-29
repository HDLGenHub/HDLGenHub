import { useEffect, useState } from 'react';
import './coursemanagebar.css';
import axios from 'axios';
import { useParams } from 'react-router';

const Coursemanagebar =()=>{
    const {id} = useParams();
    const [Enrolls, setEnrolls] = useState();
    const [student, setStudent] = useState([]);
    console.log("courseId", id);
    useEffect(()=>{
        const fetchEnrollment =async()=>{
            const response = await axios.get(`http://localhost:4000/EnrolledCourse/enrolledcourses/${id}`);
            setEnrolls(response.data);
        }
        fetchEnrollment();
    },[])

    /*
    const fetchStudent =(studentid)=>{
        const response = axios.get(`http://localhost:4000/Student/${studentid}`);
        setStudent(response.data.name);
    }
    const showStudent =(studentid)=>{
        fetchStudent(studentid);
        return student;
    }*/

    return(
        <div className="coursemanagebarconatiner">
            <div className='coursemanagebar-item'>
                <button>Save Course</button>
                <button>Add New Item</button>
                <button>Remove Item</button>
                <button>Delete Course</button>
            </div>
            <div className='coursemanagebar-students'>
                <div>
                    <h1>Enrolled Students</h1>
                    <h2>{Enrolls?(Object.keys(Enrolls).length):0}</h2>

                    <div className='coursemanagebar-students-each'>
                        {Enrolls?(Enrolls.map((enroll)=>(
                            <div key={enroll}>{enroll.enrolledby}</div>
                        ))):null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Coursemanagebar;