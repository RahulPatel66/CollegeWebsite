import React,{useState} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    let[data,usedata] = useState([]);
    function change(e){
            usedata({...data,[e.target.name]:e.target.value});
    }
    function submit(e){
        e.preventDefault();
        async function setData()
        {   

            var d = await axios.post("http://restp.herokuapp.com/student/",data);
            if(d.status===201)
            {
                alert("data Added successfully");
                navigate("/Home");
            }
            else
            {
                alert("something is wrong Please Try Again");
            }
        }
        setData();
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
                        <input type="number" name="roll" className="form-control" id="exampleInputEmail1" onChange={change} aria-describedby="emailHelp" placeholder="Enter Roll Number" required />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" onChange={change} id="exampleInputPassword1" placeholder="Password" required/>
                    </div>
                    <div className="form-group">
                        <label >Branch</label>
                        <input type="text" name="branch" className="form-control" onChange={change} placeholder="Enter Branch" required/>
                    </div>
                    <div className="form-group">
                        <label >UserName</label>
                        <input type="text" name="username" className="form-control" onChange={change} placeholder="Enter UserName Here" required/>
                    </div>
                    <div className="form-group">
                        <label >First Name</label>
                        <input type="text" name="first_name" className="form-control" onChange={change} placeholder="Enter First Name Here" required/>
                    </div>
                    <div className="form-group">
                        <label >Last Name</label>
                        <input type="text" name="last_name" className="form-control" onChange={change} placeholder="Enter Last Name" required/>
                    </div>
                    <div className="form-group">
                        <label >Year</label>
                        <input type="text" name="year" className="form-control" onChange={change} placeholder="Enter year" required/>
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="email" name="email" className="form-control" onChange={change} placeholder="Enter Email Here" required/>
                    </div>
                   
                    

                    <div className="form-group" style={{ "textAlign": "center",marginTop:"1rem" }}>

                        <input type="submit" className="btn form-control btn-primary" value="Login" />
                    </div>
                    <a href="/" style={{ "display": "block", "textAlign": "right", "color": "blue", "textDecoration": "underline" }}>Already have account?</a>

                </form>


            </div>

        </div>

    </>
    )
};

export default SignUp;