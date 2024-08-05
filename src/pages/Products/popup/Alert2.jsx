import React from 'react'
import {IoMdCloseCircle, IoMdCloudUpload, IoMdHome} from "react-icons//io";
import long1 from "../assets/long1.jpg"
import { Link } from 'react-router-dom';



export default function Alert2({Visible, onClose}) {
    if (!Visible) return null;

  return(
    <div className='w-full h-full fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50'>
      <div className='w-full flex justify-center items-center'> 

       <div className='lg:w-[30%] w-[50%] bg-white p-5'>
         <div className='flex justify-between items-center mb-4'>
            <h1 className='font-bold'>Add Product/Edit Product</h1>
            <div onClick={onClose}><IoMdCloseCircle className='text-xl cursor-pointer text-seagreen'/></div>
         </div>
           
           <div className='mb-2'>
            <label className='font-semibold'>Name Product</label>
            <div><input type='text' className='w-full outline-none bg-whitesmoke rounded-lg shadow p-2 border border-gray'/></div>
           </div>

           <div className='flex justify-between items-center flex-wrap mb-4'>
             <div>
              <div><label className='font-semibold'>Category</label></div>
              <button className='outline-none lg:p-2 p-0 border border-gray rounded-lg bg-whitesmoke font-semibold'>
                <select className='outline-none bg-whitesmoke'>
                  <option>Choose Category</option>
                  <option>Haircare</option>
                  <option>Bodycare</option>
                  <option>SkinCare</option>
                </select>
              </button>
             </div>

             <div>
              <div><label className='font-semibold'>Price</label></div>
              <button className='outline-none p-2 border border-gray rounded-lg bg-whitesmoke font-semibold'>
                <h1>$23.00</h1>
              </button>
             </div>
             </div>

             <div className='w-full mb-4'>
                <div><label className='font-semibold'>About Product</label></div>
                <button className='flex justify-start w-full outline-none p-2 border border-gray rounded-lg text-gray bg-whitesmoke font-semibold'>
                  <h1>Bodycare is healthy</h1>
                </button>
             </div>

             <div className='mb-4'>
              <div className='mb-2'><label className='font-bold'>Upload Image</label></div>

              <div className='flex'>
                <button><img src={long1} className='w-[25%] rounded-lg'/></button>
                <button className='relative lg:right-52 lg:flex hidden justify-center items-center w-[40%] h-[17vh] border border-gray p-2 rounded-lg'><IoMdCloudUpload className='text-xl text-seagreen'/></button>
              </div>
           </div>

           <div className='flex justify-between items-center flex-wrap'>
             <button onClick={onClose} className='p-2 border border-seagreen w-44 rounded-lg focus:bg-seagreen focus:text-whitesmoke outline-none font-semibold'><h1>Cancel</h1></button>
             <Link to={"/Save"}><button className='p-2 border outline-none border-seagreen w-44 rounded-lg focus:bg-seagreen focus:text-whitesmoke font-semibold'><h1>Save</h1></button></Link>
           </div>
       </div>
      </div>      
    </div>
  )};