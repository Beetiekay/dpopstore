import React from 'react'
import {IoMdCloseCircle, IoMdCloudUpload, IoMdHome} from "react-icons//io";



export default function Alert2({Visible, onClose}) {
    if (!Visible) return null;

  return(
    <div className='w-full h-full fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50'>
      <div className='w-full flex justify-center items-center'> 
          <div className='lg:w-[35%] w-[80%] h-[50vh] bg-white p-4'>

            <div className='flex justify-between items-center mb-4'>
              <p className='font-bold font-sans text-lg'>Change Pictures</p>
              <div onClick={onClose} className='cursor-pointer'><IoMdCloseCircle className='text-2xl text-seagreen'/></div>
            </div>

            <div className='flex justify-center items-center w-full border border-seagreen h-[35vh] mt-10'>
               <div>
                <div className='flex justify-center'>
                  <div className='absolute ml-44 opacity-0'><input type='file' className='p-5'/> </div>
                  <button className='p-3 bg-seagreen bg-opacity-40 text-green outline-none rounded-full'><IoMdCloudUpload className='text-4xl'/></button>
                </div>
                <p className='text-gray font-bold'>Upload or drag your image</p>
               </div>
            </div>
          </div>
      </div>      
    </div>
  )};