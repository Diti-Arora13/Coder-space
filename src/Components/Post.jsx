import React, { useState } from 'react'
import ConfirmDelete from './ConfirmDelete';
// ICONS
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';

const Post = ({ img, post, bookmarkPost, setBookmarkPost, onDelete }) => {
    const [likeIcon, setLikeIcon] = useState(false);
    const [bookmarkIcon, setBookmarkIcon] = useState(bookmarkPost.includes(post));
    const [visible, setVisible] = useState(false)

    // TOGGLE
    const toggleLike = () => setLikeIcon(!likeIcon)
    const toggleBookmark = () => {
        if(!bookmarkIcon){
            setBookmarkPost([post, ...bookmarkPost])
        } else setBookmarkPost(bookmarkPost.filter(bkpost => bkpost.id !== post.id))

        setBookmarkIcon(!bookmarkIcon)
    }

    //

    return (
    <div className="bg-gray w-2/5 my-5 rounded-lg relative overflow-hidden">
        {/* DELETE ALERT */}
       {post.delete && visible && <ConfirmDelete post={post} onDelete={onDelete} />}

        {/* POST */}
        <div className="flex justify-between items-center px-8">
            <div className='flex items-center  py-4'>
                <img className="h-16 w-16 rounded-full object-cover" src={img} alt="profileImage" />
                <h1 className="text-md ml-5">{post.name}</h1>
            </div>

            {post.delete && <AiOutlineDelete onClick={() => setVisible(!visible)} className='cursor-pointer text-xl text-white' />}
        </div>

        <p className='px-8 pb-3 text-sm'>{post.desc}</p>
         <img src={post.img} alt="" className="w-full h-80 object-cover" />

        <div className="flex p-5 justify-between items-center">
            <div className='flex items-center' onClick={toggleLike} >

                {likeIcon ? <AiFillHeart className='text-lg cursor-pointer text-g-purple-1' /> : <AiOutlineHeart className='text-lg cursor-pointer text-g-purple-1' />}

                <p className='text-sm ml-2'>{likeIcon ? post.likes + 1 : post.likes }</p>
            </div>

            <div className='flex items-center' onClick={toggleBookmark}>

                {bookmarkIcon ? <BsFillBookmarkFill className='text-md cursor-pointer text-g-purple-1' /> : <BsBookmark className='text-md cursor-pointer text-g-purple-1' />}

                <p className='text-sm ml-2'>{bookmarkIcon ? post.bookmark + 1 : post.bookmark }</p>
            </div>
        </div>
    </div>
  )
}

export default Post