import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Sms from './Sms';
import Unread from './Unread';
import Complaint from './Complaint';

const Chatsusers = () => {
  return (
    <div>
    <Tabs>
       <TabList className='w-full p-2 text-center flex justify-between px-5 font-normal lg:text-base text-sm'>
        <Tab className="outline-none"><button className='w-16 p-1 focus:bg-seagreen focus:text-white border-2 border-seagreen rounded-lg cursor-pointer'>All</button></Tab>
        <Tab className="outline-none"><button className='w-16 p-1 focus:bg-seagreen focus:text-white border-2 border-seagreen rounded-lg cursor-pointer'>Unread</button></Tab>
        <Tab className="outline-none"><button className='w-24 p-1 focus:bg-seagreen focus:text-white border-2 border-seagreen rounded-lg cursor-pointer'>Complaint</button></Tab>
        </TabList>

       {/* tab body */}
       <TabPanel className="w-full p-1"><Sms/></TabPanel>
       <TabPanel className="w-full"><Unread/></TabPanel>
       <TabPanel className="w-full"><Complaint/></TabPanel>
       {/* tab body */}
    </Tabs>
    </div>
  )
}

export default Chatsusers