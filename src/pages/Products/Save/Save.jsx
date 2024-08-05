import React from 'react'
import Sidebar from '../../../component/Sidebar/Sidebar'
import Mobilnavbar from '../../../component/mobilnavbar/Mobilnavbar'
import { FiSearch} from 'react-icons/fi';
import Notification from '../../../component/Notification/Notification';
import Responsive from '../../../component/Responsive/Responsive';
import { FaCartPlus, FaFirefoxBrowser, FaStar, FaUser, } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import long1 from "../assets/long1.jpg";
import short1 from "../assets/short1.jpeg"
import short2 from "../assets/short3.jpeg"
import short3 from "../assets/short3.jpeg"
import {SlBadge, SlDrawer, SlPower, SlSocialDropbox, SlStar} from "react-icons/sl"
import { FaAngleDoubleLeft, FaBlackTie } from 'react-icons/fa';

const Save = () => {
  return (
    <div className='flex bg-whitesmoke'>
        <Sidebar/>
        <div className='w-screen'>
         {/* header */}
        <header className='w-full flex justify-between h-16 p-4 bg-white -mt-1'>
        <div className='flex space-x-2'>
        <div className='flex items-center relative lg:top-0 lg:left-0 -top-1 left-20'><Link to={"/Products"}><FaAngleDoubleLeft className='text-xl text-seagreen animate-pulse'/></Link></div>
          <div className='sm:flex lg:hidden space-x-2'><Mobilnavbar/></div>
          <div><p className='font-semibold lg:text-lg text-xs'>Products</p></div>
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
        {/* header */}

        {/* body */}
         <div className='lg:flex justify-between block lg:w-full w-screen h-[91vh] p-4 overflow-y-scroll'>
             {/* left container */}
            <div className='lg:w-[42%] w-full h-full rounded-lg border-b-[1rem] border-whitesmoke overflow-y-scroll'>

            <div className='w-full p-2 bg-white rounded-lg mb-5'>
               <button className='w-full flex justify-center p-2 outline-none mb-5'>
                <img src={long1} className='lg:w-[30vw] w-full h-[50vh] rounded-lg border-2 border-seagreen'/>
              </button>
              {/* Tripple images */}
              <div className='w-full flex px-4'>
                <div className='columns-3 gap-2'>
                  <span><img src={short1} className='lg:w-[85%] w-full rounded-lg border-2 border-gray shadow-md cursor-pointer'/></span>
                  <span><img src={short2} className='lg:w-[85%] w-full rounded-lg border-2 border-gray shadow-md cursor-pointer'/></span>
                  <span><img src={short3} className='lg:w-[85%] w-full rounded-lg border-2 border-gray shadow-md cursor-pointer'/></span>
                </div>   
              </div>
            </div>
             
               {/* two rate box */}
               <div className='flex justify-between flex-wrap p-2'>
                <button className='lg:w-48 w-full bg-white p-5 rounded-lg shadow-inner outline-none hover:border-2 hover:border-x-seagreen'>
                  <div className='flex gap-2 mb-2'>
                    <button className='p-2 bg-seagreen text-whitesmoke rounded-lg'><SlBadge/></button>
                    <p className='font-semibold'>Ratings</p>
                  </div>

                  <div className='flex justify-start mb-2'><button className='p-2 text-lg bg-seagreen text-whitesmoke rounded-lg'><h1>4.9</h1></button></div>

                  <div className='flex gap-2 mb-2'>
                    <span className='text-lg text-orange'><FaStar/></span>
                    <span className='text-lg text-orange'><FaStar/></span>
                    <span className='text-lg text-orange'><FaStar/></span>
                    <span className='text-lg text-orange'><FaStar/></span>
                    <span className='text-lg text-orange'><FaStar/></span>
                  </div>
                  <div><p className='text-gray text-sm'>Based on of 05 ratings</p></div>
                </button>

                <button className='lg:w-48 w-full bg-white p-5 rounded-lg shadow-inner outline-none hover:border-2 hover:border-x-seagreen lg:mt-0 mt-5'>
                    <div className='flex gap-2 mb-2'>
                      <button className='p-2 bg-seagreen text-whitesmoke rounded-lg'><FaFirefoxBrowser/></button>
                    <  p className='font-semibold'>Global Review</p>
                    </div>

                    <div className='flex justify-between items-center mb-1'>
                      <p className='font-semibold'>Lucia</p>

                      <div className='flex '>
                         <span className=' text-orange'><FaStar/></span>
                         <span className=' text-orange'><FaStar/></span>
                         <span className=' text-orange'><FaStar/></span>
                         <span className=' text-orange'><FaStar/></span>
                         <span className=' text-orange'><FaStar/></span>
                      </div>
                    </div>

                    <div className='mb-1'>
                      <p className='text-xs text-left text-gray'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing Exercitatione!
                      </p>
                    </div>

                    <div className='flex'>
                        <span><img src={short1} className='lg:w-[80%] w-full rounded-lg border-2 border-gray'/></span>
                        <span><img src={short2} className='lg:w-[80%] w-full rounded-lg border-2 border-gray'/></span>
                        <span><img src={short3} className='lg:w-[80%] w-full rounded-lg border-2 border-gray'/></span>
                    </div>
                </button>
               </div>
            </div>
             {/* left container */}

             {/* right container */}
            <div className='lg:w-[55%] w-full h-full rounded-lg border-b-[1rem] border-whitesmoke p-2 overflow-y-scroll'>

            <div className='flex justify-between flex-wrap mb-3'>
               <button className='lg:w-[47%] w-full outline-none hover:border-2 hover:border-x-seagreen p-5 bg-white rounded-lg'>
                <div className='flex gap-2 mb-2'>
                   <button className='p-2 bg-seagreen text-whitesmoke rounded-lg'><SlSocialDropbox/></button>
                  <  p className='font-semibold'>Stock</p>
                  </div>

                  <div className='flex items-end'>
                    <p className='text-3xl font-bold'>245</p><span className='font-semibold text-sm text-gray'>/Pack</span></div>
              </button>

              <button className='lg:w-[47%] w-full outline-none hover:border-2 hover:border-x-redish p-5 bg-white rounded-lg lg:mt-0 mt-2'>
                <div className='flex gap-2 mb-2'>
                   <button className='p-2 bg-redish2 bg-opacity-50 text-redish rounded-lg'><FaCartPlus/></button>
                  <  p className='font-semibold'>Sales</p>
                  </div>

                  <div className='flex items-end'>
                    <p className='text-3xl font-bold'>12.345</p><span className='font-semibold text-sm text-gray'>/Pack</span></div>
              </button>
            </div>
             
                <div className=' bg-white rounded-lg p-4 border-b-[2rem] border-whitesmoke overflow-x-scroll'>

                  <div className='flex justify-between items-center mb-2'>
                    <div><h1 className='text-2xl font-bold'>Name Product</h1><span className='text-sm font-semibold text-gray'>ID Product</span></div>
                    <p className='text-2xl font-bold text-green'>$80.00</p>
                  </div>
                  
                  <div className='mb-2'>
                    <h1 className='mb-2 font-semibold text-gray'>About Product</h1>
                    <p className='mb-2'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facere sit laborum ratione repellat accusamus, aspernatur minus numquam voluptas dicta!
                    </p>
                  </div>

                  <div className='mb-2'>
                    <p className='font-semibold text-gray mb-2'>Varient Product</p>
                    <div className='flex gap-2'>
                      <button className='outline-none focus:bg-seagreen focus:text-whitesmoke p-2 bg-whitesmoke rounded-lg border border-gray'>Sweet Flower</button>
                      <button className='outline-none focus:bg-seagreen focus:text-whitesmoke p-2 bg-whitesmoke rounded-lg border border-gray'>Deep Forest</button>
                      <button className='outline-none focus:bg-seagreen focus:text-whitesmoke p-2 bg-whitesmoke rounded-lg border border-gray'>Ocean</button>
                      <button className='outline-none focus:bg-seagreen focus:text-whitesmoke p-2 bg-whitesmoke rounded-lg border border-gray'>Vanilla blue</button>
                    </div>
                  </div>

                  <div className='mb-2'>
                    <p className='font-semibold text-gray mb-2'>Size Product</p>
                    <div className='flex gap-2'>
                      <button className='p-2 focus:bg-seagreen focus:text-whitesmoke bg-whitesmoke rounded-lg border border-gray outline-none'>Travel Size</button>
                      <button className='p-2 focus:bg-seagreen focus:text-whitesmoke bg-whitesmoke rounded-lg border border-gray outline-none'>60ml</button>
                    </div>
                  </div>

                  <div>
                    <p className='font-semibold text-gray mb-2'>Additional Information</p>

                    <p className='font-semibold font-mono mb-2'>Items Detail:10*23 om</p>
                     
                     <p className='font-semibold font-sans mb-4'>
                      How to use:m dolor sit hdjjsj alt amet consectetur.Eget Gravida nisl
                      faucibus egesta
                     </p>

                     <p className='font-sans'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reiciendis ipsam architecto reprehenderit quas voluptates est nobis in ducimus repudiandae.
                     </p>
                  </div>
                </div>
            </div>
            {/* right container */}
         </div>
       {/* body */}
        </div>
     </div>
  )
}

export default Save