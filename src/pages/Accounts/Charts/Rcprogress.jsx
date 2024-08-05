import React from 'react'
import {Circle } from 'rc-progress';
import CountUp from 'react-countup';
import { IoMdFlame } from 'react-icons/io';

const Rcprogress = () => {
  return (
    <div className='flex justify-center'>
        <div>
           <div className='w-48'>
            <Circle trailWidth={6} percent={51} strokeWidth={7}  strokeColor="#ffa500" className='-rotate-90'/>
            <div className='relative -mt-[6.4rem] animate-bounce ml-[10.7rem] w-7 h-7 bg-green rounded-full border-[3px] border-whitesmoke shadow-md'></div>
              <div className='w-44 flex justify-center relative -mt-[5rem]'>    
                  <div>
                    <div className='flex justify-center font-bold text-3xl mb-1 ml-5'><CountUp start={0} end={90} delay={1}/></div>
                    <div className='flex justify-center text-gray font-semibold mb-2 ml-5'><p>Point Of 100</p></div>
                  </div>
              </div>

              <div className='w-52 flex justify-center relative mt-[0.6rem]'>
              <div className=' bg-white p-1'>
                    <div className='flex justify-center items-center mb-4'><h1 className='text-lg font-bold font-sans'>You're Amazing</h1>
                     <div><IoMdFlame color='red' className='text-lg'/></div>
                    </div>
                   <p className='ml-2 text-center text-sm '>
                    Your Sales perfomance score is better than 80% other user
                   </p>
                </div>
              </div>
             </div>
          </div>
       
    </div>
  )
}

export default Rcprogress