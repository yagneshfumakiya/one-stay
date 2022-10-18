import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import Button from "react-bootstrap/Button";

const Register = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header className="popup" closeButton>
          <Modal.Title> Sing up</Modal.Title>
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
              <i class="fa-brands fa-facebook"></i> Continue With Facebook
            </a>
          </div>
          <div className="social-box">
            <a href="">
              <i class="fa-brands fa-google"></i> Continue With Google
            </a>
          </div>
          <div className="social-box">
            <a href="">
              <i class="fa-brands fa-apple"></i> Continue With Apple
            </a>
          </div>
          <div className="social-box">
            <a href="">
              <i class="fa-regular fa-envelope"></i>Continue With Email
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Register;
