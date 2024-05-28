import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Courses from './components/lecturerCourses/Lecturer_courses';
import EditUser from './components/editUser/EditUser';
import CreateCourse from './components/createCourse/CreateCourse';
import Course from './components/course/Course';
import RegisteredHomePage from './components/learnpageByNJ/RegisteredHomePage';
import EditCourse from './components/editCourse/EditCourse';
import CreateUpdateContent from './components/createContent/createContent';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

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
          <Route path="/courses/:courseId/editcourse" element={<EditCourse/>}/>
          
          <Route path="/registeredhomepage" element={<RegisteredHomePage/>}/>
          <Route path="/courses/:courseId/content" element={<CreateUpdateContent/>} /> {/* For creating new content */}
          <Route path="/courses/:courseId/content/:contentId" component={<CreateUpdateContent/>} /> {/* For updating existing content */}
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;