import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import {useNavigate} from "react-router-dom";


const LogIn = () => {
  const navigate = useNavigate();
  let [data, usedata] = useState([]);
  let [studata,usestudeta] = useState([]);
  
  function change(e)
  {
      usedata({...data,[e.target.name]:e.target.value});
  }

  function submit(e)
  {
      e.preventDefault();
      async function getData()
      {
          var d = await axios.get("http://restp.herokuapp.com/student/");
          usestudeta(d.data);
      }
      getData();
     
      studata.map((v)=>{
          if(v.roll==data.roll&&v.password==data.password)
          {
              navigate("/Home");
          }
      });
     
  }
  return (
    <>

      <div className="card bg-light m-auto" id="card" style={{ "width": "30%", "top": "5rem" }}  >
        <img className="card-img-top m-auto" src="./images/user.webp" alt="Card " style={{ "width": "20%", "height": "20%" }} />
        <div className="card-body">
          <h5 className="card-title text-center">User Login Page</h5>



          <form onSubmit={submit}>
            <div className="form-group">
              <label for="exampleInputEmail1">Roll Number</label>
              <input type="number" name="roll" className="form-control" id="exampleInputEmail1" onChange={change} aria-describedby="emailHelp" placeholder="Enter Roll Number" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" name="password" className="form-control" onChange={change} id="exampleInputPassword1" placeholder="Password" />
            </div>


            <div className="form-group" style={{ "textAlign": "center","marginTop":"1rem" }}>

              <input type="submit"  className="btn form-control btn-primary" value="Login" />
            </div>
            <a href="SignUp" style={{ "display": "block", "textAlign": "right", "color": "blue", "textDecoration": "underline" }}>Don`t have account?</a>
         
         
          </form>
          
            
        </div>

      </div>

    </>
  )
}

export default LogIn;