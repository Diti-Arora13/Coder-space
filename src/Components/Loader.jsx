import React from 'react'

const Loader = () => {
  return (
    <div className='absolute top-0 flex justify-center items-center h-full w-full bg-black bg-opacity-60 z-10 '>
        <h1 className='text-xl loader-text uppercase font-bold '>Loading...</h1>
    </div>
  )
}

export default Loader