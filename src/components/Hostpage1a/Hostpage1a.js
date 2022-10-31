import React from "react";
import "./Hostpage1a.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const Hostpage1a = () => {
  return (
  
    <div className="main-div d-flex">
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
            <Link to="#" className="home1">
              <h4>An entire place</h4>
            </Link>
          </div>
          <div className="cabin hover">
            <Link to="#" className="cabin1">
              <h4>A private room</h4>
            </Link>
          </div>
          <div className="villa hover">
            <Link to="#" className="villa1">
              <h4>A shared room</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hostpage1a;
