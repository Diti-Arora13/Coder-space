import React, {useRef} from 'react'

const AddImage = ({profileImg, setProfileImg}) => {
  let fileInput = useRef()

  const imageHandler = e => {
    const reader = new FileReader();
    reader.onload = () => {
    if(reader.readyState === 2){
      setProfileImg(reader.result)
    }
  }
  reader.readAsDataURL(e.target.files[0])
}

    return (
      <div>
        <div>
          <img onClick={() => fileInput.current.click()} className="hover:opacity-50 cursor-pointer h-24 w-24 rounded-full object-cover ml-20 mt-5" src={profileImg} alt="pprofieImage" />
        </div>
        <input className='invisible' ref={fileInput} type="file" accept="image/*" onChange={imageHandler} />

      </div>
    )
  }

export default AddImage
