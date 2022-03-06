import React, { useState } from 'react'
import Img from '../images/defaultProfile.png'
import PostImg from '../images/post.png'

import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { BsFillBookmarkFill } from 'react-icons/bs';

const Post = ({img}) => {
    const [like, setLike] = useState(false);
    const [bookmark, setBookmark] = useState(false);

    let likeNum = 3
    let BokkmarkNum = 3

    // TOGGLE
    const toggleLike = () => {
        if(!like){ 
            setLike(true) 
        }
        else setLike(false)
        
    }

    const toggleBookmark = () => {
        if(!bookmark) setBookmark(true) 
        else setBookmark(false)
    }

    // INCREMENT
  return (
    <div className="bg-dark-purple w-2/5 my-5 rounded-lg">
            <div className='flex items-center px-12 py-8'>
                <img className="h-20 w-20 rounded-full object-cover" src={img} alt="pprofieImage" />

                <div className='ml-4'>
                    <h1 className="text-md mt-1">Mary Jane Watson</h1>
                    <p className="text-gray text-sm -mt-1">@mary01</p>
                </div>
            </div>

            <img src={PostImg} alt="" className="w-full h-80 object-cover" />

            <div className="flex p-5 justify-between items-center">
                <div className='flex items-center' onClick={toggleLike} >
                    {like ? <AiFillHeart className='text-lg cursor-pointer text-g-purple-1' /> : <AiOutlineHeart className='text-lg cursor-pointer text-g-purple-1' />}
                    <p className='text-sm ml-2'>{like ? likeNum + 1 : likeNum }</p>
                </div>

                <div className='flex items-center' onClick={toggleBookmark}>
                    {bookmark ? <BsFillBookmarkFill className='text-md cursor-pointer text-g-purple-1' /> : <BsBookmark className='text-md cursor-pointer text-g-purple-1' />}
                    <p className='text-sm ml-2'>{bookmark ? BokkmarkNum + 1 : BokkmarkNum }</p>
                </div>
            </div>
    </div>
  )
}

export default Post