import React from "react";
import Hostvideo2 from '../../images/Hostvideo2.mp4'
import "./Hostpage2.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";


const Hostpage2 = () => {
  return (<>
    <div className="main-box d-flex">
     
      <div className="video-section  d-flex">
      <iframe src={Hostvideo2} height="100%" width="100%" title="YouTube video player" frameborder="0" allow=" autoplay;" autoplay muted></iframe>
      </div>
      <div className="host-section">
        <h1 className="host-heading">Become a Host in 10 easy steps</h1>
        <h5 className="host-h5">Join us. We'll help you every step of the way.</h5>
        <Link to='/hostpage3' className="host-btn">Let's Go</Link>
        {/* <button className="host-btn">Try hosting</button> */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Hostpage2;
