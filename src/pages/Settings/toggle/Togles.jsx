import React from 'react'

const Togles = () => {
  return (
    <div>
         <div className='w-9 h-5 rounded-xl bg-green bg-opacity-65 shadow-md'>
            <input type="checkbox" className='peer absolute inset-x-0 w-full h-5 opacity-0 z-10 cursor-pointer'/>
            <div className='w-5 h-5 bg-whitesmoke border-2 border-seagreen rounded-full relative transition-transform duration-500 ml-0 peer-checked:ml-5 scale-125'></div>
           </div>
    </div>
  )
}

export default Togles