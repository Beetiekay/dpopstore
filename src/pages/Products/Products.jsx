import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import { FaUser, } from 'react-icons/fa6';
import { FiSearch} from 'react-icons/fi';
import { FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { RiLoader3Fill } from "react-icons/ri"
import Notification from '../../component/Notification/Notification';
import Responsive from '../../component/Responsive/Responsive';
import Mobilnavbar from '../../component/mobilnavbar/Mobilnavbar';
import Progbar from './Progbar/Progbar';
import Tableuct from './Table/Tableuct';
import Detailsm from './Table/DetailsM/Detailsm';


const Products = () => {
  return (
    <div className='flex bg-whitesmoke'>
        <Sidebar/>
        <div className='w-screen'>
        <header className='w-full flex justify-between h-16 p-4 bg-white -mt-1'>
        <div className='flex space-x-2'>
          <div className='sm:flex lg:hidden space-x-2'><Mobilnavbar/></div>
          <div><p className='font-semibold lg:text-lg text-xs'>Products</p></div>
          <div className='flex lg:hidden'><Detailsm/></div>
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
        <div className='lg:w-full w-screen h-[91vh] p-4 overflow-hidden'>
          <div className='w-full h-full flex justify-between'>

            {/* Filter */}
            <div className='w-[22%] h-full bg-white rounded-lg p-4 overflow-y-auto lg:block hidden'>
              <div className='flex justify-between mb-2'>
                <h1 className='font-bold text-xl'>Filter By</h1>
                <button className='p-2 bg-seagreen text-white rounded-lg'><RiLoader3Fill className='text-lg hover:rotate-45'/></button>
              </div>

                {/* Checkbox */}
                <div className='relative w-full overflow-hidden mb-5 border-b border-gray p-2'>
                <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-8 opacity-0 z-10 cursor-pointer'/>
                <div>
                  <h1 className='font-semibold text-lg'>Category</h1>
                </div>

                {/* Arrow*/}
                 <div className='absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180'><FaAngleDown/></div>

                 {/* Content */}
                 <div className='overflow-hidden transition-all duration-500 max-h-56 peer-checked:max-h-0 mt-2 space-y-2'>
                  <div className='flex gap-2'>
                    <span><input type='checkbox'/></span>
                    <p className='text-sm'>Category 1</p>
                  </div>

                  <div className='flex gap-2'>
                    <span><input type='checkbox'/></span>
                    <p className='text-sm'>Category 2</p>
                  </div>

                  <div className='flex gap-2'>
                    <span><input type='checkbox'/></span>
                    <p className='text-sm'>Category 3</p>
                  </div>

                  <div className='flex gap-2'>
                    <span><input type='checkbox'/></span>
                    <p className='text-sm'>Category 4</p>
                  </div>
                 </div>
                </div>

                  {/* Checkbox */}
                <div className='relative w-full overflow-hidden mb-5 border-b border-gray p-2'>
                <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-8 opacity-0 z-10 cursor-pointer'/>
                <div>
                  <h1 className='font-semibold text-lg'>Brand</h1>
                </div>

                {/* Arrow*/}
                 <div className='absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180'><FaAngleDown/></div>

                 {/* Content */}
                 <div className='overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-56 mt-2 space-y-2'>
                  <div className='flex gap-2'>
                    <span><input type='checkbox'/></span>
                    <p className='text-sm'>Brand A</p>
                  </div>

                  <div className='flex gap-2'>
                    <span><input type='checkbox'/></span>
                    <p className='text-sm'>Brand B</p>
                  </div>

                  <div className='flex gap-2'>
                    <span><input type='checkbox'/></span>
                    <p className='text-sm'>Brand C</p>
                  </div>

                  <div className='flex gap-2'>
                    <span><input type='checkbox'/></span>
                    <p className='text-sm'>Brand D</p>
                  </div>

                  <div className='flex gap-2'>
                    <span><input type='checkbox'/></span>
                    <p className='text-sm'>Brand E</p>
                  </div>
                 </div>
                </div>

                 {/* Checkbox */}
                 <div className='relative w-full overflow-hidden mb-5 p-2'>
                  <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-8 opacity-0 z-10 cursor-pointer'/>
                <div className='border-b border-gray h-12'>
                  <h1 className='font-semibold text-lg'>Size</h1>
                </div>

                {/* Arrow*/}
                 <div className='absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180'><FaAngleDown/></div>

                 {/* Content */}
                 <div className='overflow-hidden transition-all duration-500 max-h-56 peer-checked:max-h-0 mt-2 space-y-2'>
                   <div><Progbar/></div>
                 </div>
              </div>

            </div>

            {/* Table */}
            <div className='lg:w-[75%] w-full h-full bg-white rounded-lg p-4 overflow-x-scroll'><Tableuct/></div>
          </div>  
        </div> 
       </div>
    </div>
  )
}

export default Products