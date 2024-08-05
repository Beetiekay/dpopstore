import React from 'react'
import logo from "../../Favicon/Favicon.png";
import { FaAnglesLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-whitesmoke'>
      <div>
        <img src={logo} className='w-40 pb-2 rounded-full flex items-center'/>
        <h1 className='text-center pb-4 font-semibold text-2xl text-seagreen'>dpopstore</h1>
        <Link to={"/Signin"} className='flex justify-center'>
        <button className='flex justify-center w-32 p-2 rounded-md border border-seagreen text-seagreen hover:gap-2'>
        <FaAnglesLeft className='flex mt-1 text-xl '/>
        <h2 className='text-xl'>REGISTER</h2>
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Welcome