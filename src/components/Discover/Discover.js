import React from "react";
import { Container } from "react-bootstrap";
import Dog from "../../images/Dog.png";
import Home from "../../images/Home.png";
import House from "../../images/House.png";
import Sea from "../../images/Sea.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Discover = () => {
  return (
    <div className="discover d-flex">
      <Container>
        <Row>
          <div className="section6 d-flex">
            <div className="section4-heading">
              <h1>Discover thing to do</h1>
            </div>
          </div>
          <div className="row">
            <Col lg={4} md={6} sm={6} col={12}>
              <div className="Dog  ">
                <div className="img1 ">
                  <img src={Dog} alt="" />
                </div>
                    <p className="dog1">pets allowes</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6} col={12}>
              <div className="losanglese align-items-center">
                <div className="img1 ">
                  <img src={Home} alt="" />
                </div>
                <a href="">
                  <div className="Los-Angeles-txt">
                    <p>pets allowes</p>
                  </div>
                </a>
              </div>
            </Col>
            <Col lg={4} md={6} sm={6} col={12}>
              <div className="losanglese  align-items-center">
                <div className="img1 ">
                  <img src={House} alt="" />
                </div>
                <a href="">
                  <div className="Los-Angeles-txt">
                    <p>pets allowes</p>
                  </div>
                </a>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Discover;
