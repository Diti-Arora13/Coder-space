import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarAvatar = ({ profileImg, setLogged }) => {
  const [visibe, setVisible] = useState(false)

  const toggle = () => {
    if (!visibe){ setVisible(true)}
    else {setVisible(false)}
  }

  const handleClick = ()=> {
    navigate('/');
    setLogged(false); 
  }

  let navigate = useNavigate()
  return (
    <div>
      <img onClick={toggle} className='cursor-pointer hover:opacity-50 h-14 w-14 object-cover rounded-full' src={profileImg} alt="Profile Img"/>

        <div className={`absolute bg-gradient-to-r from-g-color-1 to-g-color-2  rounded-md mt-4 right-8" + ${visibe ? 'visible' : 'invisible'}`} >

        <p onClick={() => navigate('/profile')} className="cursor-pointer text-center py-2 px-4">Profile</p>
        <hr />
        <p onClick={handleClick} className="cursor-pointer text-center py-2 px-4">Log out</p>
      </div>

    </div>
  )
}

export default NavbarAvatar