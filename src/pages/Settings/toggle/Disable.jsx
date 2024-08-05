import React from 'react'

const Disable = () => {
  return (
    <div>
        <div className='w-9 h-5 rounded-xl  bg-whitesmoke border border-gray shadow-md'>
            <input type="checkbox" className='peer absolute inset-x-0 w-full h-5 opacity-0 z-10 cursor-pointer'/>
            <div className='w-5 h-5 bg-white border-2 border-gray scale-125 shadow-md ml-3 rounded-full relative transition-transform duration-500'></div>
           </div>
    </div>
  )
}

export default Disable