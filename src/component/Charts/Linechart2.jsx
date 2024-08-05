import { Legend } from 'chart.js';
import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';


const ProductSales = [

  {
    name: 'Jan',
    dollar: 1340,
    product2: 2400,
  },
  {
    name: 'Feb',
    dollar: 1460,
    product2: 2210,
  },
  {
    name: 'Mar',
    dollar: 2300,
    product2: 2290,
  },
  {
    name: 'April',
    dollar: 2380,
    product2: 2000,
  },
  {
    name: 'jun',
    dollar: 3460,
    product2: 2400,
  },
  {
    name: 'jul',
    dollar: 3440,
    product2: 500,
  },
  {
    name: 'Aug',
    dollar: 3750,
    product2: 900,
  },
  {
    name: 'Sept',
    dollar: 3756,
    product2: 3100,
  },
  {
    name: 'Sept',
    dollar: 8256,
    product2: 3100,
  },
  {
    name: 'Sept',
    dollar: 4256,
    product2: 3100,
  },
  {
    name: 'Sept',
    dollar: 3756,
    product2: 3100,
  },
  {
    name: 'Sept',
    dollar: 3256,
    product2: 3700,
  },
  {
    name: 'Sept',
    dollar: 3256,
    product2: 5100,
  },
  {
    name: 'Sept',
    dollar: 4256,
    product2: 3100,
  },
  {
    name: 'Sept',
    dollar: 3256,
    product2: 3100,
  },
  {
    name: 'Sept',
    dollar: 4556,
    product2: 5100,
  },
  {
    name: 'Sept',
    dollar: 3956,
    product2: 5100,
  },
  {
    name: 'Sept',
    dollar: 4256,
    product2: 3100,
  },
  {
    name: 'Sept',
    dollar: 4456,
    product2: 7100,
  },
  {
    name: 'Sept',
    dollar: 9356,
    product2: 3100,
  },
  {
    name: 'Sept',
    dollar: 2256,
    product2: 6100,
  },
  {
    name: 'Sept',
    dollar: 2156,
    product2: 8100,
  },
];
const Linechart = () => {
  return (
  <div className='relative right-16 top-5'>
    <AreaChart width={304} height={150} margin={{ right:30 }} data={ProductSales}>
    <CartesianGrid strokeDasharray="0 9" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip/>
      <Legend/>
      <Area
      type="monotone" 
      dataKey="dollar"
      stroke='#6b8e23' 
      fill='#ffa500'
      stackId={1}
      />
    </AreaChart>
   </div>     
  )
};

export default Linechart;