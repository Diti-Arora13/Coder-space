import React, { useState, useEffect } from 'react'
import Post from './Post'
import Loader from './Loader';

const HomePage = ({ profileImg, posts, bookmarkPost, setBookmarkPost, onDelete, myPost }) => {

  const [loading, setLoading] = useState(false)

  useEffect(() => setTimeout(setLoading, 800, true) , [posts])

  return (
    <>
      <div className='flex pt-20 flex-col items-center'>
        {!loading && <Loader />}
        {
            posts.map(post => <Post key={post.id} bookmarkPost={bookmarkPost} setBookmarkPost={setBookmarkPost} onDelete={onDelete} post={post} img={profileImg} myPost={myPost} />)
          }
      </div>
    </>
  )
}

export default HomePage