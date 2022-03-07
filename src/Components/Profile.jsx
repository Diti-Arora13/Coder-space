import React from 'react'
import { MdEdit } from 'react-icons/md';
import PostImg from '../images/post.png'

const Profile = ({ profileImg }) => {
  return (
    <div className='bg-darker-purple mt-16 py-8 px-12'>
        <div className='flex items-center mt-4'>
            <img className='h-52 w-52 object-cover rounded-full shadow' src={profileImg} alt="" />

            <div className="ml-10">
                <h1 className="text-xl flex items-center">Mary Jane Watson <MdEdit className='ml-10 cursor-pointer text-g-purple-1' /></h1>

                <h4 className="text-sm text-gray flex items-center">@mary01 <MdEdit className='ml-10 cursor-pointer text-g-purple-1' /></h4>

                <p className="text-gray mt-4 w-1/2">I am a React Js developer who has a hunger of gulping new stuff everyday. Apart from web dev, I keep exploring new fields to try my hands on other things. I'm always sharing information regaurding Web dev!</p>
            </div>

        </div>

        <div className="flex items-center mt-10">
            <h1 className='text-xl pr-4 py-2 cursor-pointer'>My Posts</h1>
            <h1 className="text-xl ml-10 py-2 ">Saved Posts</h1>
        </div>

        <div className="flex items-center flex-wrap -ml-4">
            <img className='h-72 w-1/3 object-cover mt-5 px-4 cursor-pointer' src={PostImg} alt="" />
            <img className='h-72 w-1/3 object-cover mt-5 px-4' src={PostImg} alt="" />
            <img className='h-72 w-1/3 object-cover mt-5 px-4' src={PostImg} alt="" />
        </div>
    </div>
  )
}

export default Profile