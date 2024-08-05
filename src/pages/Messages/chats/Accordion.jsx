import React from 'react'
import lotion from "../assets/lotion 2.jpg";
import lotion2 from "../assets/lotion 1.webp";
import { GiHeartPlus } from "react-icons/gi";
import Map2 from '../map/Map2';

const Accordion = () => {
  return (
    <div className='lg:h-96 h-full overflow-y-scroll'>

          <div className='relative w-full overflow-hidden'>
            <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer'/>
             <div className='h-12 w-full pl-5 flex justify-start items-center'>
             <h1 className='text-[16px] font-sans font-semibold'>Product</h1>
          </div>

        {/* Arrow Icon */}
        <div className='absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
         </svg>
        </div>

        {/* content */}
        <div className='overflow-hidden transition-all duration-500 max-h-56 peer-checked:max-h-0'>
          <div className='p-2'>
           {/* first product */}
            <div className='mb-4'>
              <div className='flex gap-4 mb-2'>
              <img src={lotion2} className='rounded-lg w-12 shadow-2xl'/>

                <div className='text-start'>
                 <h1 className='font-semibold'>Lotion care</h1>
                 <p className='text-sm text-gray font-sans'>Varient: <span className='font-semibold text-black'>Strawberry</span></p>
                </div>
               </div>
               <div className='flex justify-between p-2 border-b border-gray'>
                <p className='text-sm'>1 Product</p><span className='font-semibold'>$23.00</span>
               </div>
            </div>
            {/* end product */}

             {/* first product */}
             <div>
              <div className='flex gap-4 mb-2'>
              <img src={lotion} className='rounded-lg w-12'/>

                <div className='text-start'>
                 <h1 className='font-semibold'>Lotion care</h1>
                 <p className='text-sm text-gray font-sans'>Varient: <span className='font-semibold text-black'>Strawberry</span></p>
                </div>
               </div>
               <div className='flex justify-between p-2'>
                <p className='text-sm'>2 Product</p><span className='font-semibold'>$23.50</span>
               </div>
            </div>
            {/* end product */}
          </div>
          </div>
          </div>


           <div className='relative w-full overflow-hidden'>
        <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer'/>
        <div className='h-12 w-full pl-5 flex justify-start items-center'>
         <h1 className='text-[16px] font-sans font-semibold'>Delivery</h1>
        </div>

        {/* Arrow Icon */}
        <div className='absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
         </svg>
        </div>

        {/* content */}
        <div className='overflow-hidden transition-all duration-500 max-h-32 peer-checked:max-h-0'>
          <div className='p-2'>
           {/* first product */}
            <div className='mb-4'>
               <div className='flex justify-between'>

                <div className='flex gap-2'>
                  <div className='flex items-center justify-center'><GiHeartPlus className='text-[30px]'/></div>
                  <div>
                  <p className='font-semibold'>dpopexpress</p>
                  <span className='text-sm text-gray'>Lorem ipsum dolor</span>
                  </div>
                </div>
                <div className='flex items-center font-semibold'><p>$3.00</p></div>
               </div>
            </div>
            {/* end product */}
          </div>
      </div>
          </div>
    
           <div className='relative w-full overflow-hidden'>
        <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer'/>
        <div className='h-12 w-full pl-5 flex justify-start items-center'>
         <h1 className='text-[16px] font-sans font-semibold'>Address</h1>
        </div>

        {/* Arrow Icon */}
        <div className='absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
         </svg>
        </div>

        {/* content */}
        <div className='overflow-hidden transition-all duration-500 max-h-48 peer-checked:max-h-0'>
          <div className='p-2'>
           {/* first product */}
            <div className='mb-4 flex'>
               <div>
                   <p className='text-[12px] ml-3 mb-4'>2464 Royal Ln. Mesa, New Jersey 45463</p>
                   <div className='flex justify-center'><Map2/></div>
                </div>
            </div>
            {/* end product */}
          </div>
      </div>
          </div>
    
           <div className='relative w-full overflow-hidden'>
        <input type='checkbox' className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer'/>
        <div className='h-12 w-full pl-5 flex justify-start items-center'>
         <h1 className='text-[16px] font-sans font-semibold'>Payment</h1>
        </div>

        {/* Arrow Icon */}
        <div className='absolute top-3 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
         </svg>
        </div>

        {/* content */}
        <div className='overflow-hidden transition-all duration-500 max-h-48 peer-checked:max-h-0'>
          <div className='p-2'>
           {/* first product */}
            <div className='w-full mb-4'>

              <ul className='flex justify-between mb-4'>
                <li className='text-sm text-gray'>Subtotal ( 2 product)</li>
                <li className='font-semibold'>$46.00</li>
              </ul>

              <ul className='flex justify-between mb-4'>
                <li className='text-sm text-gray'>Delivery</li>
                <li className='font-semibold'>$3.00</li>
              </ul>

              <ul className='flex justify-between mb-4'>
                <li className='text-sm text-gray'>Tax</li>
                <li className='font-semibold'>$1.00</li>
              </ul>

              <ul className='flex justify-between mb-2'>
                <li className='font-semibold'>Total</li>
                <li className='font-semibold'>$46.00</li>
              </ul>
            </div>
            {/* end product */}
          </div>
      </div>
           </div>

    </div>
  )
}

export default Accordion