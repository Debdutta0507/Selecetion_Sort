import React, { useEffect, useState } from 'react'
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import {useSpring,animated} from 'react-spring'
import './app.css'
Chart.register(CategoryScale);

function App(){
    const [count,setCount]=useState(0)
    const [chartData,setchartData] =useState({
    labels: ['Red', 'Orange', 'Blue','Yellow','Violet','green','hijjko'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
        {
          label: 'Popularity of colours',
          data: [16,13,18,2,1,3,4],
          // you can set indiviual colors for each bar
          backgroundColor: [
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)',
            'rgba(255, 0, 255, 0.6)'
            
          ],
          borderWidth: 1,
        }
    ]
})
const props = useSpring({
    config: { duration: 1000 }, // Adjust the duration as needed
    from: { opacity: .9},
    to: { opacity: 1 },
    reset: true,
    onRest: () => setCount((prev) => prev + 1),
  });

const lengthOfArray=chartData.datasets[0].data.length



useEffect(()=>{
         if(count<lengthOfArray-1)
            {
                let min=count
                for(let j=count;j<lengthOfArray;j++)
                {
                if(chartData.datasets[0].data[j]<chartData.datasets[0].data[min])
                  { 
                    min=j
                    
                  }
                }
                let temp = [...chartData.datasets[0].data];
                [temp[count], temp[min]] = [temp[min], temp[count]]
                
                setchartData((prev)=>({
                    ...prev,
                    datasets:[{
                        ...prev.datasets[0],
                        data:temp

                    }]
                }))
               
             
            }

        

},[count])
console.log('backgroundcolor',chartData)

    return(
        <>
        
        <animated.div style={props}>
        <div className='sorting'>
        <div>{chartData.datasets[0].data.map((val)=>`${val},`)}</div>
       <Bar data={chartData}/>
       </div>
       </animated.div>
       </>
      
    )}
export default App