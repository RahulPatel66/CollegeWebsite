import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Error=()=>{
    return(
        <>
            <div style={{"marginTop":"8rem","marginLeft":"auto",textAlign:"center"}}>
            <h1 className="text-success">404 Error Page</h1>
            <h3 className="text-danger">Page Not Found</h3>
            </div>
        </>
    )
}

export default Error;