import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Contact = () => {
    return (
        <>
            <h1 style={{ "background": "aqua", "color": "green", "alignItems": "center", "textAlign": "center", "marginTop": "1rem","paddingTop":"0.5rem","paddingBottom":"0.5rem" }}>Contact US</h1>

            <div className="container" >
                <div className="row">
                    <div className="col-md-6">
                        <img src="./images/contact.jpg" alt="img" style={{ "width": "100%", "height": "100%" }} />
                    </div>
                    <div className="col-md-6">
                        
                                <div className="card bg-light m-auto" id="card" style={{ "width": "100%","height":"100%" }}  >
                                  
                                    <div className="card-body">
                                        
                                        <form action="UserLogin">
                                        <div className="form-group" style={{"marginTop":"1rem"}}>
                                                <label for="exampleName">Name</label>
                                                <input type="text" name="name" style={{"marginTop":"0.3rem"}} className="form-control" id="exampleName" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                                            </div>
                                            <div className="form-group" style={{"marginTop":"1rem"}}>
                                                <label for="exampleInputEmail1">Email address</label>
                                                <input type="email" name="email" style={{"marginTop":"0.3rem"}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                            </div>
                                            <div className="form-group" style={{"marginTop":"1rem"}}>
                                                <label for="exampleInputPassword1">Message</label>
                                                <textarea name="password" className="form-control" style={{"height":"8rem","marginTop":"0.3rem"}} id="exampleInputPassword1" placeholder="Enter Message Here" ></textarea>
                                            </div>


                                          
                                            <div className="form-group" style={{ "textAlign": "center","marginTop":"1rem" }}>

                                                <input type="submit" className="btn form-control btn-primary" value="Send Message" />
                                            </div>
                                           
                                        </form>
                                    </div>

                                </div>
                            
                    </div>

                </div>
            </div>
        </>
    )
};

export default Contact;