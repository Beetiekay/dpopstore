import React, { useState } from 'react'
import { FaAngleDoubleDown, } from 'react-icons/fa';
import Alerts from './Alerts';


const Detailsm = () => {
  const [ShowAlerts, setShowAlerts] = useState(false);

  const handleOnClose = () => setShowAlerts(false);

  return (
    <div>
         <button onClick={() => setShowAlerts(true)} className=''>
            <div className='text-xl text-seagreen mt-2'><FaAngleDoubleDown className='animate-bounce'/></div>
        </button>
        <Alerts onClose={handleOnClose} Visible={ShowAlerts}/>
    </div>
   
  )
}

export default Detailsm;