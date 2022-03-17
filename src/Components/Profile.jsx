import React from 'react'
import { Link } from 'react-router-dom';

const Profile = ({ profileImg, name, bio, myPost, bookmarkPost }) => {
  return (
    <div className='bg-black-bg min-h-screen pt-20 pb-5 px-12'>
        <div className='flex items-center'>
            <img className='h-52 w-52 object-cover rounded-full shadow flex-shrink-0' src={profileImg} alt="" />

            <div className="ml-10">
                <div className="flex items-center">
                    <h1 className="text-xl flex items-center">{name}</h1>
                    <Link to='/setProfile' className='bg-white text-black text-sm py-1 px-4 rounded-md ml-16'>Edit Profile</Link>
                </div>

                <p className="text-gray-text mt-6 w-1/2">{bio}</p>
            </div>

        </div>

        <div className="flex items-center mt-10">
            <h1 className='hover:bg-light-gray hover:bg-opacity-25 text-xl px-4 py-2 cursor-pointer'>My Posts</h1>
            <h1 className="hover:bg-light-gray hover:bg-opacity-25 text-xl px-4 ml-10 py-2 cursor-pointer">Saved Posts</h1>
        </div>

        <div className="flex items-center flex-wrap -ml-4">
            {myPost.map(post => <img alt='' className='h-72 w-1/3 object-cover mt-5 px-4 cursor-pointer' src={post.img} />)}
        </div>


        <div className="text-xl">Demo posts</div>
        <div className="flex items-center flex-wrap -ml-4">
            {bookmarkPost.map(post => <img alt='' className='h-72 w-1/3 object-cover mt-5 px-4 cursor-pointer' src={post.img} />)}
        </div>
    </div>
  )
}

export default Profile