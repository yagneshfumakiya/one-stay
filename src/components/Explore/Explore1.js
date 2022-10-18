import React from "react";
// import "./data/profile.json";
import "./Explore1.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./Explore.css";
import LosAngeles1 from "../images/Los-Angeles-1.png";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import slider3 from "../images/slider3.jpg";
import slider4 from "../images/slider4.jpg";
import slider5 from "../images/slider5.jpg";
import Sea from "../images/Sea.png";
// import "./data/profile.json";

const Explore1 = (props) => {
  return (
    <div className="explore">
      <Container>
        <Row>
          <div className="section2 d-flex">
            <div className="section2-heading">
              <h1>Explore nearby</h1>
            </div>
          </div>

          {props.data.map((content) => (
            <div className="json-div d-flex">
              <Col lg={3} md={3} sm={6} col={12}>
                <div className="losanglese align-items-center">
                  <Link to="/detail">
                    <div className="img1 ">
                      <Carousel interval={null} style={{ objectFit: "cover" }}>
                        <Carousel.Item style={{ height: "346px" }}>
                          <img
                            className="sliderimg d-block w-100"
                            src={Sea}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item style={{ height: "346px" }}>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            style={{ height: "100%" }}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item style={{ height: "346px" }}>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item style={{ height: "346px" }}>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider4}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item style={{ height: "346px" }}>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider5}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                      {/* <i className="fa-regular fa-heart" ></i> */}
                    </div>
                    <div className="Los-Angeles-txt d-flex">
                      <div className="detail-content">
                        <b>{content.id}</b>
                        <p>{content.first_name}</p>
                        <p> {content.last_name}</p>
                        <p> {content.email}</p>
                        <p> {content.gender}</p>
                        <p></p>
                      </div>
                      <div className="now">
                        <p>
                          <i
                            className="fa-sharp fa-solid fa-star"
                            style={{ fontSize: "12px" }}
                          ></i>
                          Now
                        </p>
                      </div>
                      <div className="wishlist">
                        <i
                          class="fa-solid fa-heart"
                          style={{ color: "tomato" }}
                        ></i>
                      </div>
                    </div>
                  </Link>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6} col={12}>
                <div className="losanglese align-items-center">
                  <a href="">
                    <div className="img1 ">
                      <Carousel interval={null}>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider4}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider5}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="Los-Angeles-txt d-flex">
                      <div className="detail-content">
                        <b>{content.id}</b>
                        <p>{content.first_name}</p>
                        <p> {content.last_name}</p>
                        <p> {content.email}</p>
                        <p> {content.gender}</p>
                        <p></p>
                      </div>
                      <div className="now">
                        <p>
                          <i
                            className="fa-sharp fa-solid fa-star"
                            style={{ fontSize: "12px" }}
                          ></i>
                          Now
                        </p>
                      </div>
                      <div className="wishlist">
                        <i
                          class="fa-solid fa-heart"
                          style={{ color: "tomato" }}
                        ></i>
                      </div>
                    </div>
                  </a>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6} col={12}>
                <div className="losanglese align-items-center">
                  <a href="">
                    <div className="img1 ">
                      <Carousel interval={null}>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider4}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider5}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="Los-Angeles-txt d-flex">
                      <div className="detail-content">
                        <b>MV,Maldives</b>
                        <p>2197 Kilometers</p>
                        <p>22-27 OCT</p>
                        <p>
                          <b>₹43,011</b> night
                        </p>
                      </div>
                      <div className="now">
                        <p>
                          <i
                            className="fa-sharp fa-solid fa-star"
                            style={{ fontSize: "12px" }}
                          ></i>
                          Now
                        </p>
                      </div>
                      <div className="wishlist">
                        <i
                          class="fa-solid fa-heart"
                          style={{ color: "tomato" }}
                        ></i>
                      </div>
                    </div>
                  </a>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6} col={12}>
                <div className="losanglese  align-items-center">
                  <a href="">
                    <div className="img1 ">
                      <Carousel interval={null}>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider4}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider5}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="Los-Angeles-txt d-flex">
                      <div className="detail-content">
                        <b>MV,Maldives</b>
                        <p>2197 Kilometers</p>
                        <p>22-27 OCT</p>
                        <p>
                          <b>₹43,011</b> night
                        </p>
                      </div>
                      <div className="now">
                        <p>
                          <i
                            className="fa-sharp fa-solid fa-star"
                            style={{ fontSize: "12px" }}
                          ></i>
                          Now
                        </p>
                      </div>
                      <div className="wishlist">
                        <i
                          class="fa-solid fa-heart"
                          style={{ color: "tomato" }}
                        ></i>
                      </div>
                    </div>
                  </a>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6} col={12}>
                <div className="losanglese align-items-center">
                  <a href="">
                    <div className="img1 ">
                      <Carousel interval={null}>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider4}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider5}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="Los-Angeles-txt d-flex">
                      <div className="detail-content">
                        <b>MV,Maldives</b>
                        <p>2197 Kilometers</p>
                        <p>22-27 OCT</p>
                        <p>
                          <b>₹43,011</b> night
                        </p>
                      </div>
                      <div className="now">
                        <p>
                          <i
                            className="fa-sharp fa-solid fa-star"
                            style={{ fontSize: "12px" }}
                          ></i>
                          Now
                        </p>
                      </div>
                      <div className="wishlist">
                        <i
                          class="fa-solid fa-heart"
                          style={{ color: "tomato" }}
                        ></i>
                      </div>
                    </div>
                  </a>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6} col={12}>
                <div className="losanglese align-items-center">
                  <a href="">
                    <div className="img1 ">
                      <Carousel interval={null}>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider4}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider5}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="Los-Angeles-txt d-flex">
                      <div className="detail-content">
                        <b>MV,Maldives</b>
                        <p>2197 Kilometers</p>
                        <p>22-27 OCT</p>
                        <p>
                          <b>₹43,011</b> night
                        </p>
                      </div>
                      <div className="now">
                        <p>
                          <i
                            className="fa-sharp fa-solid fa-star"
                            style={{ fontSize: "12px" }}
                          ></i>
                          Now
                        </p>
                      </div>
                      <div className="wishlist">
                        <i
                          class="fa-solid fa-heart"
                          style={{ color: "tomato" }}
                        ></i>
                      </div>
                    </div>
                  </a>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6} col={12}>
                <div className="losanglese  align-items-center">
                  <a href="">
                    <div className="img1 ">
                      <Carousel interval={null}>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider4}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider5}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="Los-Angeles-txt d-flex">
                      <div className="detail-content">
                        <b>MV,Maldives</b>
                        <p>2197 Kilometers</p>
                        <p>22-27 OCT</p>
                        <p>
                          <b>₹43,011</b> night
                        </p>
                      </div>
                      <div className="now">
                        <p>
                          <i
                            className="fa-sharp fa-solid fa-star"
                            style={{ fontSize: "12px" }}
                          ></i>
                          Now
                        </p>
                      </div>
                      <div className="wishlist">
                        <i
                          class="fa-solid fa-heart"
                          style={{ color: "tomato" }}
                        ></i>
                      </div>
                    </div>
                  </a>
                </div>
              </Col>
              <Col lg={3} md={3} sm={6} col={12}>
                <div className="losanglese align-items-center">
                  <a href="">
                    <div className="img1 ">
                      <Carousel interval={null}>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="First slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="Second slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider3}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                            className="sliderimg d-block w-100"
                            src={slider4}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                        <Carousel.Item className="s-item">
                          <img
                            className="sliderimg d-block w-100"
                            src={slider5}
                            alt="Third slide"
                          />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className="Los-Angeles-txt d-flex">
                      <div className="detail-content">
                        <b>MV,Maldives</b>
                        <p>2197 Kilometers</p>
                        <p>22-27 OCT</p>
                        <p>
                          <b>₹43,011</b> night
                        </p>
                      </div>
                      <div className="now">
                        <p>
                          <i
                            className="fa-sharp fa-solid fa-star"
                            style={{ fontSize: "12px" }}
                          ></i>
                          Now
                        </p>
                      </div>
                      <div className="wishlist">
                        <i
                          class="fa-solid fa-heart"
                          style={{ color: "tomato" }}
                        ></i>
                      </div>
                    </div>
                  </a>
                </div>
              </Col>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Explore1;
