import React from 'react'
import Accordion from './Accordion'
import { LuWallet } from "react-icons/lu";
import { FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Details = () => {
  return (
    <div className='w-full p-2'>
        {/* Begin Item */}
        <div>
          <div className='flex justify-between'>
            <div className='flex gap-2 font-sans mb-2'>
            <button className='bg-seagreen text-whitesmoke p-2 rounded-lg'><LuWallet className='text-xl'/></button>
             <h1 className='text-[20px] font-semibold'>Details Order</h1>
           </div>
           <Link to={"/Chat"}><button className='p-2 hover:bg-seagreen hover:text-white rounded-lg text-seagreen lg:hidden flex'><FaAngleRight className='text-lg'/></button></Link>
          </div>
          
          
          <div className='flex justify-between text-[15px] p-2 font-sans'>
            <p className='text-seagreen'>Order #1</p> <p>June 1, 2024, 08:22AM</p>
          </div>
        </div>
         <div><Accordion/></div>
       {/* End Item */}
    </div>
  )
}

export default Details