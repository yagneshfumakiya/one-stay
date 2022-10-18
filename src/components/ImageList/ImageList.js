import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ImageList.css";
import slider6 from "../../images/slider6.jpg";
import slider7 from "../../images/slider7.jpg";
import maldives1 from "../../images/maldives1.jpg";
import maldives2 from "../../images/maldives2.jpg";
import bathroom3 from "../../images/bathroom3.jpg";
import vollayball1 from "../../images/vollayball1.jpg";
import vollayball2 from "../../images/vollayball2.jpg";
import boatview1 from "../../images/boatview1.jpg";
import h1 from "../../images/h1.png";
import h2 from "../../images/h2.png";
import h3 from "../../images/h3.png";
import h4 from "../../images/h4.png";
import h5 from "../../images/h5.png";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";

const ImageList = () => {
  const handleClose = () => {window.location.reload(false);};
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [lgShow, setLgShow] = useState('');
  return (
    <Container
      style={{ maxWidth: "1034px" }}
      data-fancybox
      onClick={() => setLgShow(true)}
    >
      {/* section1 */}
      <div className="section1 d-flex">
        <Link to="" className="img1">
          <img src={slider6} style={{ width: "510px" }} alt="" />
        </Link>
        <Link to="" className="img1">
          <img
            src={slider7}
            style={{ width: "510px", height: "382px" }}
            alt=""
          />
        </Link>
      </div>
      {/* section1 */}

      {/* section2 */}

      <div className="section2">
        <Link to="#" className="img2">
          <img src={slider6} style={{ width: "1034px" }} alt="" />
        </Link>
      </div>
      {/* section2 */}

      {/* section3 */}
      <div className="section3 d-flex">
        <Link to="#" className="img1">
          <img src={maldives1} style={{ width: "510px" }} alt="" />
        </Link>
        <Link to="#" className="img1">
          <img
            src={maldives2}
            style={{ width: "510px", height: "382px" }}
            alt=""
          />
        </Link>
      </div>
      {/* section3 */}

      {/* section4 */}

      <div className="section4">
        <Link to="#" className="img2">
          <img src={slider6} style={{ width: "1034px" }} alt="" />
        </Link>
      </div>
      {/* section4 */}
      {/* section5 */}
      <div className="section3 d-flex">
        <Link to="#" className="img1">
          <img src={maldives1} style={{ width: "510px" }} alt="" />
        </Link>
        <Link to="#" className="img1">
          <img
            src={maldives2}
            style={{ width: "510px", height: "382px" }}
            alt=""
          />
        </Link>
      </div>
      {/* section5 */}

      {/* section6 */}

      <div className="section4">
        <Link to="#" className="img2">
          <img src={slider6} style={{ width: "1034px" }} alt="" />
        </Link>
      </div>
      {/* section6 */}

      {/* section7 */}
      <div className="section3 d-flex">
        <Link to="#" className="img1">
          <img src={maldives1} style={{ width: "510px" }} alt="" />
        </Link>
        <Link to="#" className="img1">
          <img
            src={maldives2}
            style={{ width: "510px", height: "382px" }}
            alt=""
          />
        </Link>
      </div>
      {/* section7 */}

      {/* section8 */}

      <div className="section4">
        <Link to="#" className="img2">
          <img src={bathroom3} style={{ width: "1034px" }} alt="" />
        </Link>
      </div>
      {/* section8 */}

      {/* section9 */}
      <div className="section3 d-flex">
        <Link to="#" className="img1">
          <img
            src={vollayball1}
            style={{ width: "510px", height: "382px" }}
            alt=""
          />
        </Link>
        <Link to="#" className="img1">
          <img
            src={vollayball2}
            style={{ width: "510px", height: "382px" }}
            alt=""
          />
        </Link>
      </div>
      {/* section9 */}

      {/* section10 */}

      <div className="section4">
        <Link to="#" className="img2">
          <img src={boatview1} style={{ width: "1034px" }} alt="" />
        </Link>
      </div>
      {/* section10 */}

      {/* section11 */}

      <div className="fancybox"></div>

      {/* section11 */}

      {/* <Container className="d-flex"> */}
        {/* <ReactFancyBox
          thumbnail="https://loremflickr.com/320/240"
          image={boatview1}/>
       */}
        {/* <div className="gallery">
          <a data-fancybox="gallery" href={boatview1}>
            <img src={boatview1} alt="image" />
          </a>
        </div>
        <div className="gallery">
          <a data-fancybox="gallery" href={vollayball1}>
            <img src={vollayball1} alt="image" />
          </a>
        </div>
        <div className="gallery">
          <a data-fancybox="gallery" href={boatview1}>
            <img src={boatview1} alt="image" />
          </a>
        </div>
        <div className="gallery">
          <a data-fancybox="gallery" href={vollayball1}>
            <img src={vollayball1} alt="image" />
          </a>
        </div> */}
      {/* </Container> */}
      <Modal
        size="lg"
        show={lgShow}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title id="example-modal-sizes-title-lg">
            Photos {index}
          </Modal.Title>
          {/* <Button onClick={()=>setLgShow(false)}>X</Button> */}
        </Modal.Header>
        <Modal.Body>
          <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
            <Carousel.Item>
              <img className="d-block w-100" src={slider6} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slider7} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={vollayball1}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={vollayball2}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={bathroom3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={boatview1}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={h1} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={h2} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={h3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={h4} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={h5} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ImageList;
