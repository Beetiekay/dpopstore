import React from 'react'

const Bar = () => {
  return (
    <div className='p-2'>
        <h1 className='text-lg font-bold mb-2 lg:overflow-hidden overflow-y-scroll'>Top Country</h1>
        <div className='space-y-2'>
            <div className='w-96 p-2 h-12 bg-white rounded-full overflow-hidden'>
                <button className='h-10 p-2 w-[90%] -m-2 bg-seagreen rounded-full text-left font-semibold text-whitesmoke'>
                <p className='text-sm'> Nigeria</p>
                </button>
           </div>
            <div className='w-96 p-2 h-12 bg-white rounded-full overflow-hidden'>
                <button className='h-10 p-2 w-[70%] -m-2 bg-seagreen rounded-full text-left font-semibold text-whitesmoke'>
                <p className='text-sm'> Australia</p>
                </button>
           </div>
            <div className='w-96 p-2 h-12 bg-white rounded-full overflow-hidden'>
                <button className='h-10 p-2 w-[50%] -m-2 bg-orange rounded-full text-left font-semibold text-whitesmoke'>
                   <p className='text-sm'>Malaysia</p> 
                </button>
           </div>
            <div className='w-96 p-2 h-12 bg-white rounded-full overflow-hidden'>
                <button className='h-10 p-2 w-[35%] -m-2 bg-orange rounded-full text-left font-semibold text-whitesmoke'>
                <p className='text-sm'>America</p>
                </button>
           </div>
            <div className='w-96 p-2 h-12 bg-white rounded-full overflow-hidden'>
                <button className='h-10 p-2 w-[30%] -m-2 bg-orange rounded-full text-left font-semibold text-whitesmoke'>
                <p className='text-sm'>Thailand</p> 
                </button>
           </div>
        </div>
    </div>
  )
}

export default Bar