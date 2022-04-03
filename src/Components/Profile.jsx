import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Profile = ({ profileImg, name, bio, myPost, bookmarkPost }) => {
    const [activeTab, setActiveTab] = useState(true)
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
            <h1 onClick={() => setActiveTab(true)} className={`hover:bg-light-gray hover:bg-opacity-25 text-xl px-4 py-2 cursor-pointer ${activeTab && 'border-b-2 border-g-color-1'}`}>My Posts</h1>

            <h1 onClick={() => setActiveTab(false)} className={`hover:bg-light-gray hover:bg-opacity-25 text-xl px-4 ml-10 py-2 cursor-pointer ${!activeTab && 'border-b-2 border-g-color-1'}`}>Saved Posts</h1>
        </div>

        <div className="flex items-center flex-wrap -ml-4">
        { activeTab ? 
            myPost.map(post => <img alt='' className='h-72 w-1/3 object-cover mt-5 px-4 cursor-pointer' src={post.img}/> )
            : 
            bookmarkPost.map(post => <img alt='' className='h-72 w-1/3 object-cover mt-5 px-4 cursor-pointer' src={post.img} />) } 

            {activeTab && myPost.length === 0 && <p className='text-gray-text pl-8 mt-8 text-lg'>No Post yet!</p>}
            {!activeTab && bookmarkPost.length === 0 && <p className='text-gray-text pl-8 mt-8 text-lg'>No post saved yet!</p>}
        </div>
    </div>
  )
}

export default Profile