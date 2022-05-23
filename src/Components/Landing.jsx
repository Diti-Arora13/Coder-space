import React from "react";
import { Link } from 'react-router-dom'

const Landing = ({ logged, firstBtn }) => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">

        <h1 className=" w-4/5 md:w-3/5 px-2 leading-tight gradient-text text-center font-bold-txt md:text-3xl text-2xl">Coder's most favourite place to hangout together</h1>

        <p className="my-8 w-4/5 md:w-3/6 text-center text-gray-text text-md">Coder_space let’s is a social media for programmers. Share anything with other fellow programmer and connect with them</p>

        <div className="flex">
          <Link className="bg-white text-black text-sm py-1 px-4 rounded-md" to={logged ? '/home' : '/signup'}>{firstBtn}</Link>
        </div>
      
    </div>
  );
};

export default Landing;
