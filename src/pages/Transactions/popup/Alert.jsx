import React from 'react'
import {IoMdCloseCircle, IoMdHome} from "react-icons//io";
import { BiMoneyWithdraw } from "react-icons/bi"
import pay from "./assets/pay.png";


export default function Alert({Visible, onClose}) {
    if (!Visible) return null;

  return(
    <div className='w-full h-full fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
    <div className='flex justify-center items-center'> 
     <div>
      <div className='lg:flex block bg-white space-x-2 lg:p-5 p-6 rounded-lg relative z-30'>
        <div className='flex items-center opacity-75'><BiMoneyWithdraw className='lg:text-[15rem] text-[5rem] lg:ml-0 ml-12 lg:animate-none animate-pulse text-seagreen'/></div>
        <div>
            <div className='text-right relative lg:top-0 -top-24 lg:left-0 left-4'>
                <button onClick={onClose}><IoMdCloseCircle className='text-2xl text-seagreen'/></button>
            </div>
         
             <h2 className='text-lg font-semibold font-sans mb-3'>Withdraw Balance</h2>
             <p className='text-sm font-sans text-gray mb-2'>Availabe For Withdraw</p>
             <h1 className='text-3xl font-bold mb-3'>$2.345.90</h1>
             <p className='text-xs font- mb-2'>Select your prefered payout method</p>

            <div>
               <button className='w-full flex justify-center font-semibold gap-2 p-2 border-2 border-seagreen  focus:bg-seagreen focus:text-white rounded-lg'>
               <div><IoMdHome className='text-2xl flex items-center'/></div>
                <h1>Bank Account</h1>
              </button>
               <br/>
              <button className='w-full flex justify-center border-2 border-seagreen font-semibold gap-2 p-1 focus:bg-seagreen focus:text-white rounded-lg'>
               <div><img src={pay} className='w-8'/></div>
               <h1 className='relative -left-3 text-lg'>Paypal</h1>
             </button>
            </div>  
        </div>
      </div>
      </div>
     </div>      
    </div>
  )};