import React, { useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import AddPost from '../images/addPost.png'
import Axios from 'axios'

const CreatePost = ({ onAdd }) => {
  let fileInput = useRef()
  let navigate  = useNavigate()

  const [postImg, setPostImg] = useState(AddPost)
  const [cloudImg, setcloudImg] = useState()
  const [desc, setDesc] = useState()

  const imageHandler = e => {
    const reader = new FileReader();
    reader.onload = () => {
    if(reader.readyState === 2){
      setPostImg(reader.result)
    }
  }
    reader.readAsDataURL(e.target.files[0])
  }

  const uploadImg = () => {
    const formData = new FormData()
    formData.append('file', postImg)
    formData.append('upload_preset', 'hk7ixu95')

    Axios.post('https://api.cloudinary.com/v1_1/diti/image/upload', formData)
    .then(res => {
      onAdd(desc, res.data.secure_url)
    })
  }

  //on submit
  const handleSubmit = () => {
    uploadImg()
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