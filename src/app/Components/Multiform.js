'use client'

import { useState } from "react";
import { subbtn } from "../widget/button";


function Mfform(){

//    let [sgender,setshender]=useState('')

//    const genderhandlechange=(e)=>{
//     setshender(e.target.value)
//    }

//    let [slang,setslang]=useState([]);

//    const lhandlechange=(e)=>{
//     let s=e.target.value;
   
//     console.log(s);
//     setslang([...slang,s])
    
//    }
    let [G,setG]=useState('');
    let [L,setL]=useState('');

    let [data,setdata]=useState({
        nam:"",
        male:"",
        female:"",
        kan:"",
        eng:"",
        maly:""
    })

   
    let handlechange=(e)=>{
        let {name,value}=e.target;
        setdata({...data,[name]: value});
       
        // setfinaldata({...data,gender:sgender,language:slang})
       
       
    }

   
    // let [finaldata,setfinaldata]=useState({data});

    let handleform=(e)=>{
        e.preventDefault();
        console.log(data);}
        
        
    //      setdata({...data,gender:sgender,languages:slang})
          
    //     // setfinaldata({...data,gender:sgender,languages:slang})
    //         // setfinaldata({data,gender:sgender,language:slang});
           
    //             console.log(data);
         
         
     
     
        
        
    // }


    return(
        <div>
           <form className="max-w-[30%] m-auto " onSubmit={handleform}>
            <div className="p-3">

           <div className="flex flex-col gap-1">
            <label>Name:</label>
            <input className="border-1 p-0.5" type="text" name="nam" value={data.nam} required placeholder="name" onChange={handlechange}/>
           </div>

              <div className="flex flex-col  mt-3">
                 <label>Gender</label>
           
           
                 <label htmlFor="Male"> <input type="radio" name="male"  value={G?true:false} checked={true?setG(true):setG(false)}   onChange={handlechange}/>Male</label>
                 <label htmlFor="Female"><input type="radio" name="female"  value={checked?true:false} checked={true?setG(true):setG(false)} onChange={handlechange}/>Female</label>
           
       
            </div> 
           
             <div className="flex flex-col mt-3 ">
             <label>Languages</label>

           
             {/* <label htmlFor="english"> <input type="checkbox"  name="lang" value="kan"  onChange={handlechange}/>English</label>
             <label htmlFor="Hindi"><input type="checkbox" name="lang" value="eng" onChange={handlechange}/>Hindi</label>
             <label htmlFor="Kannada"><input type="checkbox" name="lang" value='maly'  onChange={handlechange}/>Kannada</label>             */}
             {/* <label htmlFor="Malayalam"><input type="checkbox" name="lang" value="malayalam"  onChange={lhandlechange}/>Malayalam</label> */}
             </div>
             <div className="text-center mt-1.5">
             <button type="submit" className={subbtn}>Submit</button>
             </div>


             </div>

        </form>

        </div>
    )
}

export default Mfform;