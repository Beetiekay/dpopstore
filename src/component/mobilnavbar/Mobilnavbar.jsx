import React, { useState } from 'react'
import {CgMenuGridR} from "react-icons/cg";
import { Link } from 'react-router-dom';
import {MdAccountBalance, MdClose, MdDashboard, MdInventory, MdLogout, MdMessage, MdOutlineProductionQuantityLimits, MdSettings} from "react-icons/md"

const Mobilnavbar = () => {
    const [open, setOpen] = useState(false)


  return (
    <div>
     <button><CgMenuGridR  className='text-xl shadow-md text-seagreen border-seagreen' onClick={() => setOpen(!open)}/></button>
     {
      open && (
       <div className='bg-white p-4 lg:w-64 w-72 shadow-xl absolute top-11 left-8 z-10'>
        <ul className='space-y-1'>
         <div>
         <div className='cursor-pointer' onClick={() => setOpen(false)}><MdClose className='text-xl'/></div>
           <li className='text-sm text-gray p-2'>General</li></div>

            <Link to={"/Dashboard"} className='flex space-x-2 p-2 hover:bg-lace items-center'><div><MdDashboard/></div><li>Dashboard</li></Link>
            <Link to={"/Order Inventory"} className='flex space-x-2 p-2 hover:bg-lace items-center'><div><MdInventory/></div><li>Order Inventory</li></Link>
            <Link to={"/Transactions"} className='flex space-x-2 p-2 hover:bg-lace items-center'><div><MdAccountBalance/></div><li>Transactions</li></Link>
            <Link to={"/Messages"} className='flex space-x-2 p-2 hover:bg-lace items-center'><div><MdMessage/></div><li>Messages</li></Link>
            <Link to={"/Products"} className='flex space-x-2 p-2 hover:bg-lace items-center'><div><MdOutlineProductionQuantityLimits/></div><li>Products</li></Link>
             
            <li className='text-sm text-gray p-2'>Supports</li>
   
            <Link to={"/Account"} className='flex space-x-2 p-2 hover:bg-lace items-center'><div><MdAccountBalance/></div><li>Account</li></Link>
            <Link to={"/Settings"} className='flex space-x-2 p-2 hover:bg-lace items-center'><div><MdSettings/></div><li>Settings</li></Link>
            <Link to={"/Logout"} className='flex space-x-2 p-2 hover:bg-lace items-center'><div><MdLogout/></div><li>Logout</li></Link>
        </ul>
      </div>        
                )}   
    </div>
  )
}

export default Mobilnavbar;