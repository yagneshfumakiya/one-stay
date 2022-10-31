import React from "react";
import "./Unique.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const Unique = () => {
  return (
    <div className="main-div d-flex">
       {console.log("yagnesh select the Unique")}
      <div className="main-section1">
        <h1>What kind of place will you host?</h1>
      </div>
      <div className="main-section2">
        <div className="tabs d-flex">
          <div className="ask">
            <Link to="#" className="ask1">
              Ask a Superhost
            </Link>
          </div>
          <div className="help">
            <Link to="#" className="help1">
              Help
            </Link>
          </div>
          <div className="save">
            <Link to="#" className="save1">
              Save and exit
            </Link>
          </div>
        </div>
        <div className="input-sction">
          <div className="home hover">
            <Link to="/hostpage1a" className="home1">
              <h4>Guest House</h4>
              <h6>Lorem ipsum, dolor sit amet consectetur amet consectetur </h6>
            </Link>
          </div>
          <div className="cabin hover">
            <Link to="/hostpage1a" className="cabin1">
              <h4>Guest Suit</h4>
              <h6>Lorem ipsum, dolor sit amet consectetur </h6>
            </Link>
          </div>
          <div className="villa hover">
            <Link to="/hostpage1a" className="villa1">
              <h4>Form stay</h4>
              <h6>Lorem ipsum, dolor sit amet consectetur </h6>
            </Link>
          </div>
          <div className="town hover">
            <Link to="/hostpage1a" className="town1">
              <h4>Holiday Home</h4>
              <h6>Lorem ipsum, dolor sit amet consectetur </h6>
            </Link>
          </div>
          <div className="cottage hover">
            <Link to="/hostpage1a" className="conttage1">
              <h4>Casa Particular</h4>
              <h6>Lorem ipsum, dolor sit amet consectetur </h6>
            </Link>
          </div>
          <div className="bungalow hover">
            <Link to="/hostpage1a" className="bungalow1">
              <h4>Holiday Home</h4>
              <h6>Lorem ipsum, dolor sit amet consectetur </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
