import {Link} from "react-router-dom";

export default function Navbar(){

return(

<nav
className="sticky top-0 z-50
flex justify-between items-center
px-[8%] py-6
bg-black/60
backdrop-blur-xl
border-b border-white/5"
>

<div
className="
text-2xl md:text-3xl
font-extrabold
tracking-[2px]
metal"
>
<Link to="/">E-CELL CGC</Link>
</div>


<div
className="
flex items-center
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
href="/livestream"
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

LiveStream

</a>


<a
href="https://esummit.ecellcgc.in"
target="_blank"
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

</nav>

)

}