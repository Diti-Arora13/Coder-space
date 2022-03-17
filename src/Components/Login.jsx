import React from 'react'
import { useNavigate } from 'react-router-dom'

import {app} from '../firebase-config'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Login = ({email, setEmail, password, setPassword, setLogged}) => {
  let navigate = useNavigate()

  const handleClick = () => {
    handleLogin(email, password); 
    setLogged(true);
    navigate('/home'); 
  }

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className="bg-gray rounded-md p-12 flex flex-col items-center">
            <h1 className='text-xl text-center'>Log in</h1>

            <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email Address' className="input-field w-96 mt-8" type="email" />

            <input value={password} onChange={e => setPassword(e.target.value)}  placeholder='Password' className="input-field w-full mt-8" type="password" />

            <button onClick={handleClick} className='button mt-8'>Log in</button>
        </div>
    </div>
  )
}

export const handleLogin = (email, password) => {
  const auth = getAuth(app);
  
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
    })
    .catch(error => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

export default Login