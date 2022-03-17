import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavbarAvatar from './NavbarAvatar'

const Navbar = ({ firstBtn, secondBtn, logged, profileImg, setLogged}) => {

  let navigate = useNavigate()
  
  return (
    <div className="flex fixed top-0 left-0 right-0 bg-dark-purple px-12 py-4 justify-between items-center">
        <h1 onClick={() => navigate(logged ? '/home' : '/')} className="text-sm cursor-pointer">
          <span className="italic gradient-text font-bold m-2">&#60;</span>
          Coder_space
          <span className="italic gradient-text font-bold m-2">/&#62;</span>
        </h1>

        <div className="flex items-center">
          <Link className='button' to={logged ? '/profile' : '/signup'}>{firstBtn}</Link>
          <Link className='button mx-10' to={logged ? '/createPost' : '/login'}>{secondBtn}</Link>
          {logged && <NavbarAvatar setLogged={setLogged} profileImg={profileImg} />}
        </div>
    </div>
  )
}



export default Navbar
