import { useParams } from "react-router";
import './deletecourse.css';
import { useState } from "react";

const Deletecourse=()=>{
    const {courseid} = useParams();
    const [isopen, setIsopen] = useState(1);

    const handleDelete=()=>{

    }
    const closeWindow=()=>{
        setIsopen(0);
    }
    if(isopen){
        return(
            <div className="deletecoursecontainer">
                <h1>Delete?</h1>
                <div className="deletecourse-button">
                    <button onClick={handleDelete} className="deletecourse-button1">Yes</button>
                    <button onClick={closeWindow} className="deletecourse-button2">No</button>
                </div>
            </div>
        );
    }
}

export default Deletecourse;