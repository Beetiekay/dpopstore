import React from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import { FaCableCar, FaReceipt, FaUser} from 'react-icons/fa6';
import { FaAngleDown} from 'react-icons/fa';
import { FiSearch} from 'react-icons/fi';
import { CiWallet} from 'react-icons/ci';
import { Link } from 'react-router-dom';
import Notification from '../../component/Notification/Notification';
import Responsive from '../../component/Responsive/Responsive';
import Mobilnavbar from '../../component/mobilnavbar/Mobilnavbar';
import Linechart from '../../component/Charts/Linechart';
import Donutchart from '../../component/Charts/Donutchart';
import Barchart from '../../component/Charts/Barchart';
import Map from '../../component/Map/Map';
import Bar from '../../component/Charts/Bar';


const Dashboard = () => {
  return (
    <div className='flex bg-whitesmoke'>
      <Sidebar/>
       <div className='w-screen'>
        {/*  Header */}
        <header className='w-full flex justify-between h-16 p-4 bg-white -mt-1'>
          <div className='flex space-x-2'>
          <div className='sm:flex lg:hidden space-x-2'><Mobilnavbar/></div>
          <div><p className='font-semibold lg:text-lg text-xs'>Dashboard</p></div>
          </div>
              
           <div className='flex justify-around space-x-4'>
             {/*input container */}
            <div className='gap-2 bg-whitesmoke rounded-md lg:flex hidden items-center'>
              <button type='submit' className='flex items-center text-gray p-1'><FiSearch/></button>
              <div>
              <input type='search' name='search' placeholder='Search Anything..' className='bg-whitesmoke outline-none border-none'/></div>
            </div>
             {/*notificaton Btn */}
              <div><Notification/></div>
              {/*profile Btn*/}
              <Link to={"/Profile"}><button className='bg-whitesmoke p-2 rounded-md outline-none'><FaUser className='text-seagreen'/></button></Link>
              <div className='sm:flex lg:hidden'><Responsive/></div>
           </div>
        </header>
          {/*  Header */}
          <div className='w-full h-[91vh] p-4 overflow-y-scroll'>
           <div className='flex justify-between flex-wrap'>
             {/* Transactions Activity box */} 
             <div className='lg:w-[63%] w-full h-[50vh] bg-white lg:overflow-hidden overflow-x-scroll rounded-md shadow-md'>
              <div className='flex justify-between p-4'>
                <div className='flex items-center space-x-1'>
                  <div className='bg-seagreen p-1 text-whitesmoke rounded-lg'><CiWallet className='text-xl'/></div>
                  <div>Transaction Activity</div>
                </div>
                <div className='flex items-center text-xs space-x-1'>
                  <button className='p-2 bg-seagreen text-whitesmoke rounded-lg hover:opacity-50'>Day</button>
                  <button className='p-2 bg-seagreen text-whitesmoke rounded-lg hover:opacity-50'>Week</button>
                  <button className='p-2 bg-seagreen text-whitesmoke rounded-lg hover:opacity-50'>Month</button>
                  <button className='p-2 bg-seagreen text-whitesmoke rounded-lg hover:opacity-50'>Year</button>
                </div>
              </div>
              <div className='flex items-end px-4 space-x-1 -mt-2'>
                <h2 className='text-3xl font-bold'>$90,984</h2>
                <p className='mt-2 text-sm font-semibold text-gray'>16.90%</p>
              </div>
              <div className='right-[62px] relative -top-[23px]'>
                <Linechart/>
              </div>
             </div>
             {/* Balance box */}
            <div className='lg:w-[35%] w-full h-[40vh] lg:mt-0 mt-3 bg-white p-5 rounded-md shadow-md'>
                 <div className='mb-3'><p className='text-gray text-lg'>Balance</p>
                  <h1 className='text-3xl font-bold font-sans'>$2.345.90</h1>
                </div>
               <div className='space-y-5 '>
                 <div className=' bg-whitesmoke p-2 hover:h-[10vh]'>
                  <p className='font-semibold font-sans text-gray mb-2'>Play with</p>
                   <div className='flex justify-between'>    
                     <div className='flex items-center space-x-2'><div className='w-5 h-5 bg-orange rounded-full'></div>
                     <p className='font-semibold'>Card 907636 *********</p></div>
                     <div className='cursor-pointer animate-bounce'><FaAngleDown/></div>
                     </div>  
                    </div>
                    <button className='w-full p-4 bg-seagreen text-white '><Link to={"/Width draw"}>Withdraw Money</Link></button> 
                </div> 
              </div>
           </div> 
                {/*Last Section */}
                <div className='flex justify-between flex-wrap'>
                {/*First Box */}
               <div className='lg:w-[64%] w-full  h-[85vh] p-2 space-x-2 mt-5'>
                {/*box container */}
                <div className='flex justify-between flex-wrap mb-6'>

                  <div className='lg:w-[48%] w-full cursor-pointer h-[10vh bg-white rounded-md] p-6 rounded-md shadow-md hover:border border-orange'>
                    <div className='flex space-x-2 mb-2'>
                      <button className='p-2 bg-seagreen text-whitesmoke rounded-lg'><FaReceipt/></button>
                      <p>Received Order</p>
                      </div>
                     <div className='flex items-center'><h1 className='text-3xl'>1400</h1><p className='text-gray'>/Pack</p></div>
                  </div>

                  <div className='lg:w-[48%] w-full h-[10vh cursor-pointer bg-white rounded-md] p-6 rounded-md shadow-md lg:mt-0 mt-2 hover:border border-orange'>
                    <div className='flex space-x-2 mb-2'>
                      <button className='p-2 bg-orange text-whitesmoke rounded-lg'><FaCableCar/></button>
                      <p>Ordering Process</p>
                    </div>
                    <div className='flex items-center'><h1 className='text-3xl'>1202</h1><p className='text-gray'>/Pack</p></div>
                  </div>
                </div>

                {/*chart section*/}
                <div className='h-60 flex justify-between flex-wrap'>
                  {/*donut chart section*/}
                  <div className='lg:w-[48%] w-full cursor-pointer lg:overflow-hidden overflow-y-scroll lg:h-[65vh] h-[65vh] bg-white p-4 rounded-md shadow-md'>
                    <div className='flex justify-between items-center'>
                      <p className='text-sm font-semibold'>Average Sales</p>
                      <select className='border-none outline-none font-semibold bg-whitesmoke p-1 shadow-md rounded-lg'>
                        <option>month</option>
                        <option>january</option>
                        <option>february</option>
                        <option>april</option>
                      </select>
                    </div>
                    <h1 className='text-3xl font-bold mt-3 p-2 bg-white relative z-10'>$95.557</h1>
                     {/*donut chart section*/}
                     <div className='relative -top-11'>
                      <Donutchart/>
                      <div>
                      </div>
                      </div>
                  </div>
                  {/*barchart section*/}
                  <div className='lg:w-[48%] w-full cursor-pointer h-[40vh bg-white rounded-md] p-4 rounded-md shadow-md lg:mt-0 mt-4'>
                  <div className='flex justify-between items-center'>
                      <p className='font-semibold text-sm'>Average Visitors</p>
                      <select className='outline-none font-semibold bg-whitesmoke p-1 shadow-md rounded-lg'>
                        <option>Weeky</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                        <option>Monday</option>
                      </select>
                    </div>
                    <div className='flex items-end'><h1 className='text-3xl font-bold mt-3'>560.395</h1><p className='text-gray'>/user</p></div>
                    {/*barchart section*/}
                    <div className='relative top-20'><Barchart/></div>
                    <div className='flex justify-between'>
                      <div className='flex space-x-1 items-center'>
                        <div className='w-3 h-3 bg-olivedrab rounded-full'></div><p>Current</p>
                      </div>

                      <div className='flex space-x-1 items-center'>
                        <div className='w-3 h-3 bg-orange rounded-full'></div><p>Last Month</p>
                      </div>
                       
                       <div className='flex space-x-1 items-center'>
                         <p className='font-semibold'>20%</p>
                         <span className='text-seagreen font-semibold'>~</span>
                       </div>
                    </div>
                  </div>
                </div>
               </div>

               {/*Second Box */}
               <div className='lg:w-[35%] w-full h-[100vh] bg-white p-2 space-x-2 lg:-mt-10 mt-[38rem] shadow-md rounded-md'>
                <div className='mb-1 overflow-hidden p-2'>
                  <p className='p-1 text-lg font-bold mb-2'>Sales Mapping by country</p>
                  <div className='relative right-2'><Map/></div>
                  </div>
                <div className='lg:overflow-hidden overflow-x-scroll'><Bar/></div>
               </div>
            </div>
           </div>
       </div>
    </div>
  )
}

export default Dashboard;
