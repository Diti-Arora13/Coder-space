import React , { useState, useEffect } from 'react'
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
import PostImg from './images/post.png'
import userImg from './images/defaultProfile.png'

function App() {
  let bookmark = 5
  let likes = 3

  // getting data from local Storage
  const getLsItems = () => {
    let posts = localStorage.getItem('post')
    
    if(posts) return JSON.parse(localStorage.getItem('post'))
    else return [
      {
        'id': 1,
        'name': 'Jason Mason',
        'desc': 'Absolute!!!',
        'cloudImg': PostImg,
        'likes': likes,
        'bookmark': 3,
        'delete': false
      },
      {
        'id': 2,
        'name': 'Mention Hention',
        'desc': 'yesss!!!',
        'cloudImg': PostImg,
        'likes': likes,
        'bookmark': 3,
        'delete': false
      },
      {
        'id': 3,
        'name': 'Humpty Dumpty',
        'desc': 'Absolute!!!',
        'cloudImg': PostImg,
        'likes': likes,
        'bookmark': 3,
        'delete': false
      },
    ]
  }

  // States
  const [profileImg,  setProfileImg] = useState(userImg)  
  const [logged, setLogged] = useState(localStorage.getItem('logged'))
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [name, setName] = useState(localStorage.getItem('name'))
  const [bio, setBio] = useState(localStorage.getItem('bio'))
  const [myPost, setMyPost] = useState([])
  const [bookmarkPost, setBookmarkPosts] = useState([])
  const [post, setPost] = useState(getLsItems)

  // delete post
  const deletePost = id => {
    setPost(post.filter(post => post.id !== id ))
    setMyPost(myPost.filter(post => post.id !== id ))
  }

  // add Post
  const addPost = (desc, cloudImg) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newPost = {id, name, desc, cloudImg, likes, bookmark, delete:true}
    setPost([newPost, ...post])
    setMyPost([newPost, ...myPost])
    console.log(cloudImg);
  }

  // setting the post in local Storage
  useEffect(() => localStorage.setItem('post', JSON.stringify(post)), [post])
  
  // setting the logged state in local Storage
  useEffect(() => localStorage.setItem('logged', JSON.stringify(logged)) , [logged])
  
  // setting the name state in local Storage
  useEffect(() => localStorage.setItem('name', name) , [name])

  // setting the bio state in local Storage
  useEffect(() => localStorage.setItem('bio', bio) , [bio])


  return (
    <Router>
      <div className="bg-black-bg min-h-screen font-sans text-white">
        
        <Navbar setProfileImg={setProfileImg} profileImg={profileImg} setLogged={setLogged} logged={logged} firstBtn={logged ? 'Profile' : 'Sign up'} secondBtn={logged ? 'Create Post' : 'Log in'} />

        <Routes>
          {/* LANDING */}
          <Route path="/" element={<Landing logged={logged} firstBtn={logged ? 'Home' : 'Join Coder_space'} secondBtn={logged ? 'Create Post' : 'Log in'} />} />

          {/* SIGN UP */}
          <Route path="/signup" element={<SignUp setLogged={setLogged} logged={logged} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />} />

          {/* LOGIN */}
          <Route path="/login" element={<Login setLogged={setLogged} email={email} password={password} setPassword={setPassword} setEmail={setEmail} />} />

          {/* SET PROFILE */}
          <Route path="/setProfile" element={ <SetProfile setLogged={setLogged} setProfileImg={setProfileImg} profileImg={profileImg} setName={setName}  setBio={setBio} name={name} bio={bio} /> } />

          {/* HOME PAGE */}
          <Route path="/home" element={<HomePage onDelete={deletePost} posts={post} bookmarkPost={bookmarkPost} setBookmarkPost={setBookmarkPosts} profileImg={profileImg} />} />

          {/* CREATE POST */}
          <Route path="/createPost" element={<CreatePost onAdd={addPost} />} />

          {/* PROFILE */}
          <Route path="/profile" element={<Profile name={name} bio={bio} email={email} profileImg={profileImg} myPost={myPost} bookmarkPost={bookmarkPost} />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
