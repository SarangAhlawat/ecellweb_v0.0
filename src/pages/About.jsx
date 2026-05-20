import Navbar from "../components/Navbar"
import {motion} from "framer-motion"

export default function About(){

const cards=[

{
title:"Innovation",
desc:"Transforming ideas into practical solutions through creativity and experimentation."
},

{
title:"Community",
desc:"Building a network of ambitious students founders and innovators."
},

{
title:"Learning",
desc:"Workshops speaker sessions and hands-on experiences from industry experts."
},

{
title:"Leadership",
desc:"Creating future leaders who build ventures and solve real-world problems."
}

]

return(

<div
className="
min-h-screen
bg-gradient-to-b
from-[#080808]
to-[#111111]"
>

<Navbar/>


<section
className="
pt-24 sm:pt-32
px-5 sm:px-[10%]
max-w-[1100px]
mx-auto
text-center"
>

<h1
className="
metal
font-extrabold
text-4xl sm:text-5xl
md:text-7xl
mb-8"
>

About E-CELL CGC

</h1>


<p
className="
max-w-[800px]
mx-auto
text-white/70
leading-7 sm:leading-9
text-sm sm:text-base"
>

E-CELL CGC is building a culture where ideas,
innovation and entrepreneurship thrive.

We connect students with opportunities,
mentorship and experiences that encourage
them to create collaborate and lead.

</p>

</section>



<section
className="
grid
md:grid-cols-2
gap-6 sm:gap-10
px-5 sm:px-[10%]
py-16 sm:py-28"
>

<div
className="
p-6 sm:p-10
rounded-[28px]
bg-white/[0.03]
border border-white/5
backdrop-blur-xl
hover:-translate-y-2
transition
hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
>

<h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6 font-bold">

Our Mission

</h2>

<p className="text-white/70 leading-7 sm:leading-8 text-sm sm:text-base">

To empower students with entrepreneurial
mindsets through workshops networking startup
exposure and leadership opportunities.

</p>

</div>


<div
className="
p-6 sm:p-10
rounded-[28px]
bg-white/[0.03]
border border-white/5
backdrop-blur-xl
hover:-translate-y-2
transition
hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
>

<h2 className="text-2xl sm:text-3xl mb-4 sm:mb-6 font-bold">

Our Vision

</h2>

<p className="text-white/70 leading-7 sm:leading-8 text-sm sm:text-base">

To establish a strong entrepreneurial ecosystem
where students become creators and problem-solvers.

</p>

</div>

</section>



<section
className="
px-5 sm:px-[10%]
text-center"
>

<h2
className="
text-3xl sm:text-4xl md:text-5xl
font-bold
mb-10 sm:mb-16"
>

What Drives Us

</h2>


<div
className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-5 sm:gap-8"
>

{
cards.map((item,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*.15
}}

className="
relative
overflow-hidden
p-6 sm:p-9
rounded-[24px]
bg-gradient-to-br
from-[#161616]
to-[#0c0c0c]
border border-white/5
hover:-translate-y-2
transition
hover:shadow-[0_0_40px_rgba(255,255,255,0.07)]"
>

<div
className="
absolute
w-[160px] sm:w-[200px]
h-[160px] sm:h-[200px]
top-[-80px] sm:top-[-100px]
right-[-80px] sm:right-[-100px]
bg-radial-[rgba(255,255,255,.04),transparent]"
/>

<h3
className="
text-xl sm:text-2xl
font-bold
mb-4"
>

{item.title}

</h3>

<p className="leading-7 sm:leading-8 text-white/70 text-sm sm:text-base">

{item.desc}

</p>

</motion.div>

))
}

</div>

</section>



<section
className="
py-20 sm:py-32
px-5 sm:px-[10%]
text-center"
>

{/* <h2
className="
text-4xl md:text-5xl
font-bold
mb-16"
>

Journey Ahead

</h2> */}


{/* <div
className="
flex
flex-wrap
justify-center
gap-8"
>

{["Workshops","Startup Events","E-Summit 2026","Build Ecosystem"]
.map((item,index)=>(

<div

key={index}

className="
w-[180px]
h-[180px]
rounded-full
bg-gradient-to-br
from-[#151515]
to-[#090909]
border border-white/5
flex
flex-col
justify-center
items-center
hover:scale-105
transition
hover:shadow-[0_0_30px_rgba(255,255,255,0.07)]"
>

<span
className="
metal
font-extrabold
text-4xl"
>

0{index+1}

</span>

<p className="mt-2 text-white/70">

{item}

</p>

</div>

))}

</div> */}

</section>



<footer
className="
py-16
text-center
border-t border-white/5"
>

<h3
className="
text-3xl
font-bold
mb-3"
>

E-CELL CGC

</h3>

<p className="text-white/60">

Innovate • Build • Lead

</p>

</footer>

</div>

)

}