import React from 'react'

const Average = () => {
  return (
    <div>
      <div className='flex justify-between mb-2'>
        <p className='text-[15px] font-semibold'>Average Response</p>
         <button className='p-1 bg-whitesmoke outline-none rounded-lg shadow-md'>
            <select className='font-semibold text-sm font-sans bg-whitesmoke'>
                <option>Weekly</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
            </select>
         </button>
      </div>

      <div className='flex gap-2 items-end mb-3 ml-4'>
        <h1 className='text-3xl font-bold'>2 Hours</h1>
        <span className='font-bold text-sm text-end text-green animate-pulse'>+18.34% ~</span>
      </div>

      {/* charts */}
      <div>
          <div className='flex justify-center items-center'>
           <div className='flex p-2 space-x-6 items-end'>

            <div className='space-y-1'>
              <div className='w-1 h-7 bg-green rounded-xl animate-bounce transition-all'></div>
              <div className='w-1 h-7 bg-orange rounded-xl'></div>
            </div>

            <div className='space-y-1 animate-bounce transition-all'>
              <div className='w-1 h-8 bg-green rounded-xl'></div>
              <div className='w-1 h-8 bg-orange rounded-xl'></div>
            </div>

            <div className='space-y-1'>
              <div className='w-1 h-8 bg-green rounded-xl animate-bounce transition-all'></div>
              <div className='w-1 h-8 bg-orange rounded-xl'></div>
            </div>

            <div className='space-y-1'>
              <div className='w-1 h-11 bg-green rounded-xl animate-bounce transition-all'></div>
              <div className='w-1 h-11 bg-orange rounded-xl'></div>
            </div>

            <div className='space-y-1'>
              <div className='w-1 h-4 bg-green rounded-xl'></div>
              <div className='w-1 h-4 bg-orange rounded-xl'></div>
            </div>

            <div className='space-y-1'>
              <div className='w-1 h-6 bg-green rounded-xl'></div>
              <div className='w-1 h-6 bg-orange rounded-xl'></div>
            </div>

            <div className='space-y-1'>
              <div className='w-1 h-7 bg-green rounded-xl'></div>
              <div className='w-1 h-7 bg-orange rounded-xl'></div>
            </div>

            <div className='space-y-1'>
              <div className='w-1 h-8 bg-green rounded-xl animate-bounce transition-all'></div>
              <div className='w-1 h-8 bg-orange rounded-xl'></div>
            </div>

            <div className='space-y-1'>
              <div className='w-1 h-10 bg-green rounded-xl animate-bounce transition-all'></div>
              <div className='w-1 h-10 bg-orange rounded-xl'></div>
            </div>

            <div className='space-y-1 animate-bounce transition-all'>
              <div className='w-1 h-8 bg-green rounded-xl'></div>
              <div className='w-1 h-8 bg-orange rounded-xl'></div>
            </div>
           </div> 
         </div>
         {/* numbers */}
         <div className='flex justify-center'>
            <div className='flex space-x-3 text-sm'>
              <p className='font-semibold '>10</p>
              <p className='font-semibold '>20</p>
              <p className='font-semibold '>30</p>
              <p className='font-semibold '>40</p>
              <p className='font-semibold '>50</p>
              <p className='font-semibold '>60</p>
              <p className='font-semibold '>70</p>
              <p className='font-semibold '>80</p>
              <p className='font-semibold '>90</p>
              <p className='font-semibold '>100</p>
            </div>
         </div>
        </div>  
      </div>
  )
}

export default Average