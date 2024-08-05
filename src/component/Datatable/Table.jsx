import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Table1 from './Table tab/Table1';
import Table2 from './Table tab/Table2';
import Table3 from './Table tab/Table3';
import Table4 from './Table tab/Table4';
import Table5 from './Table tab/Table5';
import Table6 from './Table tab/Table6';

export default () => (
  <Tabs className='min-w-max mt-2 '>
    <TabList className='w-[90%] text-center flex justify-around px-5 font-normal lg:text-base text-sm'>
      <Tab className='p-2 cursor-pointer focus:border-b-[3px]  border-seagreen outline-none'>All Order</Tab>
      <Tab className='p-2 cursor-pointer focus:border-b-[3px]  border-seagreen outline-none'>Received (20)</Tab>
      <Tab className='p-2 cursor-pointer focus:border-b-[3px]  border-seagreen outline-none'>Shipping (39)</Tab>
      <Tab className='p-2 cursor-pointer focus:border-b-[3px]  border-seagreen outline-none'>Complaint (1)</Tab>
      <Tab className='p-2 cursor-pointer focus:border-b-[3px]  border-seagreen outline-none'>Canceled (4)</Tab>
      <Tab className='p-2 cursor-pointer focus:border-b-[3px]  border-seagreen outline-none'>Done (2039)</Tab>
    </TabList>

    <TabPanel className="w-full flex justify-center">
       <div className='lg:w-[90%] w-full'><Table1/></div>
        </TabPanel>
        <TabPanel className="w-full flex justify-center">
          <div className='lg:w-[90%] w-full'><Table2/></div>
        </TabPanel>
        <TabPanel className="w-full flex justify-center">
          <div className='lg:w-[90%] w-full'><Table3/></div>
        </TabPanel>
        <TabPanel className="w-full flex justify-center">
          <div className='lg:w-[90%] w-full'><Table4/></div>
        </TabPanel>
        <TabPanel className="w-full flex justify-center">
          <div className='lg:w-[90%] w-full'><Table5/></div>
        </TabPanel>
        <TabPanel className="w-full flex justify-center">
          <div className='lg:w-[90%] w-full'><Table6/></div>
       </TabPanel>
  </Tabs>
);