// // import axios from "axios"
// // import { Ultra } from "next/font/google";
// // import { notFound } from "next/navigation";

import Image from "next/image";
import { Nav } from "../Components/nav";


// // export default async function Page(){

// //     const data=await fetch('https://dummyjson.com/quotes?limit=20');
// //     const posts=await data.json()
// //     const p=posts.quotes;

    
    

// //     return(
// //         <ol>
// //           {p.map((v,i)=>{
// //             return <li key="i">{v.quote}</li>
// //           })}
// //         </ol>
// //     )
// // }import Image from "next/image";


export default function Home() {
  return (
    <div >
    <Nav/>
   
    <Image src="/mountain.jpg" alt="imgasd" width={1680 } height={200}/>
     
    
    </div>
  );
}
