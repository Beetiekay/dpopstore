import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import { FaAngleRight, FaMoneyBill, FaStore, FaUser, } from 'react-icons/fa6';
import { FiLayers, FiSearch} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Notification from '../../component/Notification/Notification';
import Responsive from '../../component/Responsive/Responsive';
import Mobilnavbar from '../../component/mobilnavbar/Mobilnavbar';
import { CgLock, CgNotifications } from 'react-icons/cg';
import { MdDiscount, MdEmail } from 'react-icons/md';
import Togles from './toggle/Togles';
import Disable from './toggle/Disable';

const Settings = () => {
  return (
    <div className='flex bg-whitesmoke'>
        <Sidebar/>
        <div className='w-screen'>
        <header className='w-full flex justify-between h-16 p-4 bg-white -mt-1'>
        <div className='flex space-x-2'>
          <div className='sm:flex lg:hidden space-x-2'><Mobilnavbar/></div>
          <div><p className='font-semibold lg:text-lg text-xs'>Settings</p></div>
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
        {/* body */}
        <div className='lg:flex justify-between block lg:w-full w-screen h-[91vh] p-4 overflow-y-scroll'>
          {/*first body */}
          <div className='lg:w-[35%] w-full h-full'>
            {/*Advrt */}
           <div  className="flex justify-between w-[100%] h-[20vh] bg-seagreen rounded-lg mb-5 p-4 hover:scale-95">
            <div>
              <div className='flex gap-3 items-center mb-7'>
                <button className='p-2 bg-whitesmoke rounded-lg shadow-md outline-none text-seagreen'><FaMoneyBill className='text-lg'/></button>
                <p className='text-whitesmoke font-mono'>Your Plane</p>
              </div>
               <h1 className='text-3xl text-whitesmoke'>Premium</h1>
            </div>
            <div className='flex items-center'>
              <button className='p-2 text-whitesmoke outline-none rounded-lg border border-whitesmoke focus:bg-whitesmoke focus:text-seagreen'>Stop Subscribe</button>
            </div>
           </div>
            {/*Advrt */}
            <div className='w-[100%] h-[63vh] bg-white border border-gray shadow-md rounded-lg p-4 overflow-y-scroll'>

              <div className='flex justify-between cursor-pointer items-center hover:scale-95 hover:bg-lace rounded-lg p-4 mb-4 border-b border-gray'>
                <div><button className='p-4 bg-seagreen text-green bg-opacity-50 rounded-lg outline-none'><FiLayers/></button></div>
                <div>
                  <h1 className='mb-2 font-semibold'>Appearances</h1>
                  <p className='text-gray'>Dark mode,light mode,more</p>
                </div>
                <div><FaAngleRight className='text-lg text-seagreen'/></div>
              </div>
               
              <div className='flex justify-between cursor-pointer items-center hover:scale-95 hover:bg-lace rounded-lg p-4 mb-4 border-b border-gray'>
                <div><button className='p-4 bg-seagreen text-green bg-opacity-50 rounded-lg outline-none'><CgLock/></button></div>
                <div>
                  <h1 className='mb-2 font-semibold'>Security</h1>
                  <p className='text-gray'>Change Password.etc</p>
                </div>
                <div><FaAngleRight className='text-lg text-seagreen'/></div>
              </div>

              <div className='flex justify-between  cursor-pointer items-center hover:scale-95 hover:bg-lace rounded-lg p-4 mb-4 border-b border-gray'>
                <div><button className='p-4 bg-seagreen text-green bg-opacity-50 rounded-lg outline-none'><CgNotifications/></button></div>
                <div>
                  <h1 className='mb-2 font-semibold'>Notification</h1>
                  <p className='text-gray'>Notification in dashboard</p>
                </div>
                <div><FaAngleRight className='text-lg text-seagreen'/></div>
              </div>

              <div className='flex justify-between cursor-pointer items-center hover:scale-95 hover:bg-lace rounded-lg p-4 mb-4 border-b border-gray'>
                <div><button className='p-4 bg-seagreen text-green bg-opacity-50 rounded-lg outline-none'><MdEmail/></button></div>
                <div>
                  <h1 className='mb-2 font-semibold'>E-mail</h1>
                  <p className='text-gray'>Newslatter,and Subscribe</p>
                </div>
                <div><FaAngleRight className='text-lg text-seagreen'/></div>
              </div>

              <div className='flex justify-between cursor-pointer items-center hover:scale-95 hover:bg-lace rounded-lg p-4 mb-4 border-b border-gray'>
                <div><button className='p-4 bg-seagreen text-green bg-opacity-50 rounded-lg outline-none'><FaStore/></button></div>
                <div>
                  <h1 className='mb-2 font-semibold '>Store</h1>
                  <p className='text-gray'>More settings store</p>
                </div>
                <div><FaAngleRight className='text-lg text-seagreen'/></div>
              </div>

              <div className='flex justify-between cursor-pointer items-center hover:scale-95 hover:bg-lace rounded-lg p-4 mb-4'>
                <div><button className='p-4 bg-seagreen text-green bg-opacity-50 rounded-lg outline-none'><MdDiscount/></button></div>
                <div>
                  <h1 className='mb-2 font-semibold'>Discount</h1>
                  <p className='text-gray'>All about discount</p>
                </div>
                <div><FaAngleRight className='text-lg text-seagreen'/></div>
              </div>
            </div>
          </div>
          {/*first body */}

          {/*second body */}
          <div className='lg:w-[64%] w-full h-full bg-white border border-gray shadow-md rounded-lg p-6 overflow-auto'>

            <div className='space-y-2 border-b border-gray p-4'>
              <h1 className='text-2xl font-semibold'>Notifacation Settings</h1>
              <p className='text-gray text-sm'>Lorem ipsum dolor sit amet consectetur djsysu adipisicing elit. Hic, optio!</p>
            </div>
            <div className='flex justify-between flex-wrap overflow-y-scroll'>

              <div className='w-[47%] h-[70vh] border-b-8 border-white p-4'>
                <div className='p-2'>
                   <h1 className='font-semibold mb-2'>Email Notifications</h1>
                   <p className='text-sm text-gray'>Lorem ipsum dolor sit amet<br/>consectetor</p>
                </div>

                <div className='flex items-end h-[50vh]'>
                  <div className='p-2 border-t border-gray'>
                     <h1 className='font-semibold mb-2'>Push Notifications</h1>
                     <p className='text-sm text-gray'>Lorem ipsum dolor sit amet<br/>consectetor</p>
                  </div>
                </div>
              </div>

              <div className='w-[50%] h-[69vh] p-4'>

                <div className='flex gap-4 p-2 border-b border-gray mb-2'>
                  <div className='mt-2'><Togles/></div>
                  <div>
                    <h1 className='font-semibold mb-2'>News & Update</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet <br/>Consectur.</p>
                  </div>
                </div>
                  
                <div className='flex gap-4 p-2 border-b border-gray mb-2'>
                  <div className='mt-2'><Disable/></div>
                  <div>
                    <h1 className='font-semibold mb-2'>Tips</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet <br/>Consectur.</p>
                  </div>
                </div>
                 
                <div className='flex gap-4 p-2 border-b border-gray mb-2'>
                  <div className='mt-2'><Togles/></div>
                  <div>
                    <h1 className='font-semibold mb-2'>Message</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet <br/>Consectur.</p>
                  </div>
                </div>

                <div className='flex gap-4 p-2 border-b border-gray mb-2'>
                  <div className='mt-2'><Togles/></div>
                  <div>
                    <h1 className='font-semibold mb-2'>Order</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet <br/>Consectur.</p>
                  </div>
                </div>

                <div className='flex gap-4 p-2 border-b border-gray mb-2'>
                  <div className='mt-2'><Togles/></div>
                  <div>
                    <h1 className='font-semibold mb-2'>Comments</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet <br/>Consectur.</p>
                  </div>
                </div>

                <div className='flex gap-4 p-2 mb-2'>
                  <div className='mt-2'><Disable/></div>
                  <div>
                    <h1 className='font-semibold mb-2'>Ratings</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet <br/>Consectur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*second body */}
        </div>
        {/* body */} 
       </div>
    </div>
    
  )
}

export default Settings