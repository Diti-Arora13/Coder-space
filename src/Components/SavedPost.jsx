import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';

const SavedPost = ({ post, savedPost, setSavedPost }) => {
     // delete post
  const removeSavedPost = id => {
    setSavedPost(savedPost.filter(post => post.id !== id ))
  }

  return (
    <div className="bg-gray rounded-md mx-4 w-full sm:w-64 md:w-80 xl:w-96 mt-5 overflow-hidden">

      <AiOutlineClose onClick={() => removeSavedPost(post.id)} className="cursor-pointer text-2xl text-white p-3  hover:bg-black-bg hover:bg-opacity-40" />

      <img alt="" className="h-72 w-full object-cover cursor-pointer" src={post.cloudImg} />
    </div>
  )
}

export default SavedPost