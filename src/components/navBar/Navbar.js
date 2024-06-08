import { useEffect, useState } from 'react';
import './Navbar.css';
import { deleteCache, getCache, setCache } from '../../caching/caching';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [admin, setAdmin] = useState(null);
    const [user, setUser] = useState(null);
    const [logged, setLogged] = useState(0);
    
    const navigate = useNavigate();

    useEffect(() => {
        const cachedUser = getCache('HDLGenHub_User');
        setUser(cachedUser);
        if (cachedUser) {
            if (cachedUser.role === "admin") {
                setAdmin(getCache('HDLGenHub_Admin'));
            } else {
                alert("Missing role");
            }
        }
        setLogged(getCache('HDLGenHub_loggedState'));
    }, [logged]);

    const handleLogout = () => {
        alert('User logged out');
        setLogged(0);
        deleteCache('HDLGenHub_loggedState');
        setUser(null);
        deleteCache('HDLGenHub_User');
        setAdmin(null);
        deleteCache('HDLGenHub_Teacher');
        navigate('/');
        window.location.reload();
    };

    const handleSignIn = () => {
        navigate('/signin');
    };

    const handleSignUp = () => {
        navigate('/signup');
    };

    const handleAdminConsole = () => {
        navigate('/adminPage');
    };
    const handleAdminProfile = (id) => {
        navigate(`/admin/${id}`); // Correctly use backticks for template literal
    };

    console.log("Logged user: ", user);

    if (user) {
        if (admin) {
            return (
                <div className="navbarcontainer">
                    <div className="navbarleftcontainer">
                        <ul>
                            <li className="navbarhometext"><a href='/'><span style={{color:'#fa9746'}}>HDL</span> Gen Hub</a></li>
                            <li><button onClick={handleAdminConsole}>Admin console</button></li>
                        </ul>
                    </div>
                    <div className="navbarrightcontainer">
                        <ul>
                        <li className='navbarsignin'>
                        <button onClick={() => handleAdminProfile(admin._id)}>Admin</button>
                            </li>
                            <li className='navbarsignup'><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="navbarcontainer">
                    <div className="navbarleftcontainer">
                        <ul>
                            <li className="navbarhometext"><a href='/'><span style={{color:'#fa9746'}}>HDL</span> Gen Hub</a></li>
                            <li><a href='#'>Contact</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Help</a></li>
                        </ul>
                    </div>
                    <div className="navbarrightcontainer">
                        <ul>
                            <li className='navbarsignin'><a href='/profile'>Profile</a></li>
                            <li className='navbarsignup'><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                </div>
            );
        }
    } else {
        return (
            <div className="navbarcontainer">
                <div className="navbarleftcontainer">
                    <ul>
                        <li className="navbarhometext"><a href='/'><span style={{color:'#fa9746'}}>HDL</span> Gen Hub</a></li>
                        <li><a href='#'>Contact</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Help</a></li>
                    </ul>
                </div>
                <div className="navbarrightcontainer">
                    <ul>
                        <li className='navbarsignin'><button onClick={handleSignIn}>Sign In</button></li>
                        <li className='navbarsignup'><button onClick={handleSignUp}>Sign Up</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;
