import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import './UserProfile.css'; // Ensure this path is correct

const UserProfile = () => {
    const { role, id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                console.log(`Fetching user data for role: ${role}, id: ${id}`);
                let response;
                if (role === 'teacher') {
                    response = await axios.get(`http://localhost:4000/teacher/${id}`);
                } else if (role === 'student') {
                    response = await axios.get(`http://localhost:4000/student/${id}`);
                } else {
                    throw new Error('Invalid role');
                }
                console.log('API response:', response.data);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError(error);
            } finally {
                setLoading(false);
                console.log("Loading state set to false");
            }
        };

        fetchUser();
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
                <img src={user.profileImage} alt={`${user.name}'s profile`} />
                <h1>Name: {user.name}</h1>
                <p>Email: {user.email}</p>
                
                {role === 'teacher' && user.courses && (
                    <div>
                        <h2>Created Courses</h2>
                        <ul>
                            {user.courses.map(course => (
                                <li key={course._id}>{course.name}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {role === 'student' && user.enrolledCourses && (
                    <div>
                        <h2>Enrolled Courses</h2>
                        <ul>
                            {user.enrolledCourses.map(course => (
                                <li key={course._id}>{course.name}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Add other user details as needed */}
            </div>
        </div>
    );
};

export default UserProfile;
