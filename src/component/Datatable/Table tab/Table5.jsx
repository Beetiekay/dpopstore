import React from 'react'
import { IoMdBody } from 'react-icons/io';
import { FaEllipsisH } from 'react-icons/fa';

const Table5 = () => {
  return (
    <div className='w-full'>
      <table className='w-full'>
          <tr className='bg-whitesmoke'>
            <th className='lg:block hidden'>ID</th>
            <th>Customer</th>
            <th>Order</th>
            <th>Amount</th>
            <th className='lg:block  hidden'>Date</th>
            <th>Status</th>
            <th className='lg:block  hidden' >Action</th>
          </tr>
          {/* Tbody */}
          <tr className='border-t-8 border-white'>
                <td>P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>BodyCare</button></td>
                <td>$233.00</td>
                <td>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-gray text-whitesmoke rounded-xl cursor-pointer'><p>Cancelled</p></button></td>
                <td className='lg:block mt-5 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
          </tr>
          {/* Tb1 */}
          <tr className='border-t-8 border-white bg-whitesmoke'>
                <td>P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>BodyCare</button></td>
                <td>$233.00</td>
                <td>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-gray text-whitesmoke rounded-xl cursor-pointer'><p>Cancelled</p></button></td>
                <td className='lg:block mt-5 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
          </tr>
          {/* Tb2 */}
          <tr className='border-t-8 border-white'>
                <td>P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>BodyCare</button></td>
                <td>$233.00</td>
                <td>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-gray text-whitesmoke rounded-xl cursor-pointer'><p>Cancelled</p></button></td>
                <td className='lg:block mt-5 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
          </tr>
          {/* Tb3 */}
          <tr className='border-t-8 border-white bg-whitesmoke'>
                <td>P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>BodyCare</button></td>
                <td>$233.00</td>
                <td>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-gray text-whitesmoke rounded-xl cursor-pointer'><p>Cancelled</p></button></td>
                <td className='lg:block mt-5 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
          </tr>
          {/* Tb4 */}
          <tr className='border-t-8 border-white bg-whitesmoke'>
                <td>P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>BodyCare</button></td>
                <td>$233.00</td>
                <td>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-gray text-whitesmoke rounded-xl cursor-pointer'><p>Cancelled</p></button></td>
                <td className='lg:block mt-5 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
          </tr>
          {/* Tb5 */}
          <tr className='border-t-8 border-white bg-whitesmoke'>
                <td>P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>BodyCare</button></td>
                <td>$233.00</td>
                <td>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-gray text-whitesmoke rounded-xl cursor-pointer'><p>Cancelled</p></button></td>
                <td className='lg:block mt-5 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
          </tr>
        </table>
    </div>
  )
}

export default Table5