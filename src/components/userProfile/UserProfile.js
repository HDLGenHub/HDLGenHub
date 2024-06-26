import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserProfile.css'; // Ensure this path is correct

const UserProfile = () => {
    const { role, id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                console.log(`Fetching user data for role: ${role}, id: ${id}`);
                let response;
                if (role === 'teacher') {
                    response = await axios.get(`http://localhost:4000/Teacher/${id}`);
                } else if (role === 'student') {
                    response = await axios.get(`http://localhost:4000/Student/${id}`);
                } else {
                    throw new Error('Invalid role');
                }
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        const fetchCourses = async () => {
            try {
                if (role === 'teacher') {
                    const response = await axios.get(`http://localhost:4000/Course/courses/${id}`);
                    setCourses(response.data);
                } else if (role === 'student') {
                    const response = await axios.get(`http://localhost:4000/Enrolledcourse/student/${id}`);
                    // Extracting course details from response
                    const enrolledCourses = response.data.map(enrolled => enrolled.courseid);
                    setCourses(enrolledCourses);
                }
            } catch (error) {
                console.error('Error fetching courses:', error);
                setError(error);
            }
        };

        fetchUser();
        fetchCourses();
    }, [role, id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div className="userProfileContainer">
            <div className="userProfile">
                <img src={user.dp} alt={`${user.name}'s profile`} />
                <h1>Name: {user.name}</h1>
                <p>Email: {user.email}</p>

                {role === 'teacher' && courses.length > 0 && (
                    <div>
                        <h2>Created Courses</h2>
                        <ul>
                            {courses.map(course => (
                                <li key={course._id}>
                                    <img src={course.coverimage || 'defaultImage.jpg'} alt={course.name} style={{ width: '50px', height: '50px' }} />
                                    {course.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {role === 'student' && courses.length > 0 && (
                    <div>
                        <h2>Enrolled Courses</h2>
                        <ul>
                            {courses.map(course => (
                                <li key={course._id}>
                                    <img src={course?.coverimage || 'defaultImage.jpg'} alt={course?.name} style={{ width: '50px', height: '50px' }} />
                                    {course?.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
