import React from 'react'

function Toggle() {
  return (
    <div className='flex gap-4 items-center justify-center'>
         <div className='w-9 h-5 rounded-xl bg-green shadow-md'>
            <input type="checkbox" className='peer absolute inset-x-0 w-full h-5 opacity-0 z-10 cursor-pointer'/>
            <div className='w-5 h-5 bg-whitesmoke border-2 border-seagreen rounded-full relative transition-transform duration-500 ml-0 peer-checked:ml-5 scale-125'></div>
           </div>
           <p className='font-semibold'>Active</p>
    </div>
  )
};

export default Toggle;
