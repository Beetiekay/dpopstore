import React, { useEffect, useRef } from 'react'
import chart from 'chart.js/auto';

const Donutchart = () => {

   const chartRef = useRef(null);
   const chartInstance = useRef(null);

  useEffect(() =>{
    if (chartInstance.current){
        chartInstance.current.destroy();

    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new chart(myChartRef, {
      type: 'doughnut',
      data: {
        labels: [
          'Skincare',
          'haircare',
          'Bodycare'
        ],
        datasets:[{
          data:[25,50,15],
          backgroundColor: [
            'rgb(128, 128, 128)',
            'rgb(143, 188, 143)',
            'rgb(255, 102, 0)'
          ],
          hoverOffset: 20
        }        
        ]
        
      }
    });
     return() =>{
     if (chartInstance.current){
        chartInstance.current.destroy();
      }

     }

  },[])
  return (
    <div className='w-[100%] h-[100vh]'>
      <canvas ref={chartRef}/>
      <div className='absolute top-36 left-[110px]'>
        <h1 className='text-3xl text-center font-bold lg:flex hidden'>95%</h1>
        <p className='text-gray lg:flex hidden'>On Process</p>
      </div>
    </div>
  )
}

export default Donutchart