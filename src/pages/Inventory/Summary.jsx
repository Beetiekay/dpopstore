import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import { FaEllipsisVertical, FaFileExport, FaUser, } from 'react-icons/fa6';
import { FiSearch} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Notification from '../../component/Notification/Notification';
import Responsive from '../../component/Responsive/Responsive';
import Mobilnavbar from '../../component/mobilnavbar/Mobilnavbar';
import { FaSearch } from 'react-icons/fa';
import Table from '../../component/Datatable/Table';
import Pagination from '../../component/Datatable/Tablepagination/Pagination';

const Summary = () => {
  return (
    <div className='flex bg-whitesmoke'>
        <Sidebar/>
    <div className='w-screen'>
        {/*  Header */}
        <header className='w-full flex justify-between h-16 p-4 bg-white -mt-1'>
        <div className='flex space-x-2'>
          <div className='sm:flex lg:hidden space-x-2'><Mobilnavbar/></div>
          <div><p className='font-semibold lg:text-lg text-xs'>Order Summary</p></div>
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
        {/*  Header */}

        <div className='lg:w-full w-screen h-[91vh] p-4 overflow-hidden'>
          {/* Main container */}
        <main className='w-full h-full bg-white p-5 rounded-md'>

          {/*table header */}
          <div className='flex justify-center'>
            <div className='flex justify-between w-[87%]'>
            {/* search container */}
             <div className='lg:w-auto w-full flex p-2 justify-center items-center space-x-1 rounded-lg border'>
              <span><FaSearch className='text-gray text-xl cursor-pointer'/></span>
              <div><input type='search' placeholder=' Search Transactions' className='bg-white outline-none border-none bg-none'/></div>
             </div>
              {/* search container */}

              {/*table button */}
               <div className='lg:flex hidden space-x-2'>
                <div className='flex  items-center p-2 border rounded-lg font-semibold space-x-1 cursor-pointer'>
                  <span><FaEllipsisVertical className='text-lg cursor-pointer'/></span>
                  <p>Bulk Action</p>
                </div>

                <div className='flex items-center p-2 border rounded-lg font-semibold cursor-pointer'>
                  <span><FaFileExport/></span><p>Export Default</p>
                </div>
                 {/*table button */}
               </div>
           </div>
           </div>
            {/*table header */}

            {/*table data */}
             <div className='w-full h-full lg:overflow-y-scroll overflow-x-auto'>
              <Table/>
               <div><Pagination/></div>
             </div>    
            {/*table data */}
          </main>
           {/* Main container */}
        </div> 
       </div>
    </div>
  )
}

export default Summary;