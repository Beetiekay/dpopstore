import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import Alert2 from './Alert2';

const Popup2 = () => {
  const [ShowAlert2, setShowAlert2] = useState(false);

  const handleOnClose = () => setShowAlert2(false);

  return (
    <div>
         <button onClick={() => setShowAlert2(true)} className='w-40 flex items-center outline-none justify-center border border-gray rounded-lg p-2 gap-2 focus:bg-seagreen focus:text-whitesmoke'>
            <div><FaPlus/></div>
            <div><h1>Add Product</h1></div>
        </button>
        <Alert2 onClose={handleOnClose} Visible={ShowAlert2}/>
    </div>
   
  )
}

export default Popup2;