import React from 'react';


const Table1 = () => {
    return (
      <div className='w-full'>
        <table className='lg:w-full w-screen'>
            <tr className=' bg-whitesmoke '>
              <th>ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
            
            {/*Tbody */}
              <tr className='border-t-8 border-white'>
                <td className='lg:block relative top-3 hidden'>P909</td>
                <td>Theresa Webb</td>
                <td>$233.00</td>
                <td>Paypal</td>
                <td className='lg:block relative top-3 hidden'>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-seagreen text-green rounded-xl cursor-pointer'><p>Income</p></button></td>
              </tr>
              <tr className='border-t-8 border-white bg-whitesmoke'>
                <td className='lg:block relative top-3 hidden'>P909</td>
                <td>Theresa Webb</td>
                <td>$233.00</td>
                <td>Paypal</td>
                <td className='lg:block relative top-3 hidden'>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-redish2 text-redish rounded-xl cursor-pointer'><p>Outcome</p></button></td>
              </tr>
              <tr className=' border-t-8 border-white'>
                <td className='lg:block relative top-3 hidden'>P909</td>
                <td>Theresa Webb</td>
                <td>$233.00</td>
                <td>Paypal</td>
                <td className='lg:block relative top-3 hidden'>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-plumb text-plumb2 rounded-xl cursor-pointer'><p>Pending</p></button></td>
              </tr>
              <tr className='border-t-8 border-white bg-whitesmoke'>
                <td className='lg:block relative top-3 hidden'>P909</td>
                <td>Theresa Webb</td>
                <td>$233.00</td>
                <td>Paypal</td>
                <td className='lg:block relative top-3 hidden'>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-seagreen text-green rounded-xl cursor-pointer'><p>Income</p></button></td>
              </tr>
              {/*table 2 */}
               
            {/*Tbody */}
        </table>
      </div>
    )
  }
  
  export default Table1;