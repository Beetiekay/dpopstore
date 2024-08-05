import React, { useState } from 'react'
import Alert from './Alert';

const Popup = () => {
  const [ShowAlert, setShowAlert] = useState(false);

  const handleOnClose = () => setShowAlert(false);

  return (
    <div>
         <button onClick={() => setShowAlert(true)} className='bg-seagreen text-green p-2 w-full text-lg rounded-lg cursor-pointer'>
         <h1>Income</h1>
        </button>
        <Alert onClose={handleOnClose} Visible={ShowAlert}/>
    </div>
   
  )
}

export default Popup;