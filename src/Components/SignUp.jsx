import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()

  let navigate = useNavigate()

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className="bg-dark-purple rounded-md p-12 inline-block">
            <h1 className='text-xl text-center'>Sign up</h1>

            <div className="flex justify-between mt-8">
                <input onChange={e => setFirstName(e.target.value)} value={firstName} placeholder='First name' className="input-field w-1/2" type="text" />

                <input onChange={e => setLastName(e.target.value)} value={lastName} placeholder='Last name' className="input-field w-1/2 ml-10" type="text" />
            </div>

            <input placeholder='Email Address' className="input-field w-full mt-8" type="email" />

            <input placeholder='Password' className="input-field w-full mt-8" type="password" />

            <button onClick={() => navigate('/setProfile')} className='button mt-8'>Sign up</button>
        </div>
    </div>
  )
}

export default SignUp