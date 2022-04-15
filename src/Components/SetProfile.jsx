import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import AddImage from './AddImage'

const SetProfile = ({profileImg, setProfileImg, setLogged, name, bio, setName, setBio}) => {
  let navigate = useNavigate()
  const [nameError, setNameError] =  useState(false)
  const [bioError, setBioError] =  useState(false)

  const HandleClick = () => {
    if(!name && !bio) {
      setNameError(true)
      setBioError(true)
    }
    else if(!name) setNameError(true)
    else if(!bio) setBioError(true)
    else{
      navigate('/home');
      setLogged(true);
    }
  }

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className="bg-gray rounded-md p-12 flex flex-col items-center">
            <h1 className='text-xl text-center'>Set Profile</h1>
            
            <AddImage profileImg={profileImg} setProfileImg={setProfileImg} />
            
            <input value={name} onChange={e => setName(e.target.value)} placeholder='Name' className={`input-field w-96 placeholder:text-gray-text ${nameError && 'error'}`} />

            <textarea value={bio} onChange={e => setBio(e.target.value)} placeholder='Bio' className={`placeholder:text-gray-text input-field resize-none w-full mt-8 ${bioError && 'error'}`} />

            <button onClick={HandleClick} className='inline-block button mt-8'>Set profile</button>
        </div>
    </div>
  )
}

export default SetProfile