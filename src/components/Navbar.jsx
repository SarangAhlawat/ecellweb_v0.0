import {Link} from "react-router-dom";

export default function Navbar(){

return(

<nav className="nav">

<div className="logo">
E-CELL CGC
</div>

<div className="links">

<Link to="/about">
About
</Link>

<a href="/livestream">
LiveStream
</a>

<a
href="https://esummit.ecellcgc.in"
target="_blank"
>
E-Summit'26
</a>

</div>

</nav>

)

}