import {useState} from "react";
import {Link} from "react-router-dom";

export default function Navbar(){

const [isOpen,setIsOpen]=useState(false);

return(

<nav
className="sticky top-0 z-50
flex flex-wrap items-center justify-between
gap-4
px-5 sm:px-[8%] py-4 sm:py-6
bg-black/60
backdrop-blur-xl
border-b border-white/5"
>

<div
className="
text-xl sm:text-2xl md:text-3xl
font-extrabold
tracking-[2px]
metal"
>
<Link to="/">E-CELL CGC</Link>
</div>

<button
type="button"
onClick={()=>setIsOpen((value)=>!value)}
aria-expanded={isOpen}
aria-label="Toggle navigation menu"
className="
md:hidden
inline-flex items-center justify-center
w-11 h-11
rounded-full
border border-white/10
bg-white/5
text-white/90"
>

<span className="text-xl leading-none">☰</span>

</button>

<div
className="
hidden md:flex
items-center
gap-5 md:gap-9
text-sm text-white/80"
>

<Link
to="/about"
className="
hover:text-white
transition
relative
after:absolute
after:w-0
after:h-[2px]
after:bg-white
after:left-0
after:-bottom-2
hover:after:w-full
after:transition-all"
>

About

</Link>


<a
href="https://youtube.com/live/x4g3A5tHYEM?feature=share"
className="
hover:text-white
transition
relative
after:absolute
after:w-0
after:h-[2px]
after:bg-white
after:left-0
after:-bottom-2
hover:after:w-full
after:transition-all"
>

Live

</a>


<a
href="https://esummit.ecellcgc.in"
target="_blank"
rel="noreferrer"
className="
hover:text-white
transition
relative
after:absolute
after:w-0
after:h-[2px]
after:bg-white
after:left-0
after:-bottom-2
hover:after:w-full
after:transition-all"
>

E-Summit'26

</a>

</div>

<div
className={`
w-full md:hidden
overflow-hidden
transition-all duration-300 ease-out
${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
>

<div className="
flex flex-col
gap-3
pt-4
border-t border-white/10
text-sm text-white/80">

<Link
to="/about"
onClick={()=>setIsOpen(false)}
className="py-2 hover:text-white transition"
>

About

</Link>

<a
href="https://livestream-ecell.vercel.app"
onClick={()=>setIsOpen(false)}
className="py-2 hover:text-white transition"
>

Live

</a>

<a
href="https://esummit.ecellcgc.in"
target="_blank"
rel="noreferrer"
onClick={()=>setIsOpen(false)}
className="py-2 hover:text-white transition"
>

E-Summit'26

</a>

</div>

</div>

</nav>

)

}