import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Password = () => {
    const [showpass, setShowpass] = useState(false);
  return (
    <div>
     <input type={showpass ? "text" : "password"} autoComplete='off' className='p-1 w-full rounded-md border border-seagreen'/>
     <div onClick={() => setShowpass(!showpass)} className='relative left-56 -top-9 translate-y-1/2 cursor-pointer text-lg opacity-100'>
       {showpass ? <FaRegEye/> : <FaRegEyeSlash/>}
     </div>
    </div>
  )
}

export default Password