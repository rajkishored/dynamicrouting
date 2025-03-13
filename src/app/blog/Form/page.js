'use client'
import { CForm } from "@/app/Components/bargraph";
import { useRouter } from "next/navigation";



const Form=()=>{

    // let [data,setdata]=useState({
    //     nam:"",
    //     phone:"",
        
    // });
    const router=useRouter();


    return(
        <div className="formm">
            <div style={{maxWidth:"100%",height:"30px" ,backgroundColor:"#ffc433"}}><button onClick={()=>router.push("/")} className=" mb-[20px] bg-blue-600 m-l-[20%] text-white px-[9px] py-[3px] rounder-[2px]" >Back</button> </div>
            {/* <input type="text" name="nam" placeholder="username" required value={data.nam}/> */}
           <CForm />
        </div>
    )

}

export default  Form;