import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap-icons/font/bootstrap-icons.css";
const NavBar=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg fixed-top bg-primary" >
  <a className="navbar-brand text-white" href="/" style={{"margin-left":"1rem"}}>TSEC</a>
  <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon text-white"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link text-white" href="/Home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/About">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/Service">Service</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/Contact">Contact</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/AllStudent">AllStudent</a>
      </li>
     
     
     
    
    </ul>
    

    
    <ul className="navbar-nav " style={{"fontSize":"1.5rem","marginTop":"-0.4rem","marginBottom":"-0.6","marginRight":"1rem","margin-left":"auto"}} >
    <li className="nav-item">
        <a className="nav-link text-white" style={{"marginRight":"0"}} href="/"><i className="bi bi-person-circle"></i></a>
      </li>
    </ul>
  
  </div>
</nav>
        
        </>
    )
};

export default NavBar;