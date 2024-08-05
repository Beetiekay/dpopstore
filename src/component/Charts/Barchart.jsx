import React from 'react'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend
)


const Barchart = () => {
    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thur'],
        datasets: [
            {
            label:'369',
            data: [8, 6, 7, 7],
            backgroundColor: 'darkseagreen',
            borderColor: 'black',
            borderWidth: 1,
            },
            {
            label:'333',
            data: [6, 5, 6, 6],
            backgroundColor: 'orange',
            }
        ]
    }

    const options = {
        
    }
  return (
    <div className='w-[100%] h-[40vh]'>
      <Bar
       data={data}
       options={options}
      >
        
      </Bar>
    </div>
  )
}

export default Barchart