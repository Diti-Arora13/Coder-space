import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarAvatar = ({ profileImg, setLogged }) => {
  let navigate = useNavigate()
  const [visibe, setVisible] = useState(false)

  const toggle = () => {
    setVisible(!visibe)
  }

  const handleClick = ()=> {
    navigate('/');
    setLogged(false); 
  }

  return (
    <div className='flex-shrink-0'>
      <img onClick={toggle} className='cursor-pointer hover:opacity-50 h-14 w-14 object-cover rounded-full' src={profileImg} alt="Profile Img"/>

        <div onClick={() => setVisible(false)} className={`z-40 absolute bg-gradient-to-r from-g-color-1 to-g-color-2 rounded-md mt-4 sm:right-8 right-12 " + ${visibe ? 'visible' : 'invisible'}`} >

          <p onClick={() => navigate('/createPost')} className="sm:hidden border-b border-white cursor-pointer text-center py-2 px-4">Create Post</p>

          <p onClick={() => navigate('/profile')} className="cursor-pointer text-center py-2 px-4">Profile</p>
          <hr />
          <p onClick={handleClick} className="cursor-pointer text-center py-2 px-4">Log out</p>
      </div>

    </div>
  )
}

export default NavbarAvatar