import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AllStudent=({id,usename,roll,lastname,name,email,password,year,branch})=>{

return(
    <>        

       <div className="col-md-4 ">
        <div className="card bg-warning p-1 m-1" style={{"width":"21rem"}}>
            <h5 className="card-title text-center"><span className="text-success">User Name</span> :<span className="text-dark"> {usename}</span></h5>
            <h3 className="card-title text-center"><span className="text-success">Name :</span> <span className="text-dark">{name} {lastname}</span></h3>
            <div className="card-body text-center">
                <p className="card-text">Email : {email}</p>
                <p className="card-text">Password : {password}</p>
                <p className="card-text">Year : {year}, branch : {branch}</p>
                <p className="card-text">Roll Number {roll}</p>
            </div>
         
        </div>
        </div>
    </>
)
}

export default AllStudent;