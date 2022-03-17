import React from 'react'
import Post from './Post'

const HomePage = ({ profileImg, posts, bookmarkPost, setBookmarkPost, onDelete }) => {
  return (
    <div className='flex pt-4 flex-col items-center'>
      
        {
          posts.map(post => <Post key={post.id} bookmarkPost={bookmarkPost} setBookmarkPost={setBookmarkPost} onDelete={onDelete} post={post} img={profileImg} />)
        }
    </div>
  )
}

export default HomePage