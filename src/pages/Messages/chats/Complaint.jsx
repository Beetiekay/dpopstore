import React from 'react'
import user1 from "../assets/p1.png"
import user2 from "../assets/p2.png"
import user3 from "../assets/p3.png"
import user4 from "../assets/p4.png"
import { Link } from 'react-router-dom'

const Complaint = () => {
  return (
    <div className='w-full'>
      <ul>
        <Link className='flex '>
            <li className='flex gap-3 px-7 p-2 hover:bg-lace rounded-lg'>
            <div className='flex justify-center items-center'>
            <button className='bg-orange p-2 rounded-lg'><img src={user1} className='w-12'/></button>
            </div>
            <div>
              <h1 className='font-semibold'>Michael B</h1>
              <p className='text-xs'>I place an order, but will it take longer?</p>
           </div>
           </li>
        </Link>

        <Link className='flex'>
            <li className='flex gap-3 px-7 p-2 hover:bg-lace rounded-lg'>
            <div className='flex justify-center items-center'>
            <button className='bg-orange p-2 rounded-lg'><img src={user2} className='w-12'/></button>
            </div>
            <div>
              <h1 className='font-semibold'>Janet</h1>
              <p className='text-xs'>I want to make changes to my sauce, I hope it</p>
           </div>
           </li>
        </Link>

        <Link className='flex'>
            <li className='flex gap-3 px-7 p-2 hover:bg-lace rounded-lg'>
            <div className='flex justify-center items-center'>
            <button className='bg-orange p-2 rounded-lg'><img src={user3} className='w-12'/></button>
            </div>
            <div>
              <h1 className='font-semibold'>Michael B</h1>
              <p className='text-xs'>I Failed to receive my order on time why</p>
           </div>
           </li>
        </Link>

        <Link className='flex'>
            <li className='flex gap-3 px-7 p-2 hover:bg-lace rounded-lg'>
            <div className='flex justify-center items-center'>
            <button className='bg-orange p-2 rounded-lg'><img src={user4} className='w-12'/></button>
            </div>
            <div>
              <h1 className='font-semibold'>Michael B</h1>
              <p className='text-xs'>No matter how many order am i going to make </p>
           </div>
           </li>
        </Link>
        
        <Link className='flex'>
            <li className='flex gap-3 px-7 p-2 hover:bg-lace rounded-lg'>
            <div className='flex justify-center items-center'>
            <button className='bg-orange p-2 rounded-lg'><img src={user1} className='w-12'/></button>
            </div>
            <div>
              <h1 className='font-semibold'>Michael B</h1>
              <p className='text-xs'>I place an order, but will it take longer?</p>
           </div>
           </li>
        </Link>

        <Link className='flex'>
            <li className='flex gap-3 px-7 p-2 hover:bg-lace rounded-lg'>
            <div className='flex justify-center items-center'>
            <button className='bg-orange p-2 rounded-lg'><img src={user1} className='w-12'/></button>
            </div>
            <div>
              <h1 className='font-semibold'>Michael B</h1>
              <p className='text-xs'>I place an order, but will it take longer?</p>
           </div>
           </li>
        </Link>
        </ul>
    </div>
  )
}

export default Complaint