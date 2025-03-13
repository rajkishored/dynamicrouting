import { Nav } from "@/app/Components/nav";
import Vpost from "@/app/Components/Viewpost";




const Showpost=()=>{


    return(
        <>
        <Nav/>

         <div className="max-w-[80%] m-auto mt-[40px] " >
         <h1 className="text-4xl pb-[20px] text-center">Posts</h1>
        <Vpost/>
        </div>
        </>
    )
}

export default Showpost;