import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddPost from '../images/addPost.png'

const CreatePost = ({ onAdd }) => {
  let fileInput = useRef()
  const [postImg, setPostImg] = useState(AddPost)
  const [desc, setDesc] = useState()

  let navigate  = useNavigate()

  const imageHandler = e => {
    const reader = new FileReader();
    reader.onload = () => {
    if(reader.readyState === 2){
      setPostImg(reader.result)
    }
  }
  reader.readAsDataURL(e.target.files[0])
  }

  //on submit
  const handleSubmit = () => {
    onAdd(desc, postImg)
    navigate('/home')
  }

  return (
    <div className='h-screen flex justify-center items-center'>
        <div className="w-2/5 bg-gray">
          <input value={desc} onChange={e => setDesc(e.target.value)} className='px-2 py-4 bg-transparent text-gray-text outline-none text-sm' placeholder='Description...'/>

          <img onClick={() => fileInput.current.click()} className="hover:opacity-50 cursor-pointer w-full h-80 object-cover" src={postImg} alt="pprofieImage" />
          <input className='invisible' ref={fileInput} type="file" accept="image/*" onChange={imageHandler} />

          <button onClick={handleSubmit} className="button my-4">Create</button>
        </div>
    </div>
  )
}

export default CreatePost