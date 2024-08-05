import React from 'react'
import { Link } from 'react-router-dom'
import {FcGoogle} from "react-icons/fc";
import Password from '../../component/Password/Password'

const Signin = () => {
  
  return (
    <div>
        
        <div className='w-full h-screen flex justify-center items-center bg-seagreen overflow-x-auto'>
          <div className='bg-white p-9 h-auto rounded-md '>
            <h1 className='text-4xl font-semibold mb-5 text-seagreen font-sans'>Welcome Back!</h1>
            <form action="">
            <div className='space-y-2 mb-2'>
              <label for="name" className='font-semibold'>username</label>
              <br/>
              <input type='name' name='username' className='rounded-md border border-seagreen p-1 w-full'/>
            </div>
             
             <div className='space-y-2'>
              <label for="password" className='font-semibold'>password</label>
              <Password/>
             </div>
             
              <Link to={"/forgot password"} className='font-semibold text-gray'>forgot password ?</Link>

               <div className='flex w-full mt-4 mb-10'>
               <Link className='w-full p-2 bg-whitesmoke'><button type='submit' className='p-2 w-full bg-seagreen font-semibold text-whitesmoke'><Link to={"/Dashboard"}>Sign in</Link></button></Link>
               <FcGoogle color="red" className='text-2xl mt-4'/>
               </div>
               
               <div className='text-xs font-semibold flex justify-center space-x-1'>
                <p>Don't have an account?</p>
                <Link to={"/Signup"} className='text-gray'>Create account</Link>
               </div>
            </form>
          </div>
        </div>
       
    </div>
  )
}

export default Signin