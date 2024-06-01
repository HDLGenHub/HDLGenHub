import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Navbar from './components/navBar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import About from './components/aboutPage/About';
import Learn from './components/learn/Learn';
import Help from './components/help/Help';
import PathShow from './components/roleShow/RoleShow';
import Setting from './components/setting/setting';
import Courses from './components/lecturerCourses/LecturerCourses';
import EditUser from './components/editUser/EditUser';
import CreateCourse from './components/createCourse/CreateCourse';
import Course from './components/course/Course';
import RegisteredHomePage from './components/learnpageByNJ/RegisteredHomePage';
import EditCourse from './components/editCourse/EditCourse';
import CreateUpdateContent from './components/createContent/createContent';
import Loading from './components/loading/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
      <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/help" element={<Help />} />
          <Route path="/roleshow" element={<PathShow/>}/>
          <Route path="/setting" element={<Setting/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/edituser" element={<EditUser/>}/>
          <Route path="/createcourse" element={<CreateCourse/>}/>
          <Route path="/course/:courseId" element={<Course/>}/>
          <Route path="/courses/:courseId/editcourses" element={<EditCourse/>}/>
          <Route path="/registeredhomepage" element={<RegisteredHomePage/>}/>
          <Route path="/courses/:courseId/content" element={<CreateUpdateContent/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;