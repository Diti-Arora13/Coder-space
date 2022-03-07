import React , {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// COMPONENTS
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import SetProfile from './Components/SetProfile';
import HomePage from './Components/HomePage';
import Profile from './Components/Profile';
import CreatePost from './Components/CreatePost';

import Img from './images/defaultProfile.png'

function App() {
  const [profileImg,  setProfileImg] = useState(Img)
  const [logged, setLogged] = useState(false)

  return (
    <Router>
      <div className="bg-darker-purple font-sans text-white">
        <Navbar profileImg={profileImg} logged={logged} firstBtn={logged ? 'Profile' : 'Sign up'} secondBtn={logged ? 'Create Post' : 'Log in'} />

        <Routes>
          <Route path="/" element={<Landing logged={logged} firstBtn={logged ? 'Home' : 'Sign up'} secondBtn={logged ? 'Create Post' : 'Log in'} />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/setProfile" element={ <SetProfile setProfileImg={setProfileImg} profileImg={profileImg}  logged={logged} setLogged={setLogged} /> } />

          <Route path="/home" element={<HomePage profileImg={profileImg} />} />

          <Route path="/createPost" element={<CreatePost />} />

          <Route path="/profile" element={<Profile profileImg={profileImg} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
