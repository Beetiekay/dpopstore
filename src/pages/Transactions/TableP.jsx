import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AllT from './Tables/AllT';
import Income from './Tables/Income';
import Pending from './Tables/Pending';
import Outcome from './Tables/Outcome';


const TableP = () => {
  return (
    <div>
   <Tabs className='min-w-max mt-2'>
     
      <TabList className='w-[90%] px-10 text-center flex justify-start font-normal lg:text-base text-sm'>
        <Tab className='p-2 cursor-pointer focus:border-b-[3px]  border-seagreen outline-none'>All Transaction</Tab>
        <Tab className='p-2 cursor-pointer focus:border-b-[3px]  border-seagreen outline-none'>Income</Tab>
        <Tab className='p-2 cursor-pointer focus:border-b-[3px]  border-seagreen outline-none'>Pending</Tab>
        <Tab className='p-2 cursor-pointer focus:border-b-[3px]  border-seagreen outline-none'>Outcome</Tab>
     </TabList>
       
     <TabPanel className="w-full flex justify-center">
          <div className='lg:w-[90%] w-full'><AllT/></div>
         </TabPanel>

         <TabPanel className="w-full flex justify-center">
              <div className='lg:w-[90%] w-full'><Income/></div>
        </TabPanel>

         <TabPanel className="w-full flex justify-center">
              <div className='lg:w-[90%] w-full'><Pending/></div>
        </TabPanel>

         <TabPanel className="w-full flex justify-center">
          <div className='lg:w-[90%] w-full'><Outcome/></div>
    </TabPanel>
   </Tabs>
   </div>
  )
}

export default TableP