import React, { useState } from 'react'
import user1 from "../assets/p1.png"
import emoji from "../assets/emoji.png"
import { FaEllipsisVertical } from 'react-icons/fa6'
import {CiCamera, CiMicrophoneOn} from "react-icons/ci"
import { CgFileDocument } from 'react-icons/cg'
import { BsSend } from "react-icons/bs"
import { Link } from 'react-router-dom'


const Chat = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='lg:p-0 p-5'>
        {/* Chat header */}
        <header className='flex justify-between items-center h-12 w-full p-2 bg-white shadow-sm'>
         <div className='flex justify-center items-center gap-2'>
            <button className='bg-orange p-1 rounded-lg'><img src={user1} className='w-6'/></button>

            <aside>
                <h1 className='text-sm font-semibold'>Michael B</h1>
                <p className='text-xs font-sans'>Custumer</p>
            </aside>
         </div>
          
        <div>
          <button>
          <div><FaEllipsisVertical onClick={() => setOpen(!open)}/></div>
          {
            open &&(
              <ul className='absolute w-32 text-sm bg-white shadow-md overflow-hidden -ml-32 p-2 mt-5 lg:hidden block'>
              <Link to={"/Details"} className='text-start font-semibold'><li className='hover:bg-seagreen hover:text-white p-2'>Details Order</li></Link>
              <Link to={"/Messages"} className='text-start font-semibold '><li className='hover:bg-seagreen hover:text-white p-2'>Back</li></Link>
             </ul>
            )
          }
          
         </button>
        </div>
         
        </header>
        {/* Chat header */}

        {/* Chat */}
        <div className='lg:h-[65vh] h-[80vh] overflow-y-scroll mb-2 lg:overflow-x-auto'>
            <div className='flex justify-center p-2'>
                <button className='p-2 bg-white text-gray text-xs font-semibold font-sans rounded-lg shadow-md'>Yesterday</button>
            </div>
            
            <div>
                 {/*Text  right */}
                      <div className='space-y-2'>
                    <p className='w-44 bg-lace p-2 text-sm rounded-lg'>
                        Hi, I want to Ask how is my team?
                    </p>

                    <p className='w-52 bg-lace p-2 text-sm rounded-lg'>
                        I found it here, it hasn't been sent, even though it has passed the maximum date,
                        Please let me know!
                    </p>
                    <p className='text-xs'>06:30pm<span className='ml-1 font-semibold'>Michael B</span></p>
                      </div>
                   {/*Text  right */}

                   {/* Text left */}
                    <div className='flex justify-end'>
                      <div>
                       <p className='w-56 bg-white p-2 text-sm rounded-lg'>
                        Sorry, the goods have been delivered to the courier, the update maybe late default 
                        to the large amount of interest on 12.12
                       </p>
                      <p className='flex justify-end text-xs'>06:31pm<span className='ml-1 font-semibold'>You</span></p> 
                      </div>  
                    </div>
                     {/* Text left */}
                    
                    {/*Text  right */}
                       <div className='space-y-2'>
                       <p className='w-44 bg-lace p-2 text-sm rounded-lg'>
                        Okay, thank you
                      </p>
                      <p className='text-xs'>06:32pm<span className='ml-1 font-semibold'>Michael B</span></p>
                       </div>
                    {/*Text  right */}

                    {/* Text left */}
                    <div className='flex justify-end mb-5'>
                      <div>
                        <div><img src={emoji} className='w-16'/></div>
                        <p className='flex justify-end text-xs'>06:31pm<span className='ml-1 font-semibold'>You</span></p>
                      </div> 
                    </div>
                    {/* Text left */}
                 </div>
         </div>
         {/* Chat */}

        {/* Type button */}
          <form action='' className='flex justify-between items-center w-full p-1 bg-white rounded-lg shadow-lg'>
                   <div>
                    <input type='text' placeholder=' Type a Notes.....' className='w-full p-2 outline-none bg-white'/>
                  </div>
                   <ul className='flex space-x-5'>
                       <li className='hover:text-xl text-lg cursor-pointer text-gray hover:text-black'><CiCamera/></li>
                       <li className='hover:text-xl text-lg cursor-pointer text-gray hover:text-black'><CiMicrophoneOn/></li>
                       <li className='hover:text-xl text-lg cursor-pointer text-gray hover:text-black'><CgFileDocument/></li>
                   </ul>
                     <button type='submit' className='p-3 bg-seagreen text-white rounded-lg focus:bg-opacity-75'>
                     <BsSend className='text-xl'/>
                    </button>
           </form>
        {/* Type button */}
    </div>
  )
}

export default Chat