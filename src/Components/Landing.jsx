import React from "react";
import HeroImg from '../images/hero-image.png'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="flex h-5/6 items-center justify-center">
      <img alt="Hero image" src={HeroImg} />

      <div className="px-12">
        <h1 className="text-left font-medium text-xl">Coder's most favourite place to hangout</h1>

        <p className="my-2 mb-6 text-gray text-sm">A platform made for coders to connect and share anyything!!</p>

        <Link to="/signup" className="button">Sign up</Link>
        <Link to="/login" className="button ml-10">Log in</Link>
      </div>
    </div>
  );
};

export default Landing;
