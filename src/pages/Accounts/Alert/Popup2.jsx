import React, { useState } from 'react'
import Alert2 from './Alert2';

const Popup2 = () => {
  const [ShowAlert2, setShowAlert2] = useState(false);

  const handleOnClose = () => setShowAlert2(false);

  return (
    <div>
         <button onClick={() => setShowAlert2(true)} className='h-9 p-1 font-semibold hover:border-2 hover:border-gray outline-none rounded-lg'>
            <div><h1>Edit Profile</h1></div>
        </button>
        <Alert2 onClose={handleOnClose} Visible={ShowAlert2}/>
    </div>
   
  )
}

export default Popup2;