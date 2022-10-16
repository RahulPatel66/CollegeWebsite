import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
    return (
        <>
            <div className="container bg-warning" style={{"marginTop":"2rem","border":"2px solid black",marginBottom:"3rem",paddingBottom:"2rem"}}>
                <div className="row m-auto ">
                    <div className="col-md-4 text-center " style={{"marginTop":"1rem","width":"25rem"}}>
                        <h3 className="text-center">Quick Links</h3>
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-warning"><a href="/" style={{"textDecoration":"none"}}>Home</a></li>
                            <li class="list-group-item list-group-item-info"><a href="/About" style={{"textDecoration":"none"}}>About</a></li>
                            <li class="list-group-item list-group-item-warning"><a href="/Service" style={{"textDecoration":"none"}}>Service</a></li>
                            <li class="list-group-item list-group-item-info"><a href="/Contact" style={{"textDecoration":"none"}}>Contact</a></li>
                            <li class="list-group-item list-group-item-warning"><a href="/LonIn" style={{"textDecoration":"none"}}>LonIn</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-center" style={{"marginTop":"1rem","width":"25rem"}}>
                        <h3 className="text-center">Social Connection</h3>
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-warning"><a href="https://www.facebook.com/" style={{"textDecoration":"none"}}><i class="bi bi-facebook"></i> FaceBook</a></li>
                            <li class="list-group-item list-group-item-info"><a href="https://twitter.com/" style={{"textDecoration":"none"}}><i class="bi bi-twitter"></i> Twitter</a></li>
                            <li class="list-group-item list-group-item-warning"><a href="https://www.instagram.com/" style={{"textDecoration":"none"}}><i class="bi bi-instagram"></i> Instragram</a></li>
                            <li class="list-group-item list-group-item-info"><a href="https://www.messenger.com/" style={{"textDecoration":"none"}}><i class="bi bi-chat-dots"></i> Messanger</a></li>
                            <li class="list-group-item list-group-item-warning"><a href="https://telegram.org/" style={{"textDecoration":"none"}}><i class="bi bi-telegram"></i> Telegram</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-center" style={{"marginTop":"1rem","width":"25rem"}}>
                        <h3 className="text-center">Contact Details</h3>
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-warning"><a href="/" style={{"textDecoration":"none"}}>Email:- tsec@gmail.com</a></li>
                            <li class="list-group-item list-group-item-info"><a href="/" style={{"textDecoration":"none"}}>Phone No.:- +911234567890</a></li>
                            <li class="list-group-item list-group-item-warning"><a href="/" style={{"textDecoration":"none"}}>Tel. No.:- 123-1234</a></li>
                            <li class="list-group-item list-group-item-info"><a href="/" style={{"textDecoration":"none"}}>Website:- www.tsec.com</a></li>
                           
                        </ul>
                    </div>
                   
                </div>
            </div>
            <h3 className="fixed-bottom bg-success m-auto text-center p-1"><span style={{fontSize:"1.4rem"}}>Created By</span> <span className="text-warning"> <i style={{fontFamily:"cursive"}}>Mr. </i> <i>R. J. Patel</i></span></h3>
        </>
    )
};

export default Footer;