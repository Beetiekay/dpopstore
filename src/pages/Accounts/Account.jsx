import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import { FaAngleDown, FaMobileScreenButton, FaThumbsUp, FaUser, } from 'react-icons/fa6';
import { FiLogOut, FiSearch} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Notification from '../../component/Notification/Notification';
import Responsive from '../../component/Responsive/Responsive';
import Mobilnavbar from '../../component/mobilnavbar/Mobilnavbar';
import { FcFeedback } from 'react-icons/fc';
import Average from './Charts/Average';
import Popup2 from './Alert/Popup2';
import Rcprogress from './Charts/Rcprogress';


const Account = () => {
  return (
    <div className='flex bg-whitesmoke'>
        <Sidebar/>
        <div className='w-screen'>
        {/* Account Header */}
        <header className='w-full flex justify-between h-16 p-4 bg-white -mt-1'>
        <div className='flex space-x-2'>
          <div className='sm:flex lg:hidden space-x-2'><Mobilnavbar/></div>
          <div><p className='font-semibold lg:text-lg text-xs'>Accounts</p></div>
          </div>  
           <div className='flex justify-around space-x-4'>
             {/*input container */}
             <div className='gap-2 bg-whitesmoke rounded-md lg:flex hidden items-center'>
              <button type='submit' className='flex items-center text-gray p-1'><FiSearch/></button>
              <div>
              <input type='search' name='search' placeholder='Search Anything..' className='bg-whitesmoke outline-none border-none'/></div>
            </div>
             {/*notificaton Btn */}
              <div><Notification/></div>
              {/*profile Btn*/}
              <Link to={"/Profile"}><button className='bg-whitesmoke p-2 rounded-md outline-none'><FaUser className='text-seagreen'/></button></Link>
              <div className='sm:flex lg:hidden'><Responsive/></div>
           </div>
        </header>
        {/* Account Header */}

        {/* body */}
        <div className='lg:flex justify-between block lg:w-full w-screen h-[91vh] p-4 overflow-y-scroll'>
          {/* Edit proile responsive */}
          <div className='block lg:hidden'>
             <input type='checkbox' className='peer absolute inset-x-0  z-10 cursor-pointer opacity-0'/>
            <div className='flex justify-center transition-transform duration-500 rotate-0 peer-checked:rotate-180'><FaAngleDown className='text-2xl text-seagreen animate-bounce'/></div>
            {/* Content */}
        <div className='absoluteb overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-full z-10'>
          <div className='lg:w-[30%] w-full h-full bg-white rounded-lg p-4 overflow-y-scroll'>

           <p className='text-lg font-bold font-sans mb-6'>Edit Profile</p>
           <div className='flex justify-center mb-6'>
            <div className='flex items-center gap-2'>
           <button className='flex justify-center items-center w-16 h-16 p-2 bg-seagreen text-green rounded-full bg-opacity-80 shadow-md outline-none'><FaUser className='text-xl'/></button>
           <div><Popup2/></div>
           <button className='p-1 hover:border-2 hover:border-gray rounded-lg font-semibold text-redish outline-none'>Remove</button>
           </div>
            </div>
         
           <div className='mb-5'>
          <div className='mb-1'><label className='font-bold'>Name</label></div>
          <div><button className='w-full p-3 border bg-whitesmoke text-gray text-sm text-left border-gray rounded-lg outline-none font-bold'>Dpopstudio</button></div>
           </div>
         
            <div className='mb-5'>
          <div className='mb-1'><label className='font-bold'>Phone Number</label></div>
          <div><button className='w-full bg-whitesmoke p-3 border text-gray text-sm text-left border-gray rounded-lg outline-none font-bold'>(406)555-0120</button></div>
            </div>

            <div className='mb-5'>
          <div className='mb-2'><label className='font-bold'>E-mail</label></div>
          <div><button className='w-full p-3 bg-whitesmoke border text-gray text-sm text-left border-gray rounded-lg outline-none font-bold'>Dpop@site.com</button></div>
            </div>

           <div className='mb-5'>
            <div className='mb-2'><label className='font-bold'>About Store</label></div>
            <div><button className='w-full p-3 bg-whitesmoke border text-gray text-sm text-left border-gray rounded-lg outline-none font-bold'>A shop that sell various kinds of</button></div>
           </div>
           
           <div className='mb-5'>
            <div className='mb-2'><label className='font-bold'>Store Address</label></div>
            <div><button className='w-full p-3 bg-whitesmoke border text-gray text-sm text-left border-gray rounded-lg outline-none font-bold'>4517 washington Ave Manchester,</button></div>
           </div>
           </div> 
            </div>

          </div>
           {/* Edit proile responsive */}
          {/* left c*/}
          <div className='lg:w-[67%] w-full h-full rounded-lg p-2 overflow-y-scroll'>

            {/*Tabs */}
            <div className='mb-5'>
              <ul className='flex gap-5 font-semibold'>
                <li className='p-2 hover:border-b-2 hover:text-seagreen cursor-pointer'>Store Account</li>
                <li className='p-2 hover:border-b-2 hover:text-seagreen cursor-pointer'>Internal Account</li>
              </ul>
            </div>
            {/*Tabs */}

            <div className='flex justify-between flex-wrap mb-5'>
              <button className='lg:w-[48%] w-full p-5 bg-white rounded-lg shadow-md outline-none hover:border-2 hover:border-x-seagreen '>
                <div className='flex gap-2 mb-4'>
                  <button className='p-2 bg-seagreen rounded-lg text-green bg-opacity-50'><FaThumbsUp/></button>
                  <p className='font-semibold'>Batch</p>
                </div>
                <h1 className='text-3xl font-bold text-left '>Pro Sales</h1>
              </button>

              <button className='lg:w-[48%] w-full lg:mt-0 mt-2 p-5 bg-white rounded-lg shadow-md outline-none hover:border-2 hover:border-x-seagreen '>
                <div className='flex gap-2 mb-4'>
                  <button className='p-2 bg-seagreen rounded-lg text-green bg-opacity-50'><FcFeedback className='text-lg'/></button>
                  <p className='font-semibold'>Feedback</p>
                </div>
                <div className='flex'><h1 className='text-3xl font-bold text-left '>4.9</h1><p className='text-xs font-semibold text-gray mt-3'>/Out of 5.0</p></div>
              </button>
            </div>
             {/* chart button */}
             <div className='flex justify-between flex-wrap mb-4'>
                <div className='lg:w-[48%] w-full h-[42vh] hover:border-2 hover:border-gray p-4 bg-white rounded-lg shadow-md outline-none'><Rcprogress/></div>
                <div className='lg:w-[48%] w-full h-[42vh] p-4 bg-white rounded-lg shadow-md mt-2 overflow-x-auto hover:border-2 hover:border-gray'><Average/></div>
             </div>
             {/* chart button */}

             <div className='w-full bg-white shadow-md rounded-lg p-4'>

              <div className='flex justify-between mb-6'>
               <div className='flex gap-2 items-center'>
                <button className='p-2 bg-seagreen text-green bg-opacity-40 rounded-lg'><FiLogOut className='text-xl'/></button>
                <p className='text-lg font-semibold'>Loging History</p>
                </div>
                <button className='p-1 border-2 border-seagreen text-seagreen font-semibold rounded-lg text-sm'><Link to={"/"}>Logout All</Link></button>
              </div>
               
              <div className='flex justify-between items-center mb-4 border-b border-gray h-16'>
                 <div className='flex gap-2'>
                  <button className='p-2 bg-seagreen text-green bg-opacity-40 rounded-lg'><FaMobileScreenButton className='text-xl'/></button>
                  <div>
                    <h1 className='text-sm font-semibold'>Iphone</h1>
                    <p className='text-gray text-sm'>Nov 23, 2024 at 08:00am</p>
                  </div>
                 </div>
                 <div className='text-sm text-seagreen font-bold'><Link to={"/"}>Logout</Link></div>
              </div>
              
              <div className='flex justify-between items-center mb-6 border-b border-gray h-16'>
                 <div className='flex gap-2'>
                  <button className='p-2 bg-seagreen text-green bg-opacity-40 rounded-lg'><FaMobileScreenButton className='text-xl'/></button>
                  <div>
                    <h1 className='text-sm font-semibold'>Website</h1>
                    <p className='text-gray text-sm'>Nov 23, 2024 at 08:00am</p>
                  </div>
                 </div>
                 <div className='text-sm text-seagreen font-bold'><Link to={"/"}>Logout</Link></div>
              </div>
               
              <div className='flex justify-between items-center mb-4 border-b border-gray h-16'>
                 <div className='flex gap-2'>
                  <button className='p-2 bg-seagreen text-green bg-opacity-40 rounded-lg'><FaMobileScreenButton className='text-xl'/></button>
                  <div>
                    <h1 className='text-sm font-semibold'>Android</h1>
                    <p className='text-gray text-sm'>Nov 23, 2024 at 08:00am</p>
                  </div>
                 </div>
                 <div className='text-sm text-seagreen font-bold'><Link to={"/"}>Logout</Link></div>
              </div>
               
              <div className='flex justify-between items-center mb-4'>
                 <div className='flex gap-2'>
                  <button className='p-2 bg-seagreen text-green bg-opacity-40 rounded-lg'><FaMobileScreenButton className='text-xl'/></button>
                  <div>
                    <h1 className='text-sm font-semibold'>Website</h1>
                    <p className='text-gray text-sm'>Nov 23, 2024 at 08:00am</p>
                  </div>
                 </div>
                 <div className='text-sm text-seagreen font-bold'><Link to={"/"}>Logout</Link></div>
              </div>

             </div>
          </div>
          {/* left c*/}

          {/* right c*/}
          <div className='lg:w-[30%] lg:block hidden w-full h-full bg-white rounded-lg p-4 overflow-y-scroll'>

            <p className='text-lg font-bold font-sans mb-6'>Edit Profile</p>
            <div className='flex justify-center mb-6'>
              <div className='flex items-center gap-2'>
                <button className='flex justify-center items-center w-16 h-16 p-2 bg-seagreen text-green rounded-full bg-opacity-80 shadow-md outline-none'><FaUser className='text-xl'/></button>
                <div><Popup2/></div>
                <button className='p-1 hover:border-2 hover:border-gray rounded-lg font-semibold text-redish outline-none'>Remove</button>
              </div>
            </div>

            <div className='mb-5'>
             <div className='mb-1'><label className='font-bold'>Name</label></div>
             <div><button className='w-full p-3 border bg-whitesmoke text-gray text-sm text-left border-gray rounded-lg outline-none font-bold'>Dpopstudio</button></div>
            </div>

            <div className='mb-5'>
             <div className='mb-1'><label className='font-bold'>Phone Number</label></div>
             <div><button className='w-full bg-whitesmoke p-3 border text-gray text-sm text-left border-gray rounded-lg outline-none font-bold'>(406)555-0120</button></div>
            </div>

            <div className='mb-5'>
             <div className='mb-2'><label className='font-bold'>E-mail</label></div>
             <div><button className='w-full p-3 bg-whitesmoke border text-gray text-sm text-left border-gray rounded-lg outline-none font-bold'>Dpop@site.com</button></div>
            </div>

            <div className='mb-5'>
             <div className='mb-2'><label className='font-bold'>About Store</label></div>
             <div><button className='w-full p-3 bg-whitesmoke border text-gray text-sm text-left border-gray rounded-lg outline-none font-bold'>A shop that sell various kinds of</button></div>
            </div>

            <div className='mb-5'>
             <div className='mb-2'><label className='font-bold'>Store Address</label></div>
             <div><button className='w-full p-3 bg-whitesmoke border text-gray text-sm text-left border-gray rounded-lg outline-none font-bold'>4517 washington Ave Manchester,</button></div>
            </div>
          </div>
          {/* right c*/}
        </div> 
        {/* body */}
       </div>
    </div>
  )
}

export default Account