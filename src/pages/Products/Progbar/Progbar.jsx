import React, { useEffect, useState } from 'react'

export default function Progbar() {
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() =>{
       if (filled <80 && isRunning) {
        setTimeout(() => setFilled (prev => prev += 2), 50)
       }
    },[filled, isRunning])

  return (
    <div>
        <h1 className='font-semibold mb-4'>Price</h1>
       <div className='relative overflow-hidden w-[100%] h-[25px] rounded-lg bg-whitesmoke mb-4 shadow-md'>
         <div
         style={{
            height:"100%",
            width: `${filled}%`,
            backgroundColor:"#ffa500",
            transition:"width 0.5s",
         }}
         ></div>
         <span className='font-semibold text-xs absolute left-[40%] top-[20%] text-orange'>{ filled }%</span>
       </div>

       <div className='flex justify-around mb-5'>
        <div>
            <div><p className='font-semibold text-sm'>Min</p></div>
            <button className='p-2 w-14 border border-gray bg-whitesmoke rounded-lg' onClick={() => setIsRunning(true)}>0</button>
        </div>

        <div>
             <div><p className='font-semibold text-sm'>Max</p></div>
            <button className='p-2 w-16 border border-gray bg-whitesmoke rounded-lg' onClick={() => setIsRunning(true)}>200</button>
        </div>
       </div>
       <div className='flex justify-center'><button className='p-3 bg-seagreen rounded-lg w-[80%] text-whitesmoke outline-none hover:opacity-80'>Apply</button></div>
    </div>
  )
}
