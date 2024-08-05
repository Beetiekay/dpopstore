import React from 'react'
import { IoMdBody } from 'react-icons/io';
import { FaEllipsisH } from 'react-icons/fa';

const Table4 = () => {
  return (
    <div className='w-full'>
      <table className='w-full'>
          <tr className='bg-whitesmoke'>
            <th className='lg:block relative -top-4 hidden'>ID</th>
            <th>Customer</th>
            <th>Order</th>
            <th>Amount</th>
            <th className='lg:block mt-6 hidden'>Date</th>
            <th>Status</th>
            <th className='lg:block mt-6 hidden' >Action</th>
          </tr>
          {/* tbody */}
          <tr className='border-t-8 border-white'>
                <td>P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>BodyCare</button></td>
                <td>$233.00</td>
                <td>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-redish2 text-redish rounded-xl cursor-pointer'><p>Complaint</p></button></td>
                <td className='lg:block mt-6 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
          </tr>
          {/* tb1 */}
          <tr className='border-t-8 border-white bg-whitesmoke'>
                <td>P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>BodyCare</button></td>
                <td>$233.00</td>
                <td>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-redish2 text-redish rounded-xl cursor-pointer'><p>Complaint</p></button></td>
                <td className='lg:block mt-6 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
          </tr>
          {/* tb2 */}
          <tr className='border-t-8 border-white'>
                <td>P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>BodyCare</button></td>
                <td>$233.00</td>
                <td>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-redish2 text-redish rounded-xl cursor-pointer'><p>Complaint</p></button></td>
                <td className='lg:block mt-6 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
          </tr>
          {/* tb3 */}
          <tr className='border-t-8 border-white bg-whitesmoke'>
                <td>P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>BodyCare</button></td>
                <td>$233.00</td>
                <td>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-redish2 text-redish rounded-xl cursor-pointer'><p>Complaint</p></button></td>
                <td className='lg:block mt-6 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
          </tr>
          {/* tb4 */}
          <tr className='border-t-8 border-white'>
                <td >P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>BodyCare</button></td>
                <td>$233.00</td>
                <td>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-redish2 text-redish rounded-xl cursor-pointer'><p>Complaint</p></button></td>
                <td className='lg:block mt-6 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
          </tr>
          {/* tb5 */}
          <tr className='border-t-8 border-white bg-whitesmoke'>
                <td className=''>P909</td>
                <td>Jimmy Alan</td>
                <td><button className='flex gap-2 relative left-12'><div className='p-2 bg-orange rounded-lg text-whitesmoke'><IoMdBody/></div>BodyCare</button></td>
                <td>$233.00</td>
                <td>Nov 23, 2024</td>
                <td> <button className='w-full p-2 bg-redish2 text-redish rounded-xl cursor-pointer'><p>Complaint</p></button></td>
                <td className='lg:block mt-6 hidden'><button className='p-2 bg-whitesmoke text-gray ml-2 rounded-lg cursor-pointer'><FaEllipsisH/></button></td>
          </tr>
        </table>
    </div>
  )
}

export default Table4