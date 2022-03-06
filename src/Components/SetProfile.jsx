import React from 'react'
import { useNavigate} from 'react-router-dom'
import AddImage from './AddImage'

const SetProfile = ({profileImg, setProfileImg, logged, setLogged}) => {
  let navigate = useNavigate()

  const HandleClick = () => {
    navigate('/home');
    setLogged(true);
  }

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className="bg-dark-purple rounded-md p-12 inline-block">
            <h1 className='text-xl text-center'>Create Account</h1>
            
            <AddImage profileImg={profileImg} setProfileImg={setProfileImg} />
            
            <div className="flex justify-between ">
                <input placeholder='First name' className="input-field w-1/2" type="text" />
                <input placeholder='Last name' className="input-field w-1/2 ml-10" type="text" />
            </div>

            <textarea placeholder='Bio' className="input-field resize-none w-full mt-8" type="password" />

            <button onClick={HandleClick} className='inline-block button mt-8'>Create Account</button>
        </div>
    </div>
  )
}

export default SetProfile