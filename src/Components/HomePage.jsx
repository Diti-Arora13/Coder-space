import React from 'react'
import Post from './Post'
import Loader from './Loader'

const HomePage = ({ profileImg, posts, bookmarkPost, setBookmarkPost, onDelete, myPost, loading }) => {

  return (
    <>
      <div className='flex pt-20 flex-col items-center'>
        {loading && <div className='absolute h-screen w-screen bg-black bg-opacity-50 top-0 left-0 z-20'> <Loader /> </div>}
        {
            posts.map(post => <Post key={post.id} bookmarkPost={bookmarkPost} setBookmarkPost={setBookmarkPost} onDelete={onDelete} post={post} img={profileImg} myPost={myPost} />)
          }
      </div>
    </>
  )
}

export default HomePage