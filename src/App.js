import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// COMPONENTS
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import SignUp from "./Components/SignUp";
import SetProfile from "./Components/SetProfile";
import HomePage from "./Components/HomePage";
import Profile from "./Components/Profile";
import CreatePost from "./Components/CreatePost";
import PostImg from "./images/post.png";
import userImg from "./images/defaultProfile.png";

function App() {
  let bookmark = 5;
  let likes = 3;

  // getting data from local Storage
  const getLsItems = () => {
    let posts = localStorage.getItem("post");

    if (posts) return JSON.parse(localStorage.getItem("post"));
    else
      return [
        {
          id: 1,
          name: "Jason Mason",
          desc: "Absolute!!!",
          cloudImg: PostImg,
          likes: likes,
          bookmark: 3,
          delete: false,
        },
        {
          id: 2,
          name: "Mention Hention",
          desc: "yesss!!!",
          cloudImg: PostImg,
          likes: likes,
          bookmark: 3,
          delete: false,
        },
        {
          id: 3,
          name: "Humpty Dumpty",
          desc: "Absolute!!!",
          cloudImg: PostImg,
          likes: likes,
          bookmark: 3,
          delete: false,
        },
      ];
  };

  // getting myPost
  const getMyPost = () => {
    let mypost = localStorage.getItem("mypost");

    if (mypost) return JSON.parse(localStorage.getItem("mypost"));
    else return [];
  };

  // pfp
  const getPfp = () => {
    let pfp = localStorage.getItem("pfp");
    return pfp ? pfp : userImg;
  };

  // States
  const [profileImg, setProfileImg] = useState(getPfp);
  const [logged, setLogged] = useState(localStorage.getItem("logged"));
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState(localStorage.getItem("name"));
  const [bio, setBio] = useState(localStorage.getItem("bio"));
  const [myPost, setMyPost] = useState(getMyPost);
  const [bookmarkPost, setBookmarkPosts] = useState([]);
  const [post, setPost] = useState(getLsItems);
  const [loading, setLoading] = useState(false);

  // delete post
  const deletePost = (id) => {
    setPost(post.filter((post) => post.id !== id));
    setMyPost(myPost.filter((post) => post.id !== id));
  };

  // add Post
  const addPost = (desc, cloudImg) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newPost = { id, name, desc, cloudImg, likes, bookmark, delete: true };
    setPost([newPost, ...post]);

    setMyPost([newPost, ...myPost]);
  };

  // setting the post in local Storage
  useEffect(() => localStorage.setItem("post", JSON.stringify(post)), [post]);

  // setting the Mypost in local Storage
  useEffect(
    () => localStorage.setItem("mypost", JSON.stringify(myPost)),
    [myPost]
  );

  // setting the logged state in local Storage
  useEffect(() => localStorage.setItem("logged", logged), [logged]);

  // setting the name state in local Storage
  useEffect(() => localStorage.setItem("name", name), [name]);

  // setting the bio state in local Storage
  useEffect(() => localStorage.setItem("bio", bio), [bio]);

  return (
    <Router>
      <div className={`bg-black-bg min-h-screen font-sans text-white ${loading && 'h-screen overflow-hidden'}`}>
        <Navbar
          setProfileImg={setProfileImg}
          profileImg={profileImg}
          setLogged={setLogged}
          logged={logged}
          firstBtn={logged ? "Profile" : "Sign up"}
        />

        <Routes>
          {/* LANDING */}
          <Route
            path="/"
            element={
              <Landing
                logged={logged}
                firstBtn={logged ? "Home" : "Join Coder_space"}
              />
            }
          />

          {/* SIGN UP */}
          <Route
            path="/signup"
            element={
              <SignUp
                setLogged={setLogged}
                logged={logged}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            }
          />

          {/* SET PROFILE */}
          <Route
            path="/setProfile"
            element={
              <SetProfile
                setLogged={setLogged}
                setProfileImg={setProfileImg}
                profileImg={profileImg}
                setName={setName}
                setBio={setBio}
                name={name}
                bio={bio}
                loading={loading}
                setLoading={setLoading}
              />
            }
          />

          {/* HOME PAGE */}
          <Route
            path="/home"
            element={
              <HomePage
                loading={loading}
                onDelete={deletePost}
                posts={post}
                bookmarkPost={bookmarkPost}
                setBookmarkPost={setBookmarkPosts}
                profileImg={profileImg}
                myPost={myPost}
              />
            }
          />

          {/* CREATE POST */}
          <Route
            path="/createPost"
            element={<CreatePost setLoading={setLoading} onAdd={addPost} />}
          />

          {/* PROFILE */}
          <Route
            path="/profile"
            element={
              <Profile
                onDelete={deletePost}
                setBio={setBio}
                name={name}
                bio={bio}
                email={email}
                profileImg={profileImg}
                myPost={myPost}
                setBookmarkPost={setBookmarkPosts}
                bookmarkPost={bookmarkPost}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
