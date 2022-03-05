import { useState } from 'react';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom'
// COMPONENTS
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import SetProfile from './Components/SetProfile';
import HomePage from './Components/HomePage';

function App() {
  return (
    <Router>
      <div className="bg-darker-purple font-sans h-screen text-white">
        <Navbar firstBtn="Sign up" secondBtn="Log in" />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setProfile" element={ <SetProfile /> } />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
