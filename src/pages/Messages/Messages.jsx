import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import { FaUser, } from 'react-icons/fa6';
import { FiSearch} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Notification from '../../component/Notification/Notification';
import Responsive from '../../component/Responsive/Responsive';
import Mobilnavbar from '../../component/mobilnavbar/Mobilnavbar';
import Chatsusers from './chats/Chatsusers';
import Chat from './chats/Chat';
import Details from './chats/Details';

const Messages = () => {
  return (
    <div className='flex bg-whitesmoke'>
        <Sidebar/>
        <div className='w-screen'>
        {/* header */}
        <header className='w-full flex justify-between h-16 p-4 bg-white -mt-1'>
        <div className='flex space-x-2'>
          <div className='sm:flex lg:hidden space-x-2'><Mobilnavbar/></div>
          <div><p className='font-semibold lg:text-lg text-xs'>Messages</p></div>
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
        {/* header */}
        {/* main container */}
        <div className='flex justify-between w-full h-[91vh] p-4 overflow-y-scroll'>
          {/* message c*/}
          <div className='flex justify-center lg:w-[80%] w-full h-full'>
          {/* message */}
          <div className='lg:w-[48%] w-full h-full p-2 bg-white rounded-lg border-8 border-whitesmoke overflow-y-scroll overflow-x-auto '><Chatsusers/></div>
          {/* message */}
          {/* chat */}
          <div className='lg:block hidden w-[60%]  h-full rounded-lg border-8 border-whitesmoke'><Chat/></div>
          {/* chat */}
          </div>
          {/* message c*/}

          {/* Details Order */}
          <div className='lg:block hidden w-[34%] h-full bg-white rounded-lg border-8 border-whitesmoke'><Details/></div>
          {/* Details Order */}
        </div> 
        {/* main container */}
       </div>
    </div>
  )
}

export default Messages