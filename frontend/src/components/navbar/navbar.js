import { useEffect, useState } from "react";
import "./navbar.css";
import { deleteCache, getCache, setCache } from "../../caching/cache";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [teacher, setTeacher] = useState(null);
  const [student, setStudent] = useState(null);
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(0);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  useEffect(() => {
    setUser(getCache("HDLGenHub_User"));
    if (user) {
      if (user.role === "student") {
        setStudent(getCache("HDLGenHub_Student"));
      } else if (user.role === "teacher") {
        setTeacher(getCache("HDLGenHub_Teacher"));
      } else {
        alert("Missing role");
      }
    }
    setLogged(getCache("HDLGenHub_loggedState"));
  }, [logged]);

  const handleLogout = () => {
    alert("User logged out");
    setLogged(0);
    deleteCache("HDLGenHub_loggedState");
    setUser(null);
    deleteCache("HDLGenHub_User");
    setStudent(null);
    deleteCache("HDLGenHub_Student");
    setTeacher(null);
    deleteCache("HDLGenHub_Teacher");
    navigate("/");
    window.location.reload();
  };

  const isActive = (path) => {
    return location.pathname === path ? "active-tab" : "";
  };

  if (user) {
    if (teacher) {
      return (
        <div className="navbarcontainer">
          <div className="navbarleftcontainer">
            <ul>
              <li className="navbarhometext">
                <Link to="/">
                  <span style={{ color: "#fa9746" }}>HDL</span> Gen Hub
                </Link>
              </li>

              <li className={isActive("/courses")}>
                <Link to="/courses">Courses</Link>
              </li>
              <li className={isActive("/competitions")}>
                <Link to="/competitions">Competitions</Link>
              </li>
              <li className={isActive("/creation")}>
                <Link to="/creation">Creation</Link>
              </li>
            </ul>
          </div>
          <div className="navbarrightcontainer">
            <ul>
              <li className="h-6 w-6 md:h-9 md:w-9 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center">
                <Link to="/profile"><span className="material-symbols-outlined">person</span></Link>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@30,100,1,0" rel="stylesheet" />
              </li>
              <li className="w-12 h-6 md:w-20 md:h-9 text-white bg-gray-400 hover:bg-amber-600 text-xs md:font-medium rounded-3xl flex items-center justify-center md:text-sm text-center">
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      );
    } else if (student) {
      return (
        <div className="navbarcontainer">
          <div className="navbarleftcontainer">
            <ul>
              <li className="navbarhometext">
                <Link to="/">
                  <span style={{ color: "#fa9746" }}>HDL</span> Gen Hub
                </Link>
              </li>
              <li className={isActive("/learn")}>
                <Link to="/learn">Learn</Link>
              </li>
              {/* <li className={isActive("/competitions")}>
                <Link to="/competitions">Competitions</Link>
              </li> */}
              <li className={isActive("/challenges")}>
                <Link to="/challenges">Challenges</Link>
              </li>
            </ul>
          </div>
          <div className="navbarrightcontainer">
            <ul>
              <li className="h-7 w-7 md:h-9 md:w-9 bg-amber-500 rounded-full flex items-center justify-center">
                <Link to="/profile"><span className="material-symbols-outlined">person</span></Link>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@30,100,1,0" rel="stylesheet" />
              </li>
              <li className="w-16 h-7 md:w-20 md:h-9 text-white bg-gray-400 hover:bg-amber-600 text-xs md:font-medium rounded-3xl flex items-center justify-center md:text-sm text-center">
                <button onClick={handleLogout}>Logout</button>
              </li>
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
            <li className="navbarhometext">
              <Link to="/">
                <span style={{ color: "#fa9746" }}>HDL</span> Gen Hub
              </Link>
            </li>
            <li className={isActive("/about")}>
              <Link to="/about">About</Link>
            </li>
            <li className={isActive("/help")}>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </div>
        <div className="navbarrightcontainer">
          <ul>
            <li className="navbarsignin">
              <Link to="/signinpage">Sign In</Link>
            </li>
            <li className="navbarsignup">
              <Link to="/signuppage">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default Navbar;
