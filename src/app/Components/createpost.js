'use client'
import { useState } from "react";
import Vpost from "./Viewpost";
import { POST } from "../api/posts/route";




function Cpost(){
  let [data,setdata]=useState({
    title:"",
    content:""
  });

  const handlechange=(e)=>{
    let {name,value}=e.target;
    setdata({...data,[name]:value});
  }
  const handlesubmit=async(e)=>{
    e.preventDefault();
    // console.log(data);


    const dataa=await fetch("/api/posts",{
        method:'POST',
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify(data)
    })
    if(!data){
        alert("error")
    }
    else{
        alert("Succefully uploaded")
    }


  }


return(
    <div className="max-w-[80%] m-auto mt-[10%] text-center">
        <h1 className="text-4xl pb-[20px]">Enter details to create post</h1>
      <form className="bg-amber-100 rounded-[7px] max-w-[100%] m-auto flex justify-center gap-[20px] p-[50px]" onSubmit={handlesubmit}>
        <input className="border-s-orange-950 p-[5px] border-1" type="text" placeholder="title" required name="title" value={data.title} onChange={handlechange}/>
        <input className="border-s-orange-950 p-[5px] border-1 w-[700px]" type="text" placeholder="content" required name="content" value={data.content} onChange={handlechange}/>
        <button className="bg-blue-600  text-white px-[9px] py-[3px] rounder-[2px]" type="submit">Save</button>
      </form>
    </div>
)


}
export default Cpost;

