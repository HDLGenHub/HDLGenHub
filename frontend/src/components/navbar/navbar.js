import { useEffect, useState } from 'react';
import './navbar.css';
import { deleteCache, getCache, setCache } from '../../caching/cache';
import { useNavigate } from "react-router-dom";

const Navbar =()=>{
    const [teacher, setTeacher] = useState(null);
    const [student, setStudent] = useState(null);
    const [user, setUser] = useState(null);
    const [logged, setLogged] = useState(0);
    const navigate = useNavigate();

    useEffect(()=>{
        setUser(getCache('HDLGenHub_User'));
        if(user){
            if(user.role === "student"){
                setStudent(getCache('HDLGenHub_Student'));
            }
            else if(user.role === "teacher"){
                setTeacher(getCache('HDLGenHub_Teacher'));
            }
            else{
                alert("Missing role");
            }
        }
        setLogged(getCache('HDLGenHub_loggedState'));
    },[logged]);

    const handleLogout =()=>{
        alert('User logged out');
        setLogged(0);
        deleteCache('HDLGenHub_loggedState');
        setUser(null);
        deleteCache('HDLGenHub_User');
        setStudent(null);
        deleteCache('HDLGenHub_Student');
        setTeacher(null);
        deleteCache('HDLGenHub_Teacher');
        navigate('/');
        window.location.reload();
    }

    console.log("Logged user: ",user);
    if(user){
        if (teacher) {
            return(
                <div className="navbarcontainer">
                    <div className="navbarleftcontainer">
                        <ul>
                            <li className="navbarhometext"><a href='/'><span style={{color:'#fa9746'}}>HDL</span> Gen Hub</a></li>
                            <li><a href='/courses'>Courses</a></li>
                            <li><a href='/competitions'>Competitions</a></li>
                            <li><a href='/creation'>Creation</a></li>
                        </ul>
                    </div>
                    <div className="navbarrightcontainer">
                        <ul>
                            <li className='navbarsignin'><a href='/signinpage'>Teacher</a></li>
                            <li className='navbarsignup'><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                </div>
            )
        }
        else if(student){
            return(
                <div className="navbarcontainer">
                    <div className="navbarleftcontainer">
                        <ul>
                            <li className="navbarhometext"><a href='/'><span style={{color:'#fa9746'}}>HDL</span> Gen Hub</a></li>
                            <li><a href='/learn'>Learn</a></li>
                            <li><a href='/competitions'>Competitons</a></li>
                            <li><a href='/challenges'>Challenges</a></li>
                        </ul>
                    </div>
                    <div className="navbarrightcontainer">
                        <ul>
                            <li className='navbarsignin'><a href='/signinpage'>Student</a></li>
                            <li className='navbarsignup'><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                </div>
            )
        }
        else{
            return(
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
                            <li className='navbarsignin'><a href='/signinpage'>Sign In</a></li>
                            <li className='navbarsignup'><a href='/signuppage'>Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            )
        }
    }
    else{
        return(
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
                        <li className='navbarsignin'><a href='/signinpage'>Sign In</a></li>
                        <li className='navbarsignup'><a href='/signuppage'>Sign Up</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;