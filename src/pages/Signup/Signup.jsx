import React from 'react'
import { Link } from 'react-router-dom'
import {FcGoogle} from "react-icons/fc";
import Password from '../../component/Password/Password'

const Signin = () => {
  
  return (
    <div>
        <div className='w-full h-screen flex justify-center items-center bg-seagreen overflow-x-auto'>
          <div className='bg-white p-9 h-auto rounded-md'>
            <h1 className='text-3xl font-semibold mb-2 text-seagreen font-sans'>Join Together Ease<br/> Of Sales</h1>
            <form action=''>
            <div className='space-y-1 mb-2'>
              <label for="name" className='font-semibold'>username</label>
              <br/>
              <input type='name' name='username' className='rounded-md border border-seagreen p-1 w-full'/>
            </div>

            <div className='space-y-1 mb-2'>
              <label for="name" className='font-semibold'>E-mail</label>
              <br/>
              <input type='email' name='email' className='rounded-md border border-seagreen p-1 w-full'/>
            </div>

            <div className='space-y-1 mb-2'>
              <label for="name" className='font-semibold'>phone number</label>
              <br/>
              <input type='phone number' name='phone number' className='rounded-md border border-seagreen p-1 w-full'/>
            </div>
             
             <div className='space-y-1'>
              <label for="password" className='font-semibold'>password</label>
              <Password/>
             </div>
             
               <div className='flex w-full mt-2 mb-5'>
              <Link to={"/Dashboard"} className='w-full'><button type='submit' className='p-2 w-full bg-seagreen font-semibold text-whitesmoke'>Sign up</button></Link>
               <Link className='p-2 bg-whitesmoke'><FcGoogle color="red" className='text-2xl'/></Link>
               </div>
               
               <div className='text-xs font-semibold flex justify-center space-x-1'>
                <p>Have an account?</p>
                <Link to={"/"} className='text-gray'>login Now</Link>
               </div>
            </form>
          </div>
        </div>
       
    </div>
  )
}

export default Signin