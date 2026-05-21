import Navbar from "../components/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RegisterEvent(){

const [designation,setDesignation]=useState("");

return(

<div className="min-h-screen bg-gradient-to-b from-[#080808] to-[#111]">

<Navbar/>

<div className="max-w-5xl mx-auto px-6 py-10">

{/* Poster */}

<div
className="
overflow-hidden
rounded-[28px]
border border-white/10
bg-[#111]
mb-12
shadow-[0_0_40px_rgba(255,255,255,.04)]
">

<img
src="/poster.png"
alt="Design Thinking Event"
className="
w-full
h-[100px]
md:h-[260px]
object-cover"
/>

</div>


{/* Event Intro */}

<motion.div

initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}

className="
text-center
mb-14"

>

<div className="metal-yellow text-sm tracking-[4px]">

E-CELL CGC LANDRAN PRESENTS

</div>

<h1
className="
metal
font-extrabold
text-4xl
md:text-6xl
mt-3"
>

Design Thinking

</h1>

<p className="text-white/60 mt-4 text-lg">

with Anuj Sharma

</p>

<div className="mt-8 text-white/70 leading-8 max-w-4xl mx-auto">

<p>

Learn how innovators and founders discover opportunities where others see ordinary problems. Most successful startups begin with understanding people - their frustrations, habits and needs.


</p>

</div>

</motion.div>



<div
className="
rounded-[30px]
border border-white/5
bg-white/[0.03]
backdrop-blur-xl
p-8 md:p-12
">

<h2 className="text-3xl font-bold mb-2">

Reserve Your Seat

</h2>

<p className="text-white/60 mb-10">

29 May 2026 • 3:00–4:00 PM |

Session portal activates at 4 PM |

Certificates will be shared with attendees

</p>


<div className="grid md:grid-cols-2 gap-6">

<input
placeholder="Full Name"
className="field"
/>

<input
placeholder="Email Address"
className="field"
/>

<input
placeholder="City"
className="field"
/>

<select
className="field"
onChange={(e)=>
setDesignation(e.target.value)
}
>

<option>
Choose Designation
</option>

<option>
Student
</option>

<option>
Founder
</option>

<option>
Working Professional
</option>

</select>


{
designation==="Student" &&

<>

<input
placeholder="College Name"
className="field"
/>

<select className="field">

<option>
Current Year
</option>

<option>
1st Year
</option>

<option>
2nd Year
</option>

<option>
3rd Year
</option>

<option>
4th Year
</option>

</select>

<input
placeholder="Course"
className="field"
/>

</>

}



{
designation==="Founder" &&

<>

<input
placeholder="Company Name"
className="field"
/>

<textarea
placeholder="What does your company do?"
className="field min-h-[120px]"
/>

</>

}



{
designation==="Working Professional" &&

<>

<input
placeholder="Company / Organization"
className="field"
/>

<input
placeholder="Role"
className="field"
/>

<input
placeholder="Experience"
className="field"
/>

</>

}



<select className="field">

<option>
What excites you most?
</option>

<option>
Finding startup ideas
</option>

<option>
Learning design thinking
</option>

<option>
Networking
</option>

<option>
Innovation mindset
</option>

<option>
Problem solving
</option>

</select>



<textarea

className="
field
md:col-span-2
min-h-[120px]
"

placeholder="What's one problem around you that you wish someone solved?"

/>


<textarea

className="
field
md:col-span-2
min-h-[120px]
"

placeholder="If you could build something tomorrow, what would it be?"

/>


<select
className="
field
md:col-span-2"
>

<option>

How did you hear about this event?

</option>

<option>
WhatsApp
</option>

<option>
Instagram
</option>

<option>
Friends
</option>

<option>
College Community
</option>

<option>
LinkedIn
</option>

</select>

</div>


<button

className="
mt-10
w-full
py-4
rounded-xl

bg-gradient-to-r
from-yellow-500
to-yellow-300

text-black
font-bold

hover:scale-[1.01]
transition"

>

Complete Registration

</button>

</div>

</div>

</div>

)

}