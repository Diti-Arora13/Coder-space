import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import AddImage from './AddImage'

const SetProfile = ({profileImg, setProfileImg,  name, setName, setBio, bio}) => {
  let navigate = useNavigate()
  const [nameError, setNameError] =  useState(false)

  const HandleClick = () => {
    if(!name) setNameError(true)
    else navigate('/home')
  }

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className="bg-gray rounded-md p-8 ex-small:p-12 flex flex-col items-center">
            <h1 className='text-lg ex-small:text-xl text-center'>Set Profile</h1>
            
            <AddImage profileImg={profileImg} setProfileImg={setProfileImg} />
            
            <input value={name} onChange={e => setName(e.target.value)} placeholder='Name' className={`input-field w-full ex-small:w-96 placeholder:text-gray-text ${nameError && 'error'}`} />

            <textarea value={bio} onChange={e => setBio(e.target.value)} placeholder='Bio' className={`input-field ex-small:w-96 placeholder:text-gray-text mt-8`} />

            <button onClick={HandleClick} className='inline-block button mt-8'>Set profile</button>
        </div>
    </div>
  )
}

export default SetProfile