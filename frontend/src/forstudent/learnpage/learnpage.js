import Courses from "../components/courses/courses";
import Enrolledcourses from "../components/enrolledcourses/enrolledcourses";

const LearnPage = () => {
    return (
        <div class="m-20">
            
        <div>
            <h2>Enrolled Courses</h2>
            <Enrolledcourses />
        </div>
        <hr style={{ height: "2px", backgroundColor: "black" }}></hr>
        <div>
            <h2>All Courses</h2>
            <Courses />
        </div>
        </div>
    );
};

export default LearnPage;
