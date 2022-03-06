import React from 'react'
import Post from './Post'

const HomePage = ({profileImg}) => {
  return (
    <div className='flex mt-16 pt-4 flex-col items-center'>
        <Post img={profileImg} />
        <Post img={profileImg} />
    </div>
  )
}

export default HomePage