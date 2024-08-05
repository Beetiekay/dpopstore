import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import Notification from '../../component/Notification/Notification';
import Responsive from '../../component/Responsive/Responsive';
import Mobilnavbar from '../../component/mobilnavbar/Mobilnavbar';
import { MdOutlineShowChart } from 'react-icons/md';
import Linechart2 from "../../component/Charts/Linechart2"
import Barchart2 from "../../component/Charts/Barchart2"
import { FaEllipsisVertical, FaAngleDown, FaFileExport, FaUser } from 'react-icons/fa6';
import { FiSearch} from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import Pagination from "../../component/Datatable/Tablepagination/Pagination"
import TableT from "./TableT"



const Transactions = () => {
  return (
    <div className='flex bg-whitesmoke'>
        <Sidebar/>
        <div className='w-screen'>
        {/* Trans header */}
        <header className='w-full flex justify-between h-16 p-4 bg-white -mt-1'>
        <div className='flex space-x-2'>
          <div className='sm:flex lg:hidden space-x-2'><Mobilnavbar/></div>
          <div><p className='font-semibold lg:text-lg text-xs'>Transaction</p></div>
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
         {/* Trans header */}

        {/* main container */}
        <div className='lg:min-w-max w-full h-[91vh] p-4 overflow-hidden overflow-y-scroll'>
          {/* Triple box */}
          <div className='flex justify-between flex-wrap w-full h-[40vh]'>
            {/* Linechart */}
            <div className='lg:w-[32%] w-full h-[36vh] lg:mt-0 mt-4 bg-white rounded-xl lg:overflow-hidden overflow-x-scroll'>
              <div className='flex px-4 pt-4 space-x-2 items-center'>
                <button className='p-2 bg-seagreen text-whitesmoke rounded-lg'><MdOutlineShowChart className='text-lg'/></button>
                <p className='font-semibold font-sans text-lg'>Transaction activity</p>
              </div>

              <div className='flex gap-2 px-4 pt-2 space-x-2 items-center'>
                <h1 className='text-3xl font-bold'>$90.984</h1>
                <p className='text-gray text-lg'>15.90<span className='text-dogles text-3xl'>~</span></p>
              </div>
                <div><Linechart2/></div>
             </div>
             {/* Linechart */}

               {/* Barchart */}
             <div className='lg:w-[32%] w-full lg:mt-0 mt-4 h-[36vh] bg-white rounded-xl lg:overflow-hidden overflow-x-scroll'>
             <div className='flex px-4 pt-4 space-x-2 items-center'>
                <button className='p-2 bg-seagreen text-whitesmoke rounded-lg'><MdOutlineShowChart className='text-lg'/></button>
                <p className='font-semibold font-sans text-lg'>Today Revenue</p>
              </div>

              <div className='flex gap-2 px-4 h-[12vh] pt-2 space-x-2 items-center relative z-10 bg-white'>
                <h1 className='text-3xl font-bold'>$103.00</h1>
                <p className='text-gray text-lg'>2.3<span className='text-dogles text-3xl'>~</span></p>
              </div>
              <div className='relative right-4 -top-6'><Barchart2/></div>
             </div>
             {/* Barchart */}

             {/* Balance */}
             <div className='lg:w-[32%] lg:mt-0 mt-4 w-full h-[36vh] bg-white rounded-xl'>
             <div className='px-4 pt-4 space-x-2'>
                  <p className='text-gray text-lg relative left-2' >Balance</p>
                  <h1 className='text-2xl font-bold font-sans'>$2.345.90</h1>
                </div>
               <div className='space-y-5 px-4 pt-4 '>
                 <div className=' bg-whitesmoke cursor-pointer hover:h-[10vh] transition-all'>
                     <p className='font-semibold font-sans text-gray mb-2'>Play with</p>
                     <div className='flex justify-between'>    
                     <div className='flex items-center space-x-2'><div className='w-5 h-5 bg-orange rounded-full'></div>
                     <p className='font-semibold'>Card 907636 *********</p></div>
                     <div className='cursor-pointer animate-bounce'><FaAngleDown/></div>
                     </div>  
                    </div>
                    <button className='w-full p-2 bg-seagreen text-white rounded-lg hover:bg-opacity-80'><Link to={"/Width draw"}>Withdraw Money</Link></button> 
                </div> 
             </div>
             {/* balance */}
          </div>
          {/* Triple box */}
          
          {/*table c */}
          <div className='w-full bg-white p-8 rounded-md lg:mt-0 mt-[35rem] overflow-x-auto'>
            {/*table header */}
            <div className='flex justify-center'>
             <div className='flex justify-between w-full'>
              {/*table button */}
               <div className='lg:flex justify-between w-full block space-x-2'>
                <div className='flex gap-2'>
                  {/* search container */}
                 <div className='lg:w-auto flex p-2 justify-center items-center space-x-1 rounded-lg border'>
                 <span><FaSearch className='text-gray text-xl cursor-pointer'/></span>
                  <div><input type='search' placeholder=' Search Transactions' className='bg-white outline-none border-none bg-none'/></div>
                  </div>
                {/* search container */}

                <div className='lg:flex hidden items-center p-2 border rounded-lg font-semibold space-x-1 cursor-pointer'>
                  <span><FaEllipsisVertical className='text-lg cursor-pointer'/></span>
                  <p>Bulk Action</p>
                </div>

                <div className='lg:flex hidden items-center p-2 border rounded-lg font-semibold cursor-pointer'>
                  <span><FaFileExport/></span><p>Export Default</p>
                </div>
                </div>
                
                 {/*table button */}
                 <div className='space-x-4 flex items-center'>
                  <button className='p-2 focus:bg-seagreen focus:text-whitesmoke rounded-lg font-semibold text-sm border-none outline-none'>Day</button>
                  <button className='p-2 focus:bg-seagreen focus:text-whitesmoke rounded-lg font-semibold text-sm border-none outline-none'>Week</button>
                  <button className='p-2 focus:bg-seagreen focus:text-whitesmoke rounded-lg font-semibold text-sm border-none outline-none'>Month</button>
                  <button className='p-2 focus:bg-seagreen focus:text-whitesmoke rounded-lg font-semibold text-sm border-none outline-none'>Year</button>
                 </div>
               </div>
            </div>
            </div>
             {/*table header */}
            <div>
              <ul className='font-semibold font-sans flex space-x-8 p-4 lg:text-base text-xs'>
                <Link className='p-1 hover:border-b-2 hover:border-seagreen' to={"/transactions1"}><li>All Transaction</li></Link>
                <Link className='p-1 hover:border-b-2 hover:border-seagreen' to={"/transactions1"}><li>Income</li></Link>
                <Link className='p-1 hover:border-b-2 hover:border-seagreen' to={"/transactions1"}><li>Pending</li></Link>
                <Link className='p-1 hover:border-b-2 hover:border-seagreen' to={"/transactions1"}><li>Outcome</li></Link>
              </ul>
            </div>
            <div>
              <div><TableT/>
              <div className='mt-3'><Pagination/></div>
              </div>
           </div>
           </div>
          {/*table c */}
        </div> 
         {/* main container */}
       </div>
    </div>
  )
}

export default Transactions