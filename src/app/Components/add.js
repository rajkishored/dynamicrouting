
'use client'

import { useState } from "react";

function ADD(props){

    let [win,setwin]=useState('');
    // console.log(props.in);
    // console.log(props.as);
    
    setTimeout(()=>{
        if(props.in>props.as){
            setwin("India won the match ")
        }
        else{
            setwin("Australia won the match ")
        }
    },3000)
   
    
return(
  <div className="results">
    <div className="Ind">
        <h3 style={{textAlign:"center", color: 'rgba(39, 175, 245, 3)',padding:"6px"}}>IND: <span>{props.in} / {Math.floor(Math.random()*10)}</span> </h3>
    </div>
    <div>
        <p style={{paddingTop:"11px"}}>"{win}"</p>
    </div>
        
    <div className="Aus">
        <h3 style={{textAlign:"center", color: 'rgba(245, 100, 3, 3)',padding:"6px" }}>AUS:  <span>{props.as} /  {Math.floor(Math.random()*10)}</span></h3>
    </div>
  </div>
)
    
}
export default ADD;