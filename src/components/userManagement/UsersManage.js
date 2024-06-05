import { useState, useEffect } from 'react';
import './UsersManage.css';
import axios from 'axios';

const Users = () => {
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
                            <li key={teacher.id}>{teacher.name} - {teacher.email}</li>
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
                            <li key={student.id}>{student.name} - {student.email}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No students found.</p>
                )}
            </div>
        </div>
    );
}

export default Users;
