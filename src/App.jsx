import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import {Routes,Route,Navigate} from "react-router-dom";
import Navbar1 from "./Navbar1";
import Footer from "./Footer";

const App=()=>{
    return(
        <>
           <Navbar1/>
           <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/service" element={<Service/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Navigate replace to="/" />} />  {/*redict substitute */}
           </Routes>
           <Footer/>
        </>
    )
}

export default App;