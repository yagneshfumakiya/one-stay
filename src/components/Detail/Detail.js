import React, { useState } from "react";

import Header1 from "../Header/Header1";
import "./Detail.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Iframe from "react-iframe";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import slider6 from "../../images/slider6.jpg";
import aircover from "../../images/aircover.png";
import Modal from "react-bootstrap/Modal";
import lookbook from "../../images/lookbook.png";
import Calendar from "react-calendar";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Detail = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const [value, setValue] = React.useState([null, null]);

  return (
    <>
      <div>
        <Header1 />
      </div>
      {/* section 1 start */}
      <Container className="container1">
        <div className="section1">
          <div className="heading">
            <h1>Adaaran Club Rannalhi, Maldives, Water Bungalows</h1>
          </div>
          <div className="maldives d-flex ">
            <Link to="/" className="maldives1">
              Maldives
            </Link>
            <div className="share">
              <Link to="/" className="share1">
                Share
              </Link>
              <Link to="/" className="save">
                Save
              </Link>
            </div>
          </div>
        </div>
        {/* section 1 end  */}

        {/* sction 2  */}

        <div className="section2-img d-flex">
          <Link to="/imagelist" className="img1">
            <img src={slider6} style={{ width: "560px" }} alt="" />
          </Link>
          <Link to="/imagelist" className="img2">
            <img src={slider6} style={{ width: "560px" }} alt="" />
          </Link>
        </div>
        {/* sction 2  */}
        {/* sction 3  */}
        <div className="dome">
          <h1>Dome hosted by LookBook</h1>
          <p>6 guests.1bedroom.1bed.1bathroom</p>
          <hr />
        </div>
        {/* sction 3  */}

        {/* section 4 */}
        <div className="dive-experience">
          <div className="section4 d-flex">
            <i className="fa-solid fa-water"></i>
            <div className="dive">
              <h4>Dive right in</h4>
              <p>This is one of the few places in the area with a pool.</p>
            </div>
          </div>
          <div className="section4 d-flex">
            <i className="fa-regular fa-star"></i>
            <div className="dive">
              <h4>Dive right in</h4>
              <p>This is one of the few places in the area with a pool.</p>
            </div>
          </div>
          <hr />
        </div>
        <div className="aircover">
          <img src={aircover} alt="" height={"26px"} width={"126px"} />
          <p>
            Every booking includes free protection from Host cancellations,
            listing inaccuracies, and <br /> other issues like trouble checking
            in.
          </p>
          <br />
          <br />
          <a href="" onClick={() => setShow(true)}>
            Learn More
          </a>

          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Custom Modal Styling
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
                unde commodi aspernatur enim, consectetur. Cumque deleniti
                temporibus ipsam atque a dolores quisquam quisquam adipisci
                possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
                quasi quod accusamus eos quod. Ab quos consequuntur eaque quo
                rem! Mollitia reiciendis porro quo magni incidunt dolore amet
                atque facilis ipsum deleniti rem!
              </p>
            </Modal.Body>
          </Modal>
          <hr />
          {/* paragraph section */}
          <div className="paragraph">
            <p>
              Adaaran Club Rannalhi is featured among the best hotels in
              Maldives and sits exclusively <br /> at the tip of the South Male
              atoll within the exotic collection of islands known as the <br />{" "}
              Maldives. Its unique location offers access to pristine beaches,
              excellent scuba diving
              <br /> opportunities and a relaxed environment with easy access to
              the capital city of Male.
            </p>
            <br />
            <br />
            <hr />
          </div>

          {/* paragraph section */}
          {/* Bedroom  section */}
          <div className="bedroom">
            <h2>Where you'll sleep</h2>
            <div className="maindiv">
              <div className="bedicon">
                <i class="fa-solid fa-bed"></i>
              </div>
              <p>
                <b>Bedroom</b>
              </p>
              <h6>1 double bed</h6>
            </div>
          </div>
          <br />
          <br />
          <hr />
          {/* Bedroom  section */}

          {/* section aminities */}
          <div className="main-section">
            <div className="heading">
              <h1>What this place offers</h1>
            </div>
            <div className="aminities d-flex">
              <div className="detail1">
                <div className="wifi-section d-flex">
                  <div className="wifi-logo ">
                    <i class="fa-solid fa-wifi"></i>
                  </div>
                  <div className="wifi-text">Wifi</div>
                </div>
                <div className="tv-section d-flex">
                  <div className="tv-logo ">
                    <i class="fa-solid fa-tv"></i>
                  </div>
                  <div className="tv-text">TV</div>
                </div>
                <div className="hair-section d-flex">
                  <div className="hair-logo ">
                    <i class="fa-solid fa-star-of-life"></i>
                  </div>
                  <div className="hair-text">Hair dryer</div>
                </div>
                <div className="long-section d-flex">
                  <div className="long-logo ">
                    <i class="fa-solid fa-hotel"></i>
                  </div>
                  <div className="long-text">Long-term stays allowed</div>
                </div>
              </div>
              <div className="detail2">
                <div className="pool-section d-flex">
                  <div className="pool-logo ">
                    <i className="fa-solid fa-water"></i>
                  </div>
                  <div className="pool-text">Pool</div>
                </div>
                <div className="air-section d-flex">
                  <div className="air-logo ">
                    <i class="fa-solid fa-fan"></i>
                  </div>
                  <div className="air-text">Air conditioning</div>
                </div>
                <div className="breakfast-section d-flex">
                  <div className="breakfast-logo ">
                    <i class="fa-solid fa-mug-saucer"></i>
                  </div>
                  <div className="breakfast-text">Breakfast</div>
                </div>
              </div>
            </div>
            <div className="button">
              <button>Show all 14 amenities</button>
            </div>
            <hr />
          </div>
          {/* section aminities */}
          {/* calender section */}
          <div className="main-calendar">
            <div className="calendar-section1">
              <div className="calendar-heading">
                <h3>Select Your Dates</h3>
              </div>
              <div className="calendar-line">
                <p>Minimun Stay : 2 Nights</p>
              </div>
            </div>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDateRangePicker
                displayStaticWrapperAs="desktop"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <React.Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                  </React.Fragment>
                )}
              />
            </LocalizationProvider>
          </div>

          {/* <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          selectRange={true}
          defaultValue={date}                                                     
        />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>Start:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Default selected date:</span>{' '}
          {date.toDateString()}
        </p>
   dfdf   // )} */} 
          {/* calender section */}
          {/* reviews section */}
          <div className="review">
            <div className="review-heading">
              <h3>
                {" "}
                <i class="fa-solid fa-star"></i> 4.92 . 26 reviews
              </h3>
            </div>
          </div>
          <div className="review-main d-flex">
            <div className="review-detail">
              <div className="detail1">
                <div className="detail-para d-flex">
                  <p>
                    <b>Cleanliness new master </b>
                  </p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
              </div>
              <div className="detail1">
                <div className="detail-para d-flex">
                  <p>
                    <b>Cleanliness</b>
                  </p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
              </div>
              <div className="detail1">
                <div className="detail-para d-flex">
                  <p>
                    <b>Cleanliness</b>
                  </p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
              </div>
             
            </div>
            <div className="review-detail">
              <div className="detail1">
                <div className="detail-para d-flex">
                  <p>
                    <b>Cleanliness</b>
                  </p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
              </div>
              <div className="detail1">
                <div className="detail-para d-flex">
                  <p>
                    <b>Cleanliness</b>
                  </p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
              </div>
              <div className="detail1">
                <div className="detail-para d-flex">
                  <p>
                    <b>Cleanliness</b>
                  </p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
              </div>
            
            </div>
          </div>
          <hr />
          {/* reviews section */}

          {/* iframe section */}
          <div className="iframe-section">
            <div className="iframe-heading">
              <h2>Where you'll be</h2>
              <p>Maldives</p>
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17979.36566628348!2d72.51309353202963!3d23.02026730877933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1664351531041!5m2!1sen!2sin"
                width="1120px"
                height="480px"
                id=""
                className=""
                display="block"
                position="relative"
              />
              <hr />
            </div>
          </div>
          {/* iframe section */}
          {/* Lookbook section */}
          <div className="lookbook d-flex">
            <div className="section1">
              <div className="lookbook-detail d-flex">
                <div className="lookimg">
                  <img src={lookbook} alt="" />
                </div>
                <div className="look-text">
                  <h2>Hosted by LookBook</h2>
                  <p>Joined in October 2015</p>
                </div>
              </div>

              <div className="lookbook-review">
                <p>
                  <i class="fa-solid fa-star"></i> 803 reviews
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  <i class="fa-sharp fa-solid fa-circle-check"></i> Identity
                  verified
                </p>
              </div>
              <div className="lookbook-para">
                <p>
                  We are a fully independent and dynamic specialist online
                  holiday accommodation provider world-wide company. Hotels and
                  properties are in cities and sun & beach destinations, mainly
                  Turkey, Northern Cyprus, Greece, Maldives and worldwide
                  because of a good selection of products, competitive rates,
                  and conditions. We have own contracting with hotels (+1500)
                  also get rates from 3rd party partners as supplier and
                  distributor and get bookings on B2B/B2C/B2E distrubition
                  channels. “MALLI TOURISM & TRAVEL LLC.” trading name with
                  TURSAB A Group (11357) as “Loobookholiday” head quarter
                  located at Turkey as the only strategic partner company that
                  offers Airbnb users hotel room reservation options as well as
                  home accommodation.
                </p>
              </div>
            </div>
            <div className="section2">
              <div className="main2">
                <p>Languages: English, Türkçe</p>
                <br />
                <p>Response rate: 74%</p>
                <br />
                <p>Response time: within a day</p>
                <br />
                <div className="contact-btn">
                  <a href="">Contact Host</a>
                </div>
                <div className="warning">
                  <p>
                    <i class="fa-sharp fa-solid fa-circle-exclamation"></i> To
                    protect your payment, never transfer <br /> money or
                    communicate outside of the Airbnb <br /> website or app.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* Lookbook section */}

          {/* Things section */}
          <div className="thing">
            <div className="thing-heading">
              <h2>Things to know</h2>
            </div>
            <div className="grid-section">
              <Row>
                <Col>
                  <div className="house">
                    <p>
                      <b> House Rules</b>
                    </p>
                    <p>
                      <i class="fa-sharp fa-solid fa-clock"></i> &nbsp;
                      Check-in: After 3:00 pm
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="health">
                    <p>
                      <b> Health & safety</b>
                    </p>
                    <p>
                      <i class="fa-solid fa-star"></i> &nbsp;Airbnb's COVID-19
                      safety practices apply
                    </p>
                    <p>
                      <i class="fa-sharp fa-solid fa-clock"></i> &nbsp;Carbon
                      monoxide alarm
                    </p>
                    <p>
                      <i class="fa-sharp fa-solid fa-clock"></i> &nbsp;Smoke
                      alarm
                    </p>
                  </div>
                </Col>
                <Col>
                  <div className="health">
                    <p>
                      <b> Cancellation policy</b>
                    </p>
                    <p>Free cancellation for 48 hours.</p>
                    <br />
                    <p>
                      Review the Host’s full cancellation policy which applies
                      even if you cancel for illness or disruptions caused by
                      COVID-19.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          {/* Things section */}
          <div className="footer"></div>
        </div>
      </Container>
      <Footer />
    </>
  );
};
export default Detail;
