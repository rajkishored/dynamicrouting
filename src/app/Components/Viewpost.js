'use client'
import { useEffect, useState } from "react"




 const Vpost=()=>{

    let [gdata,setgdata]=useState([]);

    useEffect(()=>{
        const fe=async()=>{
            const data=await fetch("/api/posts");
            const postss= await data.json();
            console.log(postss);
            
            setgdata(postss);

         }

         fe();
    },[])

    return(
        <div className="max-w-[100%] m-auto flex gap-[58px] flex-wrap" >
            
            {gdata.map((v,i)=>{
                return (<div className="basis-[30%] bg-amber-100  border-l-[2px] rounded-[4px]" key={i}>
                    <div className="p-[10px]">
                <h3 className="text-red-600 ">{v.title}</h3>
                <h4 >{v.content}</h4>
                </div>
                </div>)})
             
            }
        </div>
    )
}
export default Vpost;