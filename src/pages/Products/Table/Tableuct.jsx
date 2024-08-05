import React from 'react'
import { LuSearch } from 'react-icons/lu';
import { FaAngleLeft, FaAngleRight, FaEllipsisVertical, FaFileExport, FaPlus} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { IoMdBody } from 'react-icons/io';
import { FaEllipsisH } from 'react-icons/fa';
import Toggle from '../Toggle/Toggle';
import Popup2 from '../popup/Popup2';

const Tableuct = () => {
  return (
    <div >
    {/* buttons header */}
     <div className='flex justify-between overflow-x-scroll lg:gap-0 gap-4 mb-4'>
        <button className='flex items-center border border-gray rounded-lg lg:p-2 gap-2 outline-none'>
            <div><LuSearch className='text-gray'/></div>
            <div><input type='text' placeholder=' Search Product' className='bg-white outline-none'/></div>
        </button>

        <button className='w-40 flex items-center outline-none justify-center border border-gray rounded-lg p-2 gap-2 focus:bg-seagreen focus:text-whitesmoke'>
            <div><FaEllipsisVertical/></div>
            <div><h1>Bulk Action</h1></div>
        </button>
         
         <button className='w-40 flex justify-center outline-none items-center border border-gray rounded-lg p-2 gap-2 focus:bg-seagreen focus:text-whitesmoke'>
            <div><FaFileExport/></div>
            <div><h1>Export Product</h1></div>
         </button>

        <div><Popup2/></div>
     </div>
     {/* buttons header End*/}

     {/* Table Tabs */}
     <div className='overflow-x-auto mb-2'>
        <ul className='flex gap-10 text-sm font-semibold'>
            <Link className='p-2 focus:border-b focus:border-seagreen focus:text-seagreen'><li>All Products</li></Link>
            <Link className='p-2 focus:border-b focus:border-seagreen focus:text-seagreen'><li>Live</li></Link>
            <Link className='p-2 focus:border-b focus:border-seagreen focus:text-seagreen'><li>Archive</li></Link>
            <Link className='p-2 focus:border-b focus:border-seagreen focus:text-seagreen'><li>Out of stuck</li></Link>
        </ul>
     </div>
     {/* Table Tabs */}

     {/* table */}
     <table className='w-full'>
         {/* table H */}
        <tr className='bg-whitesmoke h-10'>
            <th>ID</th>
            <th>Product</th>
            <th>Total Buyer</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
        </tr>
          {/* table H */}

          {/* table B */}
          <tr className='text-center h-10 border-b-8 border-white'>
            <td>P909</td>
            <td className='flex gap-2'><button className='mt-1 p-2 bg-orange text-whitesmoke rounded-lg'><IoMdBody/></button><p className='flex items-center'>bodycare</p></td>
            <td>2456</td>
            <td>$34.00</td>
            <td>249</td>
            <td><Toggle/></td>
          </tr>

          <tr className='text-center h-10 bg-whitesmoke border-b-8 border-white'>
            <td>P909</td>
            <td className='flex gap-2'><button className='mt-1 outline p-2 bg-orange text-whitesmoke rounded-lg'><IoMdBody/></button><p className='flex items-center'>bodycare</p></td>
            <td>2456</td>
            <td>$34.00</td>
            <td>249</td>
            <td><Toggle/></td>
          </tr>

          <tr className='text-center h-10 border-b-8 border-white'>
            <td>P909</td>
            <td className='flex gap-2'><button className='mt-1 p-2 bg-orange outline-none text-whitesmoke rounded-lg'><IoMdBody/></button><p className='flex items-center'>bodycare</p></td>
            <td>2456</td>
            <td>$34.00</td>
            <td>249</td>
            <td><Toggle/></td>
          </tr>

          <tr className='text-center h-10 border-b-8 border-white bg-whitesmoke'>
            <td>P909</td>
            <td className='flex gap-2'><button className='mt-1 p-2 bg-orange outline-none text-whitesmoke rounded-lg'><IoMdBody/></button><p className='flex items-center'>bodycare</p></td>
            <td>2456</td>
            <td>$34.00</td>
            <td>249</td>
            <td><Toggle/></td>
          </tr>

          <tr className='text-center h-10 border-b-8 border-white'>
            <td>P909</td>
            <td className='flex gap-2'><button className='mt-1 p-2 outline-none bg-orange text-whitesmoke rounded-lg'><IoMdBody/></button><p className='flex items-center'>bodycare</p></td>
            <td>2456</td>
            <td>$34.00</td>
            <td>249</td>
            <td><Toggle/></td>
          </tr>

          <tr className='text-center h-10 border-b-8 border-white bg-whitesmoke'>
            <td>P909</td>
            <td className='flex gap-2'><button className='mt-1 p-2 outline-none bg-orange text-whitesmoke rounded-lg'><IoMdBody/></button><p className='flex items-center'>bodycare</p></td>
            <td>2456</td>
            <td>$34.00</td>
            <td>249</td>
            <td><Toggle/></td>
          </tr>

          <tr className='text-center h-10 border-b-8 border-white'>
            <td>P909</td>
            <td className='flex gap-2'><button className='mt-1 p-2 outline-none bg-orange text-whitesmoke rounded-lg'><IoMdBody/></button><p className='flex items-center'>bodycare</p></td>
            <td>2456</td>
            <td>$34.00</td>
            <td>249</td>
            <td><Toggle/></td>
          </tr>
          {/* table B */}
     </table>
       {/* pagination */}
       <div className='w-full flex justify-between'>
            <div className='lg:flex hidden'><p className='text-gray'>Showing 1 to 10 of 10 entries</p></div>

            <div>
                <button className='p-2 bg-whitesmoke text-gray'><FaAngleLeft/></button>
                <button className='p-2 bg-whitesmoke text-gray'><p>2</p></button>
                <button className='p-2 bg-whitesmoke text-gray'><FaEllipsisH/></button>
                <button className='p-2 bg-whitesmoke text-gray'><p>9</p></button>
                <button className='p-2 bg-whitesmoke text-gray'><p>10</p></button>
                <button className='p-2 bg-whitesmoke text-gray'><FaAngleRight/></button>
            </div>
          </div>
          {/* pagination */}
     {/* table */}
    </div>
  )
}

export default Tableuct