import Navbar from "../components/Navbar"
import {motion} from "framer-motion"

export default function Home(){

return(

<div
className="
relative
min-h-screen
overflow-hidden
glow"
>

<Navbar/>


<section

className="
min-h-[85vh]
px-5
flex
flex-col
items-center
justify-center
text-center"
>

<motion.h1

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

className="
metal
font-extrabold
text-5xl
md:text-8xl
leading-none
drop-shadow-[0_0_35px_rgba(255,255,255,0.10)]"
>

E-CELL CGC

</motion.h1>


<h2
className="
text-2xl
md:text-4xl
font-semibold
mt-6"
>

Where Ideas Take Life.

</h2>


<p
className="
max-w-[700px]
mt-6
leading-8"
>

{/* <strong className="text-lg">Website launching soon</strong> */}
<motion.strong
  className="
    text-lg
    font-semibold
    inline-block
    text-violet-600
    mt-2
  "
>
  Website launching soon
</motion.strong>

<br/>

<p className="text-white/65">Workshops • Startups • Networking</p>

</p>


<div
className="
flex flex-wrap
justify-center
gap-5
mt-12"
>

<a
href="/about"
className="
px-8 py-4
rounded-xl
bg-gradient-to-br
from-[#171717]
to-[#0c0c0c]
border border-white/10
hover:-translate-y-1.5
transition
hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]"
>

About Us

</a>


<a
href="/livestream"
className="
px-8 py-4
rounded-xl
bg-gradient-to-br
from-[#171717]
to-[#0c0c0c]
border border-white/10
hover:-translate-y-1.5
transition
hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]"
>

Watch Live

</a>

</div>

</section>

</div>

)

}