import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './UsersManage.css'; // Ensure this path is correct

const UsersManage = () => {
    const [teachers, setTeachers] = useState([]);
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [teachersResponse, studentsResponse] = await Promise.all([
                    axios.get('http://localhost:4000/Teacher'),
                    axios.get('http://localhost:4000/Student')
                ]);

                setTeachers(teachersResponse.data);
                setStudents(studentsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
                console.log("ef3f3rf");
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="usersContainer">
            <h1>Users</h1>
            <div className="teachersSection">
                <h2>Teachers</h2>
                {teachers.length > 0 ? (
                    <ul>
                        {teachers.map((teacher) => (
                            <li key={teacher.id}>
                                <Link to={`/teacher/userprofile/${teacher._id}`}>{teacher.name}</Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No teachers found.</p>
                )}
            </div>
            <div className="studentsSection">
                <h2>Students</h2>
                {students.length > 0 ? (
                    <ul>
                        {students.map((student) => (
                            <li key={student.id}>
                                <Link to={`/student/userprofile/${student._id}`}>{student.name}</Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No students found.</p>
                )}
            </div>
        </div>
    );
};

export default UsersManage;
