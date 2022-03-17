import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import AddImage from './AddImage'

const SetProfile = ({profileImg, setProfileImg, setLogged, name, bio, setName, setBio}) => {
  let navigate = useNavigate()
  const [settingName, setSettingName] =useState()
  const [settingBio, setSettingBio] =useState()

  const HandleClick = () => {
    navigate('/home');
    setLogged(true);
    setName(settingName)
    setBio(settingBio)
  }

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className="bg-gray rounded-md p-12 flex flex-col items-center">
            <h1 className='text-xl text-center'>Set Profile</h1>
            
            <AddImage profileImg={profileImg} setProfileImg={setProfileImg} />
            
            <input onChange={e => setSettingName(e.target.value)} placeholder='Name' className="input-field w-96 placeholder:text-gray-text" type="text" />

            <textarea onChange={e => setSettingBio(e.target.value)} placeholder='Bio' className="placeholder:text-gray-text input-field resize-none w-full mt-8" type="password" />

            <button onClick={HandleClick} className='inline-block button mt-8'>Set profile</button>
        </div>
    </div>
  )
}

export default SetProfile