import Courses from "../components/courses/courses";
import Enrolledcourses from "../components/enrolledcourses/enrolledcourses";

const LearnPage =()=>{

    return(
        <div>
            <div>
                <Enrolledcourses/>
            </div>
            <hr style={{height:'2px', backgroundColor:'black'}}></hr>
            <div>
                <Courses/>
            </div>
        </div>
    );
}

export default LearnPage;