import Courses from "../components/courses/courses";
import Enrolledcourses from "../components/enrolledcourses/enrolledcourses";

const LearnPage = () => {
    return (
        <div class="m-20">
        <div>
            <h2 class="text-2xl ml-5">Enrolled Courses</h2>
            <Enrolledcourses />
        </div>
        <hr/>
        <div class="text-2xl ml-5 mt-10">
            <h2>All Courses</h2>
            <Courses />
        </div>
        </div>
    );
};

export default LearnPage;
