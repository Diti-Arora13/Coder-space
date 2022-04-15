import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'

import {app} from '../firebase-config'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { handleLogin } from './Login'
 
const SignUp = ({email, setEmail, password, setPassword}) => {
  
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleSignup = () => {
    const authentication = getAuth(app);
    createUserWithEmailAndPassword(authentication, email, password)
      .then(() => {
        handleLogin(email, password)
      })
  }

  const handleClick = () => {
    if(!email && !password) {
      setEmailError(true)
      setPasswordError(true)
    }
    else if(!email) setEmailError(true)
    else if(!password) setPasswordError(true)
    else{
      navigate('/setProfile')
      handleSignup();
    }
  }

  let navigate = useNavigate()

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className="bg-gray rounded-md p-12 flex flex-col items-center">
            <h1 className='text-xl text-center'>Sign up</h1>

            <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email Address' className={`input-field w-96 mt-8 placeholder:text-gray-text ${emailError && 'error'}`} type="email" />

            <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' className={`input-field w-full mt-8 placeholder:text-gray-text ${passwordError && 'error'}`} type="password" />

            <button onClick={handleClick} className='button mt-8'>Sign up</button>

        </div>
    </div>
  )
}

export default SignUp