import React,{useState,useEffect} from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./Explore.css";
import LosAngeles1 from "../../images/Los-Angeles-1.png";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import slider3 from "../../images/slider3.jpg";
import slider4 from "../../images/slider4.jpg";
import slider5 from "../../images/slider5.jpg";
import Sea from "../../images/Sea.png";
import myroom1 from "../../images/myroom1.png";
import Records from "../../data/record.json"
import slider6 from "../../images/slider6.jpg";

const Explore = () => {


  
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch("https://onestay.3waytech.co/api/room_list").then((result)=>{
      result.json().then((resp)=>{
        setData(resp)
      })
    })
  },[])
  
  return (
    <div className="explore">
      <Container>
        <Row>
          <div className="section2 d-flex">
            <div className="section2-heading">
              <h1>Explore nearby</h1>
            </div>
          </div>
          <div className="json-div d-flex">
            <div className="row d-flex">
              {
                data.map((item) => {
                  return (
                    <Col lg={3} md={3} sm={6} col={12}>
                      <div className="losanglese align-items-center">
                        <Link to={"/detail/"+item.id}>
                          <div className="img1 ">
                            <Carousel
                              interval={null}
                              style={{ objectFit: "cover" }}
                            >
                              
                              <Carousel.Item style={{ height: "346px" }}>
                                <img
                                  className="sliderimg d-block w-100"
                                  src={myroom1}
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
                              <b>{item.address}</b>
                              <p>{item.description}</p>
                              <p>{item.check_in} - {item.check_out}</p>
                              <p>
                                <b>{item.price}</b> / night
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
                                className="fa-solid fa-heart"
                                style={{ color: "tomato" }}
                              ></i>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </Col>
                  );
                })}
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Explore;
