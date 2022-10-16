import React from "react";
import { Route,Routes } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import About from "./Component/About";
import Service from "./Component/Service";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import LogIn from "./Component/LogIn";
import SignUp from "./Component/SignUp";
import Card from "./Component/Card";
const App=()=>{
  return(
    <>
        <NavBar/>
        <Routes>
        <Route path="/" element={<LogIn/>}></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Service" element={<Service/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/SignUp" element={<SignUp/>}></Route>
          <Route path="/AllStudent" element={<Card/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
    </>
  )
}


export default App;