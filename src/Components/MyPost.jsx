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

      <AiOutlineDelete onClick={() => setVisible(true)} className="cursor-pointer  text-2xl p-3  hover:bg-black-bg hover:bg-opacity-40 text-white " />

      <img alt="" className="h-72 w-full object-cover cursor-pointer " src={post.cloudImg} />
    </div>
  );
};

export default MyPost;
