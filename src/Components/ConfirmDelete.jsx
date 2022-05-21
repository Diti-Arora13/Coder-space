import React from 'react'

const ConfirmDelete = ({ post, onDelete, setVisible, visible }) => {
  return (
    <div className='flex  flex-col items-center px-4 py-2 bg-light-gray'>
        <p className='text-sm'>Are you sure you want to delete the post?</p>
        <div>
            <button onClick={() => onDelete(post.id)} className="bg-white text-black my-2 py-1 px-4 rounded-md">Delete</button>
            
            <button onClick={() => setVisible(!visible)} className="bg-white text-black m-2 py-1 px-4 rounded-md">cancel</button>
        </div>
    </div>
  )
}

export default ConfirmDelete