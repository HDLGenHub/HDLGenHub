import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
///import './UserProfile.css'; // Ensure this path is correct

const UserProfile = () => {
    const { role, id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/teacher/${id}`);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [role, id]);

    if (loading) {
        return <div>Loading...</div>;
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
                
                {/* Add other user details as needed */}
            </div>
        </div>
    );
};

export default UserProfile;
