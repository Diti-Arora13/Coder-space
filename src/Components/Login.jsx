import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate()
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className="bg-dark-purple rounded-md p-12 inline-block">
            <h1 className='text-xl text-center'>Log in</h1>

            <input placeholder='Email Address' className="input-field w-full mt-8" type="email" />

            <input placeholder='Password' className="input-field w-full mt-8" type="password" />

            <button onClick={() => navigate('/setProfile')} className='button mt-8'>Log in</button>
        </div>
    </div>
  )
}

export default Login