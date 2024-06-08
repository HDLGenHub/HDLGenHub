
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar/Navbar';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';
import AdminPage from './components/adminPage/AdminPage';
import UserManagement from './components/userManagement/UsersManage';
import CourseManagement from './components/courseManagement/CourseManage';
import UserProfile from './components/userProfile/UserProfile';
import AdminProfile from './components/adminProfile/AdminProfile'; // Import AdminProfile


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/adminPage' element={<AdminPage/>}/>
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/course-management" element={<CourseManagement />} />
      <Route path="/:role/userprofile/:id" element={<UserProfile />} />
      <Route path="/admin/:id" element={<AdminProfile />} /> {/* Add this route */}

      </Routes>
    </Router>
  );
}

export default App;
