import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
//import './AdminProfile.css'; // Optional: for custom styling

const AdminProfile = () => {
    const { id } = useParams(); // Destructure id from useParams
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/Admin/${id}`);
                setAdmin(response.data);
            } catch (error) {
                setError('Error fetching admin data.');
            } finally {
                setLoading(false);
            }
        };
        
        fetchAdmin();
    }, [id]); // Add id to the dependency array

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!admin) return <div>Admin not found</div>;

    return (
        <div className="adminProfileContainer">
            <div className="adminProfile">
                <h1>Name: {admin.name}</h1>
                <p>Email: {admin.email}</p>
                <h2>Admin Details</h2>
                <ul>
                    <li>Role: {admin.role}</li>
                    <li>Joined: {new Date(admin.joined).toLocaleDateString()}</li>
                    {/* Add more admin details as needed */}
                </ul>
            </div>
        </div>
    );
};

export default AdminProfile;
