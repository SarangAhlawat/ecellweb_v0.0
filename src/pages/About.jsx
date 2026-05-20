import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function About() {

const cards=[

{
title:"Innovation",
desc:"Transforming ideas into practical solutions through creativity and experimentation."
},

{
title:"Community",
desc:"Building a network of ambitious students, founders and innovators."
},

{
title:"Learning",
desc:"Workshops, speaker sessions and hands-on experiences from industry experts."
},

{
title:"Leadership",
desc:"Creating future leaders who build ventures and solve real-world problems."
}

]

return(

<div className="aboutPage">

<Navbar/>

<section className="aboutHero">

<motion.h1
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="metal"
>

About E-CELL CGC

</motion.h1>

<p>

E-CELL CGC is building a culture where ideas,
innovation and entrepreneurship thrive.

We connect students with opportunities,
mentorship and experiences that encourage
them to create, collaborate and lead.

</p>

</section>


<section className="mission">

<div>

<h2>Our Mission</h2>

<p>

To empower students with entrepreneurial
mindsets through workshops, networking,
startup exposure and leadership opportunities.

</p>

</div>

<div>

<h2>Our Vision</h2>

<p>

To establish a strong entrepreneurial ecosystem
where students become creators and problem-solvers.

</p>

</div>

</section>



<section className="values">

<h2>What Drives Us</h2>

<div className="cardGrid">

{

cards.map((item,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}

transition={{
delay:index*.15
}}

viewport={{once:true}}

className="valueCard"

>

<h3>
{item.title}
</h3>

<p>
{item.desc}
</p>

</motion.div>

))

}

</div>

</section>



<section className="timeline">

<h2>Journey Ahead</h2>

<div className="timelineLine">

<div className="step">
<span>01</span>
<p>Workshops</p>
</div>

<div className="step">
<span>02</span>
<p>Startup Events</p>
</div>

<div className="step">
<span>03</span>
<p>E-Summit 2026</p>
</div>

<div className="step">
<span>04</span>
<p>Build Ecosystem</p>
</div>

</div>

</section>


<footer>

<h3>E-CELL CGC</h3>

<p>
Innovate • Build • Lead
</p>

</footer>

</div>

)

}