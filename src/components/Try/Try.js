import React from "react";
import { Container } from "react-bootstrap";
import custombanner from "../../images/custombanner.png";
import "./Try.css";

const Try = () => {
  return (
    <div className="try">
      <Container>
        <div className="tryimg">
          <img src={custombanner} alt="" />
        </div>
        <div className="imgtxt">
          <h1>Try Hosting</h1>
          <p>
            Earn extra income and unlock new opportunities by sharing your
            space.
          </p>
          <a className="learn" href="#">Learn More</a>
        </div>
      </Container>
    </div>
  );
};

export default Try;
