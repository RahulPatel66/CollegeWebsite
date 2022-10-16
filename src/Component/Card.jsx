import React,{useState,useEffect} from "react";
import AllStudent from './AllStudent';
import axios from "axios";

const Card = () => {
    let[data,usedata]=useState([]);
    useEffect(function(){
        async function getData()
        {
            var d = await axios.get("http://restp.herokuapp.com/student/");
            usedata(d.data);
        }
        getData();
    });
    return (
        <>
            <h1 style={{"background":"aqua","color":"green","alignItems":"center","textAlign":"center","marginTop":"1rem","paddingTop":"0.5rem","paddingBottom":"0.5rem","marginTop":"4rem" }}>AllStudent</h1>

            <div className="container"  >
                <div className="row" >
                    {
                        data.map((v) => {
                            return (
                                <>
                                    <AllStudent id={v.id} usename={v.username} roll={v.roll} lastname={v.last_name} name={v.first_name} email={v.email} password={v.password} year={v.year} branch={v.branch} />

                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Card;