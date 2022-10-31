import React from "react";
import "./Live.css";
import { Container } from "react-bootstrap";
import Dog from "../../images/Dog.png";
import Home from "../../images/Home.png";
import House from "../../images/House.png";
import Sea from "../../images/Sea.png";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Live = () => {
  return (
    <div className="live d-flex">
      <Container>
        <Row>
          <div className="section4 d-flex">
            <div className="section4-heading">
              <h1>Live anywhere</h1>
            </div>
          </div>
          <div className="row">
            <Col lg={3} md={3} sm={6} col={12}>
              <div className="Dog  ">
                <div className="img1 ">
                  <img src={Dog} alt="" />
                </div>
                <a href="">
                  <div className="Los-Angeles-txt">
                    <p>pets allowes</p>
                  </div>
                </a>
              </div>
            </Col>
            <Col lg={3} md={3} sm={6} col={12}>
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
            <Col lg={3} md={3} sm={6} col={12}>
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
            <Col lg={3} md={3} sm={6} col={12}>
              <div className="losanglese  align-items-center">
                <div className="img1 ">
                  <img src={Sea} alt="" />
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

export default Live;

