import React from 'react'
import Img from '../images/img.png'
import Post from '../images/post.png'
import HeartIcon from '../images/heart-icon.png'
import BookmarkIcon from '../images/bookmark.png'

const HomePage = () => {
  return (
    <div className='flex flex-col items-center'>
        <div className="bg-dark-purple w-2/5 my-5 rounded-lg">
            <div className='flex items-center px-12 py-8'>
                <img className="hover:opacity-50 cursor-pointer h-20 w-20 rounded-full object-cover" src={Img} alt="pprofieImage" />

                <div className='ml-4'>
                    <h1 className="text-md mt-1">Mary Jane Watson</h1>
                    <p className="text-gray text-sm -mt-1">@mary01</p>
                </div>
            </div>

            <img src={Post} alt="" className="w-full h-80 object-cover" />

        </div>
        <div className="bg-dark-purple rounded-md py-12 inline-block">
            <div className='flex items-center px-12'>
                <img className="hover:opacity-50 cursor-pointer h-20 w-20 rounded-full object-cover" src={Img} alt="pprofieImage" />

                <div className='ml-4'>
                    <h1 className="text-md mt-1">Mary Jane Watson</h1>
                    <p className="text-gray text-sm -mt-1">@mary07</p>
                </div>
            </div>

            <img src={Post} alt="" />

            <div className="flex justIfy-between items-center">
                <img src={HeartIcon} alt="" />
                <img src={BookmarkIcon} alt="" />
            </div>

        </div>
    </div>
  )
}

export default HomePage