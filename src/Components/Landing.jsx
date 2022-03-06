import React from "react";
import HeroImg from '../images/hero-image.png'
import { Link } from 'react-router-dom'

const Landing = ({logged, firstBtn, secondBtn}) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <img alt="Hero Img" src={HeroImg} />

      <div className="px-12">
        <h1 className="text-left font-medium text-xl">Coder's most favourite place to hangout</h1>

        <p className="my-2 mb-6 text-gray text-sm">A platform made for coders to connect and share anyything!!</p>

        <Link className="button" to={logged ? '/home' : '/signup'}>{firstBtn}</Link>
        <Link className="button ml-10" to={logged ? '/createPost' : '/login'}>{secondBtn}</Link>
      </div>
    </div>
  );
};

export default Landing;
