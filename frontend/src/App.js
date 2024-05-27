import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import SignUpPage from './pages/signuppage/signuppage';
import SignInPage from './pages/signinpage/signinpage';

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
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
