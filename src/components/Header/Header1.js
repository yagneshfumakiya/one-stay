import React,{useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import Modal from "react-bootstrap/Modal";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import Button from "react-bootstrap/Button";


const Header1 = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="header-content">
      <Container>
        <Row>
          <Col lg={4} md={4} sm={6}>
            <Link to = '/' className="logo">
              <img src={logo} />
            </Link>
          </Col>
          <Col lg={8} md={8} sm={6}>
            <div className="toggle-content d-flex align-items-center justify-content-between w-100">
              <div className="header-menu">
                <ul>
                  <li>
                    <a href="#">Places to stay</a>
                  </li>
                  <li>
                    <a href="#">Places to stay</a>
                  </li>
                  <li>
                    <a href="#">Places to stay</a>
                  </li>
                </ul>
              </div>
              <div className="toggle-menu-side">
                <div className="host">
                  <a href="#">
                    Become a Host <i className="fa-solid fa-globe"></i>
                  </a>
                </div>
                <div className="toggle-profile">
                  
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" variant="white">
                      <i className="fa-solid fa-grip-lines"></i>
                      <i className="fa-regular fa-user"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                       
                      </Dropdown.Item>
                      <Dropdown.Item onClick={handleShow}>Log In</Dropdown.Item>
                      <Modal show={show} onHide={handleClose} className="modal">
                        <Modal.Header className="popup" closeButton>
                          <Modal.Title>Login or Sing up</Modal.Title>
                        </Modal.Header>
                        <Modal.Title>Welcome to Airbnb</Modal.Title>
                        <Modal.Body>
                          <div className="lable">country/Region</div>

                          <PhoneInput
                            international
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue}
                            error={
                              value
                                ? isValidPhoneNumber(value)
                                  ? undefined
                                  : "Invalid Phone Number"
                                : "Phone number requireds"
                            }
                          />

                          {value && isValidPhoneNumber(value) ? (
                            ""
                          ) : (
                            <span id="message" style={{ color: "red" }}>
                              Invalid Phone Number
                            </span>
                          )}
                        </Modal.Body>

                        <Button
                          variant="danger"
                          size="lg"
                          style={{ maxWidth: "600px", width: "100%" }}
                        >
                          Continue
                        </Button>
                        <div className="or">or</div>
                        <div className="box">
                          <div className="social-box">
                            <a href="">
                              <i class="fa-brands fa-facebook"></i> Continue
                              With Facebook
                            </a>
                          </div>
                          <div className="social-box">
                            <a href="">
                              <i class="fa-brands fa-google"></i> Continue With
                              Google
                            </a>
                          </div>
                          <div className="social-box">
                            <a href="">
                              <i class="fa-brands fa-apple"></i> Continue With
                              Apple
                            </a>
                          </div>
                          <div className="social-box">
                            <a href="">
                              <i class="fa-regular fa-envelope"></i>Continue
                              With Email
                            </a>
                          </div>
                        </div>
                      </Modal>

                      <hr />
                      <br />
                      <Dropdown.Item href="#/action-3">
                        Host Your Home
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Host an experience
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Header1;
