import React, { useState } from "react";
import ConfirmDelete from './ConfirmDelete';
import { AiOutlineDelete } from 'react-icons/ai';

const MyPost = ({ post,  onDelete }) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="bg-gray rounded-md mx-4 w-1/3 mt-5 overflow-hidden">
      { visible && 
        <ConfirmDelete visible={visible} setVisible={setVisible} post={post} onDelete={onDelete} />
      }

      <AiOutlineDelete onClick={() => setVisible(true)} className="cursor-pointer  text-xl text-white ml-2 my-2 " />

      <img alt="" className="h-auto w-full object-cover cursor-pointer mt-4" src={post.cloudImg} />
    </div>
  );
};

export default MyPost;
