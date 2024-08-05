import React from 'react'
import Popup from '../popup/Popup'

const AllT = () => {
  return (
    <div className='w-full'>
         <table className='w-full h-full'>
          <tr className='bg-whitesmoke'>
            <th>ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Date</th>
            <th>Status</th>
          </tr>

          <tr className='border-t-8 border-white'>
            <td>P910</td>
            <td>Theresa Webb</td>
            <td>$233.00</td>
            <td>Paypal</td>
            <td>Nov 23,2034</td>
            <td><div><Popup/></div></td>
          </tr>

          <tr className=' bg-whitesmoke border-t-8 border-white'>
            <td>P910</td>
            <td>Theresa Webb</td>
            <td>$233.00</td>
            <td>Paypal</td>
            <td>Nov 23,2034</td>
            <td><button className='bg-redish2 text-redish p-2 w-full text-lg rounded-lg cursor-pointer'>Outcome</button></td>
          </tr>
          <tr className='border-t-8 border-white'>
            <td>P910</td>
            <td>Theresa Webb</td>
            <td>$233.00</td>
            <td>Paypal</td>
            <td>Nov 23,2034</td>
            <td><button className='bg-plumb text-plumb2 p-2 w-full text-lg rounded-lg cursor-pointer'>Pending</button></td>
          </tr>
          <tr className=' bg-whitesmoke border-t-8 border-white'>
            <td>P910</td>
            <td>Theresa Webb</td>
            <td>$233.00</td>
            <td>Paypal</td>
            <td>Nov 23,2034</td>
            <td><button className='bg-redish2 text-redish p-2 w-full text-lg rounded-lg cursor-pointer'>Outcome</button></td>
          </tr>
          <tr className='border-t-8 border-white'>
            <td>P910</td>
            <td>Theresa Webb</td>
            <td>$233.00</td>
            <td>Paypal</td>
            <td>Nov 23,2034</td>
            <td><button className='bg-plumb text-plumb2 p-2 w-full text-lg rounded-lg cursor-pointer'>Pending</button></td>
          </tr>
          <tr className='bg-whitesmoke border-t-8 border-white'>
            <td>P910</td>
            <td>Theresa Webb</td>
            <td>$233.00</td>
            <td>Paypal</td>
            <td>Nov 23,2034</td>
            <td><Popup/></td>
          </tr>
          <tr className='border-t-8 border-white'>
            <td>P910</td>
            <td>Theresa Webb</td>
            <td>$233.00</td>
            <td>Paypal</td>
            <td>Nov 23,2034</td>
            <td><button className='bg-redish2 text-redish p-2 w-full text-lg rounded-lg cursor-pointer'>Outcome</button></td>
          </tr>
          </table>
    </div>
  )
}

export default AllT