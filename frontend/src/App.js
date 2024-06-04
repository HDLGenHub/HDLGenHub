import React from 'react';
require('dotenv').config();
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import SignUpPage from './pages/signuppage/signuppage';
import SignInPage from './pages/signinpage/signinpage';
import CoursePage from './pages/coursepage/coursepage';
import Managecoursepage from './pages/managecoursepage/managecoursepage';
import LearnPage from './forstudent/learnpage/learnpage';
import CreationPage from './pages/creationpage/creationpage';
import ProfilePage from './pages/profilepage/profilepage';
import StudentCoursePage from './forstudent/studentcoursepage/studentcoursepage';
import Quizpage from './pages/quizpage/quizpage';
import Attemptingquiz from './forstudent/attemptingquiz/attemptingquiz';
import Coding from './compiler/components/coding';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="routecontainer">
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path='/signuppage' element={<SignUpPage/>}/>
            <Route path='/signinpage' element={<SignInPage/>}/>
            <Route path='/courses' element={<CoursePage/>}/>
            <Route path='/managecourse/:id' element={<Managecoursepage/>}/>
            <Route path='/learn' element={<LearnPage/>}/>
            <Route path='/creation' element={<CreationPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/coursepage/:id' element={<StudentCoursePage/>}/>
            <Route path='/quizpage' element={<Quizpage/>}/>
            <Route path='/attemptingquiz/:quizid' element={<Attemptingquiz/>}/>
            <Route path='/playground' element={<Coding/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
