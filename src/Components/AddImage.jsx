import React, { useRef, useEffect } from 'react'
import Axios from 'axios'

const AddImage = ({profileImg, setProfileImg, setLoading, loading }) => {
  let fileInput = useRef()

  const imageHandler = e => {
    const reader = new FileReader();

      reader.onload = () => {
        if(reader.readyState === 2){

        const formData = new FormData()
        formData.append('file', reader.result)
        formData.append('upload_preset', 'hk7ixu95')
        setLoading(true)
        Axios.post('https://api.cloudinary.com/v1_1/diti/image/upload', formData)
        .then(res => {
          setProfileImg(res.data.secure_url)
          setLoading(false)
        })
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }

  // setting the img in local Storage
  useEffect(() => localStorage.setItem('pfp', profileImg, [profileImg]))

    return (
      <div>
        <div>
          <img onClick={() => fileInput.current.click()} className={` ${loading &&  'opacity-50'} cursor-pointer h-24 w-24 rounded-full object-cover ml-20 mt-5 hover:opacity-50`} src={profileImg} alt="profieImage" />
        </div>
        <input className='invisible' ref={fileInput} type="file" accept="image/*" onChange={imageHandler} />

      </div>
    )
  }

export default AddImage
