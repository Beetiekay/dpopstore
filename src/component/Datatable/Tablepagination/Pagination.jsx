import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { FaAngleLeft } from 'react-icons/fa6'

function Pagination () {

  return (
    <div className='flex justify-between flex-wrap p-7'>
      <div>
        <p className='lg:text-lg text-sm text-gray'>Showing 1 to 10 of 10 entries</p>
      </div>

      <div className='flex justify-between opacity-75'>
        <button className='h-8 text-gray px-2  border border-gray'>
         <h3 className='font-medium text-xl'><FaAngleLeft/></h3>
        </button>

         <button className='h-8 text-gray px-2 border border-gray'>
          <h2 className='font-medium text-xl'>1</h2>
        </button>

         <button className='h-8 text-gray px-2 border border-gray'>
          <h2 className='font-medium text-xl'>...</h2>
        </button>

         <button className='h-8 text-gray px-2 border border-gray'>
          <h2 className='font-medium text-xl'>9</h2>
        </button>

         <button className='h-8 text-gray px-2 border border-gray'>
          <h2 className='font-medium text-xl'>10</h2>
        </button>

        <button className='h-8 text-gray px-2  border border-gray'>
         <h3 className='font-medium text-xl'><FaAngleRight/></h3>
        </button>
    </div>
    </div>
    
  )
}

export default Pagination