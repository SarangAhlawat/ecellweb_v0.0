import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import RegisterEvent from "./pages/RegisterEvent"

export default function App(){

return(

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/about" element={<About/>}/>

<Route path="/registerevent" element={<RegisterEvent/>}/>

</Routes>

)

}