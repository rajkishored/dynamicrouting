'use client'

import axios from "axios";
import { Post } from "../post";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from 'next/navigation'

import{ useState, useEffect } from "react";


const LogComp=()=>{
     const router=useRouter();
    let[toggle,settoggle]=useState(false);

    

    useEffect(()=>{
       settoggle(true);
    },[])

    let [form,seform]=useState({
        mail:"",
        password:""
    })
    const handlechange=(e)=>{
        let {name,value}=e.target;
        seform({...form,[name]:value})
    }

   
    const handlesubmit=async(e)=>{
        e.preventDefault();
        console.log(form);
        
        
        try{
            const resp=Post('http://localhost:3002/log',{form});
            console.log((await resp).data.message);
            const r=(await resp).data.message
            if(r=="success"){
                
                router.push("/blog/Form")
               
                toast.success('Successfully Login', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,})
                  
            }
            else{
                toast.error('Invalid credential', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,})
            }

            
        }
        catch(error){
            console.log(error.stack);
            
        }
        
    }

    return(

        <div className="log">
           
          <form className={`logfor ${toggle? 'logfor2':''}`} onSubmit={handlesubmit} >
                <h2 className="text-3xl text-center mt-[20px]">Login</h2>
                <div className="inlog">
                    <input className="border-s-orange-950 p-[5px]  border-1" type="email" name="mail" value={form.mail} placeholder="email" required  onChange={handlechange}/>
                    <input className="border-s-orange-950 p-[5px] border-1"   type="password" name="password" value={form.password} placeholder="password" required  onChange={handlechange}/>
                    <div className="btn">
                        <button className=" mb-[20px] bg-blue-600 m-l-[20%] text-white px-[9px] py-[3px] rounder-[2px]" type="submit">Login</button>
                    </div>
                </div> 
                <ToastContainer/>
          </form>
          <h2>hello</h2>
        </div>
        
    )
}
export default LogComp;