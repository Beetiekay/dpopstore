import React from 'react';
import { IoMdBody } from 'react-icons/io';
import { FaEllipsisH } from 'react-icons/fa';


const Table1 = () => {
    return (
      <div className='w-full'>
        <table className='w-full'>
          <tr className='bg-whitesmoke'>
            <th className='lg:block relative -top-3 hidden'>ID</th>
            <th>Customer</th>
            <th>Order</th>
            <th>Amount</th>
            <th className='lg:block relative -top-3 hidden'>Date</th>
            <th>Status</th>
            <th className='lg:block mt-5 hidden' >Action</th>
          </tr>
            
            {/*Tbody */}
              <tr className='border-t-8 border-white'>
                <td className='lg:block relative -top-3 hidden'>P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>BodyCare</button></td>
                <td>$233.00</td>
                <td className='lg:block relative -top-3 hidden'>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-green text-seagreen rounded-xl cursor-pointer'><p>Received</p></button></td>
                <td className='lg:block mt-5 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
              </tr>
              {/*table 2 */}
              <tr className='border-t-8 border-white bg-whitesmoke'>
                <td className='lg:block relative -top-3 hidden'>P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>HairCare</button></td>
                <td>$233.00</td>
                <td className='lg:block relative -top-3 hidden'>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-plumb text-plumb2 rounded-xl cursor-pointer'><p>Shipping</p></button></td>
                <td className='lg:block mt-5 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
              </tr>
               {/*table 3 */}
              <tr className='border-t-8 border-white'>
                <td className='lg:block relative -top-3 hidden'>P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>HairCare</button></td>
                <td>$233.00</td>
                <td className='lg:block relative -top-3 hidden'>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-plumb text-plumb2 rounded-xl cursor-pointer'><p>Shipping</p></button></td>
                <td className='lg:block mt-5 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
              </tr>
               {/*table 4 */}
              <tr className='border-t-8 border-white bg-whitesmoke'>
                <td className='lg:block relative -top-3 hidden'>P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>BodyCare</button></td>
                <td>$233.00</td>
                <td className='lg:block relative -top-3 hidden'>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-gray text-whitesmoke rounded-xl cursor-pointer'><p>Cancelled</p></button></td>
                <td className='lg:block mt-5 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
              </tr>
               {/*table 5 */}
              <tr className='border-t-8 border-white'>
                <td className='lg:block relative -top-3 hidden'>P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>BodyCare</button></td>
                <td>$233.00</td>
                <td className='lg:block relative -top-3 hidden'>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-dogles2 text-dogles rounded-xl cursor-pointer'><p>Done</p></button></td>
                <td className='lg:block mt-5 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
              </tr>
               {/*table 6 */}
              <tr className='border-t-8 border-white bg-whitesmoke'>
                <td className='lg:block relative -top-3 hidden'>P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>BodyCare</button></td>
                <td>$233.00</td>
                <td className='lg:block relative -top-3 hidden'>Nov 23, 2024</td>
                <td><button className='w-full p-2 bg-dogles2 text-dogles rounded-xl cursor-pointer'><p>Done</p></button></td>
                <td className='lg:block mt-5 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
              </tr>
               {/*table 7 */}
            {/*Tbody */}
        </table>
      </div>
    )
  }
  
  export default Table1;