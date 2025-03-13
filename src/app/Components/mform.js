'use client'

import { useState } from "react";
import { subbtn } from "../widget/button";


function Mform(){

   let [sgender,setshender]=useState('')

   const genderhandlechange=(e)=>{
    setshender(e.target.value)
   }

   let [slang,setslang]=useState([]);

   const lhandlechange=(e)=>{
    let s=e.target.value;
   
    console.log(s);
    setslang([...slang,s])
    
   }

    let [data,setdata]=useState({
        nam:"",
        email:"",
        phone:"",
        dob:"",
        // male:"",
        // female:""
    })

   
    let handlechange=(e)=>{
        let {name,value}=e.target;
        setdata({...data,[name]:value});
       
        // setfinaldata({...data,gender:sgender,language:slang})
       
       
    }

   
    let [finaldata,setfinaldata]=useState({data});

    let handleform=(e)=>{
        e.preventDefault();
        
         setdata({...data,gender:sgender,languages:slang})
          
        // setfinaldata({...data,gender:sgender,languages:slang})
            // setfinaldata({data,gender:sgender,language:slang});
           
                console.log(data);
         
         
     
     
        
        
    }


    return(
        <div>
           <form className="max-w-[30%] m-auto " onSubmit={handleform}>
            <div className="p-3">

           <div className="flex flex-col gap-1">
            <label>Name:</label>
            <input className="border-1 p-0.5" type="text" name="nam" value={data.nam} required placeholder="name" onChange={handlechange}/>
           </div>

             <div className="flex flex-col">
            <label>Email:</label>
            <input  className="border-1 p-0.5" type="email" name="email" value={data.email} required placeholder="email" onChange={handlechange}/>
            </div> 
            <div className="flex flex-col">
            <label>Phone No:</label>
            <input  className="border-1 p-0.5"type="number" name="phone" value={data.phone} required  placeholder="phone" onChange={handlechange}/>
            </div>

            <div className="flex flex-col">
            <label>Dob</label>
            <input  className="border-1 p-0.5"type="date" name="dob" value={data.dob} required placeholder="dob" onChange={handlechange}/>
             </div>
            
              <div className="flex flex-col  mt-3">
                 <label>Gender</label>
           
           
                 <label htmlFor="Male"> <input type="radio" name="gender"  value="male"    checked={sgender==='male'} onChange={genderhandlechange}/>Male</label>
                 <label htmlFor="Female"><input type="radio" name="gender"  value="female"  checked={sgender==='female'} onChange={genderhandlechange}/>Female</label>
           
           {/* <label htmlFor="Male"> <input type="radio" name="gender"  value={data.male}    checked={sgender==='male'} onChange={handlechange}/>Male</label>
           <label htmlFor="Female"><input type="radio" name="gender"  value={data.female}  checked={sgender==='female'} onChange={handlechange}/>Female</label> */}
            </div> 
           
             <div className="flex flex-col mt-3 ">
             <label>Languages</label>

           
             <label htmlFor="english"> <input type="checkbox"  name="English" value="english"  onChange={lhandlechange}/>English</label>
             <label htmlFor="Hindi"><input type="checkbox" name="Hindi" value="hindi" onChange={lhandlechange}/>Hindi</label>
             <label htmlFor="Kannada"><input type="checkbox" name="kannda" value='kannada'  onChange={lhandlechange}/>Kannada</label>            
             <label htmlFor="Malayalam"><input type="checkbox" name="malayalam" value="malayalam"  onChange={lhandlechange}/>Malayalam</label>
             </div>
             <div className="text-center mt-1.5">
             <button type="submit" className={subbtn}>Submit</button>
             </div>


             </div>

        </form>

        </div>
    )
}

export default Mform;