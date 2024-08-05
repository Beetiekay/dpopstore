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
    dollar: 2460,
    product2: 2210,
  },
  {
    name: 'Mar',
    dollar: 4300,
    product2: 2290,
  },
  {
    name: 'April',
    dollar: 2780,
    product2: 2000,
  },
  {
    name: 'jun',
    dollar: 6460,
    product2: 2400,
  },
  {
    name: 'jul',
    dollar: 3440,
    product2: 500,
  },
  {
    name: 'Aug',
    dollar: 2550,
    product2: 900,
  },
  {
    name: 'Sept',
    dollar: 1256,
    product2: 3100,
  },
];
const Linechart = () => {
  return (
  <div>
    <AreaChart width={750} height={300} margin={{ right:30 }} data={ProductSales}>
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