import React from 'react'
import user1 from "../assets/p1.png"
import user2 from "../assets/p2.png"
import user3 from "../assets/p3.png"
import user4 from "../assets/p4.png"
import { Link } from 'react-router-dom'

const Sms = () => {
  return (
    <div className='w-full'>
     <ul>
        <Link to={"/Chat"} className='flex justify-between w-full'>
           <li className='flex w-full gap-3 px-7 p-2 hover:bg-lace rounded-lg'>
        <div className='flex justify-center items-center'>
            <button className='bg-orange p-2 rounded-lg'><img src={user1} className='w-12'/></button>
         </div>
        <div>
            <h1 className='font-semibold'>Michael B</h1>
            <p className='text-xs'>I place an order, but will it take longer?</p>
        </div>
        <div className='flex items-center'>
          <h1 className='flex items-center justify-center w-6 h-6 bg-seagreen text-white rounded-full font-semibold text-sm'>2</h1></div>
           </li>
        </Link>

        <Link className='flex justify-between w-full'>
           <li className='flex w-full gap-3 px-7 p-2 hover:bg-lace rounded-lg'>
        <div className='flex justify-center items-center'>
            <button className='bg-orange p-2 rounded-lg'><img src={user3} className='w-12'/></button>
         </div>
        <div>
            <h1 className='font-semibold'>Putri Adel</h1>
            <p className='text-xs'>I want to make changes to my sauce, I hope it</p>
        </div>
        <div className='flex items-center'>
          <h1 className='flex items-center justify-center w-6 h-6 bg-seagreen text-white rounded-full font-semibold text-sm'>2</h1></div>
           </li>
        </Link>

        <Link className='flex justify-between w-full'>
           <li className='flex w-full gap-3 px-7 p-2 hover:bg-lace rounded-lg'>
        <div className='flex justify-center items-center'>
            <button className='bg-orange p-2 rounded-lg'><img src={user2} className='w-12'/></button>
         </div>
        <div>
            <h1 className='font-semibold'>Janet</h1>
            <p className='text-xs'>I want to make changes to my sauce, I hope it</p>
        </div>
        <div className='flex items-center'>
          <h1 className='flex items-center justify-center w-6 h-6 bg-seagreen text-white rounded-full font-semibold text-sm'>2</h1></div>
           </li>
        </Link>

        <Link className='flex justify-between w-full'>
           <li className='flex gap-3 px-7 p-2 hover:bg-lace rounded-lg'>
           <div className='flex justify-center items-center'>
            <button className='bg-orange p-2 rounded-lg'><img src={user4} className='lg:w-8 w-10'/></button>
         </div>
           <div>
            <h1 className='font-semibold'>Risa Anggraini</h1>
            <p className='text-xs'>I want to make changes to my sauce....</p>
          </div>
          </li>
        </Link>

        <Link className='flex justify-between w-full'>
           <li className='flex w-full gap-3 px-7 p-2 hover:bg-lace rounded-lg'>
           <div className='flex justify-center items-center'>
            <button className='bg-orange p-2 rounded-lg'><img src={user4} className='lg:w-8 w-10'/></button>
         </div>
           <div>
            <h1 className='font-semibold'>Jonathan</h1>
            <p className='text-xs'>I want to make changes to my sauce....</p>
          </div>
           </li>
        </Link>

        <Link className='flex justify-between w-full'>
          <li className='flex gap-3 px-7 p-2 hover:bg-lace rounded-lg'>
           <div className='flex justify-center items-center'>
            <button className='bg-orange p-2 rounded-lg'><img src={user4} className='lg:w-8 w-10'/></button>
         </div>
           <div>
            <h1 className='font-semibold'>Tegar</h1>
            <p className='text-xs'>I want to make changes to my sauce....</p>
          </div>
           </li>
        </Link>

        <Link className='flex justify-between w-full'>
           <li className='flex w-full gap-3 px-7 p-2 hover:bg-lace rounded-lg'>
           <div className='flex justify-center items-center'>
            <button className='bg-orange p-2 rounded-lg'><img src={user4} className='lg:w-8 w-10'/></button>
         </div>
           <div>
            <h1 className='font-semibold'>Risa Anggraini</h1>
            <p className='text-xs'>I want to make changes to my sauce....</p>
          </div>
           </li>
        </Link>
     </ul>
    </div>
  )
}

export default Sms