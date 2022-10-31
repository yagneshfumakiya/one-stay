import React from "react";
import "./Hostpage3.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const Hostpage3 = () => {
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
          <div className="flat hover">
            <Link to='/hostflat1' className="flat1">Flat</Link>
            
          </div>
          <div className="house hover">
            <Link to='/hostflat' className="House1">House</Link>
          </div>
          <div className="secoundary hover">
            <Link to='/secondary'className="Secondary1">Secondary Unit</Link>
          </div>
          <div className="unique hover">
            <Link to='/unique'className="Uniqe1">Uniqe Space</Link>
          </div>
          <div className="bed hover">
            <Link to='/bed' className="Bed1">Bed and breakfast</Link>
          </div>
          <div className="Boutique hover">
            <Link to='/boutique' className="Boutique1">Boutique Hotel</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hostpage3;
