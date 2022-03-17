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
import PostImg from './images/post.png'

import userImg from './images/defaultProfile.png'

function App() {
  let bookmark = 5
  let likes = 3

  // States
  const [profileImg,  setProfileImg] = useState(userImg)  
  const [logged, setLogged] = useState(false)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [name, setName] = useState()
  const [bio, setBio] = useState()
  const [myPost, setMyPost] = useState([])
  const [bookmarkPost, setBookmarkPosts] = useState([])
  const [post, setPost] = useState([
    {
      'id': 1,
      'name': 'Jason Mason',
      'desc': 'Absolute!!!',
      'img': PostImg,
      'likes': likes,
      'bookmark': 3,
      'delete': false
    },
    {
      'id': 2,
      'name': 'Mention Hention',
      'desc': 'yesss!!!',
      'img': PostImg,
      'likes': likes,
      'bookmark': 3,
      'delete': false
    },
    {
      'id': 3,
      'name': 'Humpty Dumpty',
      'desc': 'Absolute!!!',
      'img': PostImg,
      'likes': likes,
      'bookmark': 3,
      'delete': false
    },
  ])

  // delete post
  const deletePost = id => {
    setPost(post.filter(post => post.id !== id ))
    setMyPost(myPost.filter(post => post.id !== id ))
  }

  // add Post
  const addPost = (desc, img) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newPost = {id, name, desc, img, likes, bookmark, delete:true}
    setPost([newPost, ...post])
    setMyPost([newPost, ...myPost])
  }

  return (
    <Router>
      <div className="bg-black-bg font-sans text-white">
        
        <Navbar setProfileImg={setProfileImg} profileImg={profileImg} setLogged={setLogged} logged={logged} firstBtn={logged ? 'Profile' : 'Sign up'} secondBtn={logged ? 'Create Post' : 'Log in'} />

        <Routes>
          <Route path="/" element={<Landing logged={logged} firstBtn={logged ? 'Home' : 'Join Coder_space'} secondBtn={logged ? 'Create Post' : 'Log in'} />} />

          <Route path="/signup" element={<SignUp email={email} setEmail={setEmail} password={password} setPassword={setPassword} />} />

          <Route path="/login" element={<Login setLogged={setLogged} email={email} password={password} setPassword={setPassword} setEmail={setEmail} />} />

          <Route path="/setProfile" element={ <SetProfile setLogged={setLogged} setProfileImg={setProfileImg} profileImg={profileImg} setName={setName}  setBio={setBio} name={name} bio={bio} /> } />

          <Route path="/home" element={<HomePage onDelete={deletePost} posts={post} bookmarkPost={bookmarkPost} setBookmarkPost={setBookmarkPosts} profileImg={profileImg} />} />

          <Route path="/createPost" element={<CreatePost onAdd={addPost} />} />

          <Route path="/profile" element={<Profile name={name} bio={bio} email={email} profileImg={profileImg} myPost={myPost} bookmarkPost={bookmarkPost} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
