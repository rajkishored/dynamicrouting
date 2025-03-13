
'use client'


import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ADD from './add';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
// const labels=[1,2,3,4,5]







export function CForm() {

  // let [labels,setlabels]=useState([1,2,3,4]);
  const labels=[1,2,3,4,5]
  let [indx,setindx]=useState('');
  
 


let Indscore=0;
let Ausscore=0;
const In=()=>{
    
    let i=generateRandomData(30);
    Indscore+=i
    return i;

}
const As=()=>{
    
    let a=generateRandomData(30);
    
    
    Ausscore+=a
    return a

}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom', 
    },
    
    // Tooltip:{
    //   enabled:false,
    // },
    
    title: {
      display: true,
      text: 'India Vs Australia',
    },
  },
};
// (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// const labels = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
  //  const labels=[1,2,3,4]
   
  

const generateRandomData = (n)=>Math.floor(Math.random()*n);

let IND=0;
let AUS=0;
setTimeout(()=>{
    console.log(Indscore,Ausscore);
     const IND=Indscore;
    AUS=Ausscore;
    
},5000)



// let mass;
// let ssy= [23,12,34,22,54];
// let [tog,settog]=useState(true)
// let [m,setm]=useState();
const hello=(e)=>{
  console.log(e.target.getAttribute('data-value'));
  // let c=e.target.getAttribute('data-value');
  // if(e.target.getAttribute('data-value')==1){
  //   let ss=ssy.slice(1,)
  //   setm(ss)
   
  //   if(tog){
  //     mass=m;
  //   }
  //   else{
  //     mass=[0,0]
  //   }
  // }
  
  // setindx(c);
  
}

 const data = {
  labels,
  
  datasets: [
    {
      label: 'India',
      data:labels.map(() => In())
      ,
   
      backgroundColor: 'rgba(39, 175, 245, 0.8)',
    },
    // {
    //   label: 'Australia',
    //   data: labels.map(() => As()),
    //   backgroundColor: 'rgba(245, 241, 39, 0.8)',
    // },
    // {
    //     label: 'Dataset 3',
    //     data: labels.map(() =>generateRandomData(30)),
    //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //   },
    //   { 
    //     label: 'Dataset 4',
    //     data: labels.map(() =>generateRandomData(30)),
    //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //   },
  ],
};

  return <><Bar options={options} data={data} />
            {labels.map((v,i)=>{
              return <button style={{border:"1px solid black",padding:"3px",margin:"0px 20px"}} key={i} data-value={v}  onClick={hello }>{v}</button>
            })}
        
            <ADD in={Indscore} as={Ausscore} />

       

  </>;
}
