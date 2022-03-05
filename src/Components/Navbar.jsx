import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ firstBtn, secondBtn }) => {
  let navigate = useNavigate()
  return (
    <div className="flex sticky top-0 left-0 right-0 bg-dark-purple px-12 py-4 justify-between items-center">
        <h1 onClick={() => navigate('/')} className="text-sm cursor-pointer">
          <span className="gradient-text font-bold m-2">&#60;</span>
          Coder_space
          <span className="gradient-text font-bold m-2">/&#62;</span>
        </h1>

        <div className="flex">
          <Link className='button' to="/signup">{firstBtn}</Link>
          <Link className='button ml-10' to="/login">{secondBtn}</Link>
        </div>
    </div>
  )
}

export default Navbar
