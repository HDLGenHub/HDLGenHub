import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './AdminProfile.css'; // Import the CSS file

const AdminProfile = () => {
    const { id } = useParams();
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editMode, setEditMode] = useState(false); // State to handle edit mode
    const [formData, setFormData] = useState({
        town: '',
        age: '',
        photo: null,
        about: '', // New field for "About"
    });

    useEffect(() => {
        const fetchAdmin = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/Admin/${id}`);
                setAdmin(response.data);
                setFormData({
                    town: response.data.town || '',
                    age: response.data.age || '',
                    about: response.data.about || '', // Load existing about info if any
                });
            } catch (error) {
                setError('Error fetching admin data.');
            } finally {
                setLoading(false);
            }
        };

        fetchAdmin();
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhotoChange = (event) => {
        setFormData({ ...formData, photo: event.target.files[0] });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const updateData = new FormData();
        updateData.append('town', formData.town);
        updateData.append('age', formData.age);
        updateData.append('about', formData.about); // Append "About" to the form data
        if (formData.photo) {
            updateData.append('photo', formData.photo);
        }

        try {
            const response = await axios.post(`http://localhost:4000/Admin/${id}/update`, updateData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setAdmin(response.data);
            setEditMode(false);
        } catch (error) {
            console.error('Error updating admin:', error);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!admin) return <div>Admin not found</div>;

    return (
        <div className="adminProfileContainer">
            <div className="adminProfile">
                {editMode && formData.photo && (
                    <img
                        src={URL.createObjectURL(formData.photo)}
                        alt="Preview"
                        className="formPhoto" // Apply the formPhoto class
                    />
                )}
                <h1>{admin.name}</h1>
                <p>Email: {admin.email}</p>
                {editMode ? (
                    <form onSubmit={handleFormSubmit}>
                        <label>
                            Town:
                            <input
                                type="text"
                                name="town"
                                value={formData.town}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Age:
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Upload Photo:
                            <input
                                type="file"
                                name="photo"
                                accept="image/*"
                                onChange={handlePhotoChange}
                            />
                        </label>
                        <label>
                            About:
                            <textarea
                                name="about"
                                value={formData.about}
                                onChange={handleInputChange}
                                rows="4"
                                cols="50"
                            />
                        </label>
                        <button type="submit">Save</button>
                        <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
                    </form>
                ) : (
                    <>
                        <h2>Admin Details</h2>
                        <ul>
                            <li>Town: {admin.town}</li>
                            <li>Age: {admin.age}</li>
                            <li>Joined: {new Date(admin.joined).toLocaleDateString()}</li>
                            <li>About: {admin.about}</li> {/* Display the "About" info */}
                            {admin.photoUrl && (
                                <img
                                    src={`http://localhost:4000${admin.photoUrl}`}
                                    alt="Admin"
                                    className="formPhoto" // Apply the formPhoto class
                                />
                            )}
                        </ul>
                        <button onClick={() => setEditMode(true)}>Edit</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default AdminProfile;
