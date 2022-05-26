import React, { useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineInfoCircle } from 'react-icons/ai';
import AddPost from '../images/addPost.png'
import Axios from 'axios'

const CreatePost = ({ onAdd, setLoading }) => {
  let fileInput = useRef()
  let navigate  = useNavigate()

  const [postImg, setPostImg] = useState(AddPost)
  const [desc, setDesc] = useState()
  const [postImgError, setPostImgError] = useState(false)

  const imageHandler = e => {
    const reader = new FileReader();
    reader.onload = () => {
    if(reader.readyState === 2){
      setPostImg(reader.result)
      setPostImgError(false)
    }
  }
    reader.readAsDataURL(e.target.files[0])
  }

  const uploadImg = () => {
    const formData = new FormData()
    formData.append('file', postImg)
    formData.append('upload_preset', 'hk7ixu95')
    setLoading(true)
    
    Axios.post('https://api.cloudinary.com/v1_1/diti/image/upload', formData)
    .then(res => {
      onAdd(desc, res.data.secure_url)
      setLoading(false)
    })
  }

  //on submit
  const handleSubmit = () => {
    if (postImg === AddPost) setPostImgError(true)
    else {
      uploadImg()
      navigate('/home')
    }
  }

  return (
    <div className='h-screen relative flex justify-center items-center'>
        <div className=" w-9/12 md:w-2/5 bg-gray flex flex-col justify-center items-center">
          <input value={desc} onChange={e => setDesc(e.target.value)} className='px-2 py-4 bg-transparent text-gray-text outline-none text-sm w-full ' placeholder='Description...'/>

          <img onClick={() => fileInput.current.click()} className="hover:opacity-50 cursor-pointer w-full h-80 object-cover" src={postImg} alt="pprofieImage" />
          <input className='invisible' ref={fileInput} type="file" accept="image/*" onChange={imageHandler} />

          <button onClick={handleSubmit} className="button my-4">Create</button>
        </div>

        { postImgError && 
        <div className="absolute right-5 bottom-5 p-3 rounded-md border-b-4 border-red-400 text-black-bg font-semibold bg-white flex items-center">
          <AiOutlineInfoCircle className='text-md ' />
          <p className='ml-2 mr-4'>You need to select an image</p>
        </div> }
    </div>
  )
}

export default CreatePost