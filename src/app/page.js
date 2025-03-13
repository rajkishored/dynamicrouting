import Image from "next/image";
import { Nav } from "./Components/nav";

export default function Home() {
  return (
    <div >
      <Nav/>
      <Image src="/mountain.jpg" alt="imgasd" width={1680 } height={500}/>
    </div>
  );
}
