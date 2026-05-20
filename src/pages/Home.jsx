import Navbar from "../components/Navbar";
import {motion} from "framer-motion";

export default function Home(){

return(

<div className="container">

<Navbar/>

<div className="hero">

<motion.h1

initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}

className="metal"

>

E-CELL CGC

</motion.h1>

<h2>

Building the Entrepreneurial Ecosystem

</h2>

<p>

Website launching soon

Workshops • Startups • Networking

</p>

<div className="buttons">

<a href="/about">
About Us
</a>

<a href="/livestream">
Watch Live
</a>

</div>

</div>

</div>

)

}