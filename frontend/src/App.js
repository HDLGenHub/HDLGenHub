// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import About from './components/About';
import Learn from './components/Learn';
import Help from './components/Help';
import PathShow from './components/RoleShow';
import Setting from './components/setting';
import Courses from './components/Lecturer_courses';
import EditUser from './components/EditUser';

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;