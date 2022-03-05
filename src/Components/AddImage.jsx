import React, {useState, useRef} from 'react'

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
          <img onClick={() => fileInput.current.click()} className="hover:opacity-50 cursor-pointer h-24 w-24 rounded-full object-cover" src={profileImg} alt="pprofieImage" />
        </div>
        <input className='invisible' ref={fileInput} type="file" accept="image/*" onChange={
          (e) => {
          imageHandler(e);
          }} />

      {/* <button onClick={} className='button'>create</button> */}
      </div>
    )
  }
// onClick={() => changeProfielImg(img)}

export default AddImage
