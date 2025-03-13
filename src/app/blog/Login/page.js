'use client'
import LogComp from "@/app/Components/Logincomp"
import { useRouter } from "next/navigation";


const Login=()=>{

    const router=useRouter();

    return(
        <>
         <div style={{maxWidth:"100%",height:"30px" ,backgroundColor:"#f4f2ed"}}><button onClick={()=>router.push("/")} className=" mb-[20px] bg-blue-600 m-l-[20%] text-white px-[9px] py-[3px] rounder-[2px]" >Back</button> </div>
       <LogComp/>
        </>
    )

}

export default Login;