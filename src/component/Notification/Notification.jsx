import { useState } from 'react';
import { FaBell, FaCube, FaCubes, FaPiggyBank, } from 'react-icons/fa6';
import {IoMdCloseCircle} from "react-icons//io";


const Notification = () => {
const [open, setOpen] = useState(false);


  return (
    <div>
       <div>
              <button className='bg-whitesmoke p-2 rounded-md h-full outline-none tracking-wider'><FaBell className='text-gray hover:opacity-50' onClick={() => setOpen(!open)}/></button>
              <div className='absolute animate-ping bg-redish w-2 h-2 rounded-full top-5 border border-whitesmoke ml-4'></div> 
              {
                open && (
              <div className='bg-white p-4 lg:w-[22%] w-72 shadow-xl absolute top-16 right-8 lg:right-16 z-30 rounded-md'>
               <ul className='space-y-5'>
                <div className='flex justify-between mb-5 p-2 border-b border-gray'><li className='font-semibold text-lg'>Notification</li>
                <div className='cursor-pointer' onClick={() => setOpen(false)}><IoMdCloseCircle className='text-2xl text-redish'/>
                </div></div>
                  <li className='flex p-2 gap-2 text-sm cursor-pointer rounded hover:bg-lace bg-white mt-2'>
                    <div className='p-2 h-8 bg-whitesmoke rounded-md'><FaCube className='text-base text-seagreen'/></div> 
                    <div>
                      <h2 className='text-sm font-semibold'>Order Received</h2>
                      <p className='text-xs'>The latest order has been received. please check and process it</p>
                    </div>
                  </li>

                  <li className='flex p-2 gap-2 text-sm cursor-pointer rounded hover:bg-lace bg-white mt-2'>
                    <div className='p-2 h-8 bg-whitesmoke rounded-md'><FaCube className='text-base text-seagreen'/></div> 
                    <div>
                      <h2 className='text-sm font-semibold'>Order Received</h2>
                      <p className='text-xs'>The latest order has been received. please check and process it</p>
                    </div>
                  </li>

                  <li className='flex p-2 gap-2 text-sm cursor-pointer rounded hover:bg-lace bg-white mt-2'>
                    <div className='p-2 h-8 bg-whitesmoke rounded-md'><FaCubes className='text-base text-seagreen'/></div> 
                    <div>
                      <h2 className='text-sm font-semibold'>Complaint</h2>
                      <p className='text-xs'>Check Your order! There is problem with the customer</p>
                    </div>
                  </li>

                  <li className='flex p-2 gap-2 text-sm cursor-pointer rounded hover:bg-lace bg-white mt-2'>
                    <div className='p-2 h-8 bg-whitesmoke rounded-md'><FaPiggyBank className='text-base text-seagreen'/></div> 
                    <div>
                      <h2 className='text-sm font-semibold'>Payment</h2>
                      <p className='text-xs'>Your Transaction is being processed by us. wait 3-2 for disbursement in your account</p>
                    </div>
                  </li>
               </ul>
              </div>        
                )}   
        </div>
    </div>
  )
}

export default Notification;