import classNames from 'classnames';
import React, { useState } from 'react';
import logo from "../../Favicon/Favicon.png";
import { FaAnglesLeft } from "react-icons/fa6";
import {MdAccountBalance, MdDashboard, MdInventory, MdLogout, MdMessage, MdOutlineProductionQuantityLimits, MdSettings} from "react-icons/md"
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const [toggleCollapse, setToggleCollapse] = useState(false)
    const [isCollapsible, setIsCollapsible] = useState(false)


    const wrapperClasses = classNames(
        "h-screeen px-4 pt-2 pb-4 bg-white lg:flex hidden justify-between flex-col",
        {
            ['w-64']: !toggleCollapse,
            ['w-20']: toggleCollapse,
        }
    );

     const FaAnglesLeftClasses = classNames("p-3 rounded bg-white text-seagreen text-xl absolute right-0",
     {
        "rotate-180": toggleCollapse,
     }
     );

      const onMouseOver = () => {
        setIsCollapsible(!isCollapsible)
      }
      const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse)
      }

  return (
    <div className={wrapperClasses} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}
    style={{ transition: "width 300ms cubic-bezier(0.2 0, 0, 1) 0s"}}>
        <div className='flex flex-col'>
            <div className='flex items-center justify-between relative'>
            <div className='flex items-center pl-1 gap-4 ml-2 p-3'>
              <img src={logo} className='w-8'/>
              <span className={classNames('-mt-1 -ml-3 text-xl font-semibold text-olivedrab', {hidden: toggleCollapse,})}>
                dpopstore
              </span>
            </div>
            {isCollapsible && (
                <button className={FaAnglesLeftClasses} onClick={handleSidebarToggle}>
            <FaAnglesLeft/>
            </button>
            )}  
        </div>
        <div className='flex flex-col items-start p-1 overflow-hidden' >
         <ul>
         <div className='text-gray text-xs -ml-1 mb-2'>General</div>

            <Link className='flex p-2 t text-sm hover:text-white hover:bg-seagreen rounded-lg w-52 font-semibold gap-6' to={"/Dashboard"}><MdDashboard className='text-2xl'/><li>Dashboard</li></Link>
            <Link className='flex p-2 text-sm hover:text-white hover:bg-seagreen rounded-lg w-52 font-semibold gap-6' to={"/Order Inventory"}><MdInventory className='text-2xl'/><li>Order Summary</li></Link>
            <Link className='flex p-2 text-sm hover:text-white hover:bg-seagreen rounded-lg w-52 font-semibold gap-6' to={"/Transactions"}><MdAccountBalance className='text-2xl'/><li>Transactions</li></Link>
            <Link className='flex p-2 text-sm hover:text-white hover:bg-seagreen rounded-lg w-52 font-semibold gap-6' to={"/Messages"}><MdMessage className='text-2xl'/><li>Messages</li></Link>
            <Link className='flex p-2 text-sm hover:text-white hover:bg-seagreen rounded-lg w-52 font-semibold gap-6 mb-3' to={"/Products"}><MdOutlineProductionQuantityLimits className='text-2xl'/><li>Products</li></Link>
              
            <div className='text-gray text-xs -ml-1 mb-2'>Supports</div>
             
            <Link className='flex p-2 text-sm hover:text-white hover:bg-seagreen rounded-lg w-52 font-semibold gap-6' to={"/Account"}><MdAccountBalance className='text-2xl'/><li>Account</li></Link>
            <Link className='flex p-2 text-sm hover:text-white hover:bg-seagreen rounded-lg w-52 font-semibold gap-6' to={"/Settings"}><MdSettings className='text-2xl'/><li>Settings</li></Link>
            <Link className='flex p-2 text-sm  hover:bg-seagreen rounded-lg w-52 font-semibold gap-6' to={"/"}><MdLogout className='text-2xl'/><li>Logout</li></Link>

            <div className='h-[23vh] mt-2 p-2 w-48 bg-seagreen  rounded-md overflow-hidden'>
            <p className='text-base font-semibold text-white my-5 ml-3'>Get More<br/> Complete Access And Analysis</p>
            <Link className='flex justify-center mt-2' to={"/"}>
                <button className='w-full text-sm p-1 -mt-5 bg-whitesmoke rounded-md font-semibold text-olivedrab'>Go Pro Now</button>
            </Link>
            <div className='relative -mt-40 w-24 h-24 bg-whitesmoke rounded-full opacity-30 -left-3 z-10'></div>
            <div className='relative -mt-8 ml-32 w-16 h-16 bg-whitesmoke rounded-full opacity-30 z-10'></div>
          </div>
         </ul>
        </div>
       </div>
        <div></div>
    </div>
  )
}

export default Sidebar;