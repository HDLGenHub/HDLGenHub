import React from 'react';
import './App.css';
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

function App() {
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
          <Route path="/editcourse" element={<EditCourse/>}/>
          <Route path="/createcontent" element={<CreateUpdateContent/>}/>
          <Route path="/registeredhomepage" element={<RegisteredHomePage/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;