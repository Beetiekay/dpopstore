import React from 'react'
import { FaAngleDown, FaClosedCaptioning } from 'react-icons/fa6';
import Progbar from '../../Progbar/Progbar';
import { RiCloseCircleFill, RiLoader3Fill } from "react-icons/ri"
import { FaAngleDoubleDown } from 'react-icons/fa';



export default function Alerts({Visible, onClose}) {
    if (!Visible) return null;

  return(
    <div className='w-full h-full fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50'>
      <div className='w-full flex justify-center items-center'> 
         {/* Filter */}
         <div className='lg:w-[22%] w-[70%] h-[90vh] bg-white rounded-lg p-4 overflow-y-auto'>
         <div onClick={onClose} className='text-xl text-seagreen flex justify-end -mt-3 mb-5'><RiCloseCircleFill/></div>
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
      </div>      
    </div>
  )};