import { useState } from 'react';
import { FiSearch, } from 'react-icons/fi';
import {IoMdCloseCircle} from "react-icons/io";


const Responsive = () => {
const [open, setOpen] = useState(false);


  return (
    <div>
       <div>
              <button className='bg-whitesmoke p-2 rounded-md h-full outline-none tracking-wider'><FiSearch className='text-gray hover:opacity-50' onClick={() => setOpen(!open)}/></button>
              {
                open && (
              <div className='flex items-center bg-white p-4 h-32 w-60 shadow-xl absolute top-16 right-16 z-10'>
               <ul>
                <li className='flex justify-end mb-2'><div className='cursor-pointer' onClick={() => setOpen(false)}><IoMdCloseCircle className='text-2xl text-redish'/></div></li>
                 <li className='lg:w-[20vw] w-[30vh]'>
                  <div className='flex gap-2 bg-whitesmoke p-1 mb-4'>
                  <button type='submit' className='flex items-center text-gray'><FiSearch/></button>
                  <div className='sm:flex hidden sm:w-full w-full'>
                  <input type='search' name='search' placeholder='Search Anything..' className='bg-whitesmoke outline-none border-none'/></div>
                  </div>
                  <button className='flex justify-center w-full text-lg p-1 bg-seagreen text-whitesmoke rounded-md'>Submit</button>
                 </li>
               </ul>
              </div>        
                )}   
        </div>
    </div>
  )
}

export default Responsive;