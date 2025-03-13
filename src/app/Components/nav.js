import Link from "next/link";




export const Nav=()=>{

return(
    <div className="navv">
        <nav>
            <ul>
                <li> <Link style={{textDecoration:"none",color:"inherit"}} href="/blog/Create">Create</Link> </li>
                <li> <Link style={{textDecoration:"none",color:"inherit"}} href="/blog/Show">View</Link> </li>
                <li> <Link style={{textDecoration:"none",color:"inherit"}} href="/blog/Login">Login</Link> </li>
                <li> <Link style={{textDecoration:"none",color:"inherit"}} href="/blog/Sample">SAMPLE</Link> </li>
            </ul>
        </nav>
    </div>
)

}

