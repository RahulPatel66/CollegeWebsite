import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
    return (
        <>
            <h1 style={{"background":"aqua","color":"green","alignItems":"center","textAlign":"center","marginTop":"1rem","paddingTop":"0.5rem","paddingBottom":"0.5rem" }}>About US</h1>

            <div className="container" >
                <div className="row">
                    <div className="col-md-6">
                        <img src="./images/about.jpg" alt="img" style={{"width":"100%","height":"100%"}} />
                    </div>
                    <div className="col-md-6">
                        <div className="card w-100" >
                            
                                <div className="card-body">
                                    <h5 className="card-title">TSEC The Best College Of India</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deleniti accusantium dolores optio ipsa officia facilis, quo molestias quisquam ut dolorem corrupti officiis? Aspernatur recusandae laudantium ea est quidem, neque ratione necessitatibus illum inventore, sint adipisci corrupti, deserunt accusantium libero hic perspiciatis eligendi voluptate dicta cum animi minus similique veniam quis. Alias consectetur cum, asperiores aliquid tempore quisquam non blanditiis, eaque repellat accusamus sit a. Unde alias accusantium voluptates reprehenderit aspernatur laudantium et tenetur? Possimus animi placeat quibusdam reiciendis facere, minus, saepe consequuntur consequatur ab quaerat unde. Ad voluptatem quae reprehenderit deleniti sint necessitatibus. Adipisci iure officia porro, suscipit eum, explicabo ut a illum eius quas fugit mollitia velit temporibus ea hic ad dolores autem at numquam doloribus similique veniam laboriosam natus. Quisquam, modi. Voluptatum maiores suscipit nemo et perspiciatis optio minima eius reiciendis necessitatibus quia, numquam placeat. Obcaecati quasi culpa modi totam reprehenderit fugit officia perferendis ad, assumenda libero veritatis laboriosam consequuntur, id mollitia autem nisi? Mollitia, quod repellat! Perspiciatis sed vel vitae ut dicta quaerat repudiandae praesentium cupiditate hic ratione reprehenderit, labore odio quis, iste magni tenetur mollitia dolores deserunt sit! Natus fuga nostrum in necessitatibus, maxime dolore maiores impedit cumque eos dolores soluta! Nihil, aliquam numquam voluptas accusantium nobis dolorem ea quibusdam</p>
                                  
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default About;