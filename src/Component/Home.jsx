import React,{useEffect,useState} from "react";
import First from "./First";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Footer from "./Footer";
import Card from "./Card";
import axios from "axios";

const Home=()=>{
    
  
    return(
        <>
            <First/>
            <About/>
            <Service/>
            <Contact/>
            <Card/>
            <Footer/>
        </>
    )
};

export default Home;