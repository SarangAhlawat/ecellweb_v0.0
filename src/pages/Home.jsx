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
min-h-[82vh]
px-5 sm:px-6
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
text-4xl sm:text-5xl
md:text-8xl
leading-none
tracking-tight
drop-shadow-[0_0_35px_rgba(255,255,255,0.10)]"
>

E-CELL CGC

</motion.h1>


<h2
className="
text-xl sm:text-2xl
md:text-4xl
font-semibold
mt-6"
>

Where Ideas Take Life.

</h2>


<div
className="
max-w-[700px]
mt-6
leading-7 sm:leading-8
text-sm sm:text-base"
>

<motion.strong
className="
text-base sm:text-lg
font-semibold
inline-block
text-violet-600"
>

Website launching soon

</motion.strong>

<p className="mt-2 text-white/65">

Workshops • Startups • Networking

</p>

</div>


<div
className="
flex flex-wrap
justify-center
gap-4 sm:gap-5
mt-12"
>

<a
href="/about"
className="
px-6 sm:px-8 py-3.5 sm:py-4
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


{/* <a
href="/livestream"
className="
px-6 sm:px-8 py-3.5 sm:py-4
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

</a> */}

<a
href="/registerevent"
className="
px-6 sm:px-8 py-3.5 sm:py-4
rounded-xl
bg-gradient-to-br
from-[#171717]
to-[#0c0c0c]
border border-white/10
hover:-translate-y-1.5
transition
hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]"
>

Join Live

</a>


</div>

</section>

</div>

)

}