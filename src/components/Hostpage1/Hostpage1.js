import React from "react";
// import Hostvideo1 from '../../images/Hostvideo1.mp4'
import Hostvideo2 from '../../images/Hostvideo2.mp4'
import "./Hostpage1.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";


const Hostpage1 = () => {
  return (<>
    <div className="main-box d-flex">
      <div className="host-section d-flex">
        <h1 className="host-heading">Open your door to hosting</h1>
        <Link to='/hostpage2' className="host-btn">Try hosting</Link>
      </div>
      <div className="video-section">
      <iframe src={Hostvideo2} height="100%" width="100%" title="YouTube video player" frameborder="0" allow=" autoplay;" autoplay muted></iframe>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Hostpage1;
