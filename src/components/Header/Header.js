import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Link, Navigate } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from "../Home/Home";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
} from "react-phone-number-input";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import banner from "../../images/banner-img.png";
import logo from "../../images/logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import "./Header.css";
import React, { useState,useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Login from "../Login/Login";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/userSlice";
import {logout} from "../../features/userSlice"
import { useDispatch } from "react-redux";
const data = {
  countries: [
    { name: "Afghanistan +93", number: [{ name: "+93" }] },
    { name: "Aland +358", number: [{ name: "+358" }] },
    { name: "Albania +355", number: [{ name: "+355" }] },
    { name: "Algeria +213", number: [{ name: "+213" }] },
    { name: "Americansamoa +1", number: [{ name: "+1" }] },
    { name: "Andorra +376", number: [{ name: "+376" }] },
    { name: "Angola +244", number: [{ name: "+244" }] },
    { name: "Angulia +1", number: [{ name: "+1" }] },
    { name: "Antigua +1", number: [{ name: "+1" }] },
    { name: "Argentina +54", number: [{ name: "+54" }] },
    { name: "Armenia +374", number: [{ name: "+374" }] },
    { name: "Aruba +297", number: [{ name: "+297" }] },
    { name: "Australia +61", number: [{ name: "+61" }] },
    { name: "Austria +43", number: [{ name: "+43" }] },
    { name: "Azerbaijan +994", number: [{ name: "+994" }] },
    { name: "Bahamas +1242", number: [{ name: "+1242" }] },
    { name: "Bahrain +973", number: [{ name: "+973" }] },
    { name: "Bangladesh +880", number: [{ name: "+880" }] },
    { name: "Barbados +1246", number: [{ name: "+1246" }] },
    { name: "Belarus +375", number: [{ name: "+375" }] },
    { name: "Belgium +32", number: [{ name: "+32" }] },
    { name: "Belize +501", number: [{ name: "+501" }] },
    { name: "Benin +229", number: [{ name: "+229" }] },
    { name: "Bermuda +1441", number: [{ name: "+1441" }] },
    { name: "Bhutan +975", number: [{ name: "+975" }] },
    { name: "Bolivia +591", number: [{ name: "+591" }] },
    { name: "Bosnia +387", number: [{ name: "+387" }] },
    { name: "Botswana +267", number: [{ name: "+267" }] },
    { name: "Brazil +55", number: [{ name: "+55" }] },
    { name: "BritishIndianOceanTerritory +246", number: [{ name: "+246" }] },
    { name: "BritishVirginIslands +1284", number: [{ name: "+1284" }] },
    { name: "Brunei +673", number: [{ name: "+673" }] },
    { name: "Bulgaria +359", number: [{ name: "+359" }] },
    { name: "Burkina Faso +226", number: [{ name: "+226" }] },
    { name: "Burundi +257", number: [{ name: "+257" }] },
    { name: "Cambodia +855", number: [{ name: "+855" }] },
    { name: "Cameroon +237", number: [{ name: "+237" }] },
    { name: "Canada +1", number: [{ name: "+1" }] },
    { name: "Cape Verde +238", number: [{ name: "+238" }] },
    { name: "CaymanIslands +1345", number: [{ name: "+1345" }] },
    { name: "CentralAfricanRepublic +236", number: [{ name: "+236" }] },
    { name: "Chad +235", number: [{ name: "+235" }] },
    { name: "Chile +56", number: [{ name: "+56" }] },
    { name: "China +86", number: [{ name: "+86" }] },
    { name: "ChristmasIsland +61", number: [{ name: "+61" }] },
    { name: "CocosIslands +61", number: [{ name: "+61" }] },
    { name: "Colombia +57", number: [{ name: "+57" }] },
    { name: "Comoros +269", number: [{ name: "+269" }] },
    { name: "CookIslands +682", number: [{ name: "+682" }] },
    { name: "CostaRicaan +506", number: [{ name: "+506" }] },
    { name: "Croatia +385", number: [{ name: "+385" }] },
    { name: "Cuba +53", number: [{ name: "+53" }] },
    { name: "Curacao +599", number: [{ name: "+599" }] },
    { name: "Cyprus +357", number: [{ name: "+357" }] },
    { name: "CzechRepublic +420", number: [{ name: "+420" }] },
    { name: "DemocraticRepublicoftheCongo +243", number: [{ name: "+243" }] },
    { name: "Denmark +45", number: [{ name: "+45" }] },
    { name: "Djibouti +253", number: [{ name: "+253" }] },
    { name: "Dominica +1767", number: [{ name: "+1767" }] },
    { name: "DominicanRepublic +849", number: [{ name: "+849" }] },
    { name: "East Timor +670", number: [{ name: "+670" }] },
    { name: "Ecuador +593", number: [{ name: "+593" }] },
    { name: "Egypt +20", number: [{ name: "+20" }] },
    { name: "ElSalvador +503", number: [{ name: "+503" }] },
    { name: "EquatorialGuinea +240", number: [{ name: "+240" }] },
    { name: "Eritrea +291", number: [{ name: "+291" }] },
    { name: "Estonia +372", number: [{ name: "+372" }] },
    { name: "Ethiopia +251", number: [{ name: "+251" }] },
    { name: "FalklandIslands +500", number: [{ name: "+500" }] },
    { name: "FaroeIslands +298", number: [{ name: "+298" }] },
    { name: "Fiji +679", number: [{ name: "+679" }] },
    { name: "Finland +358", number: [{ name: "+358" }] },
    { name: "France +33", number: [{ name: "+33" }] },
    { name: "FrenchPolynesia +689", number: [{ name: "+689" }] },
    { name: "Gabon +241", number: [{ name: "+241" }] },
    { name: "Gambia +220", number: [{ name: "+220" }] },
    { name: "Georgia +995", number: [{ name: "+995" }] },
    { name: "Germany +49", number: [{ name: "+49" }] },
    { name: "Ghana +233", number: [{ name: "+233" }] },
    { name: "Gibraltar +350", number: [{ name: "+350" }] },
    { name: "Greece +30", number: [{ name: "+30" }] },
    { name: "Greenland +299", number: [{ name: "+299" }] },
    { name: "Grenada +473", number: [{ name: "+473" }] },
    { name: "Guam +671", number: [{ name: "+671" }] },
    { name: "Guatemala +502", number: [{ name: "+502" }] },
    { name: "Guernsey +481", number: [{ name: "+481" }] },
    { name: "Guinea +224", number: [{ name: "+224" }] },
    { name: "GuineaBissau +245", number: [{ name: "+245" }] },
    { name: "Guyana +592", number: [{ name: "+592" }] },
    { name: "Haiti +509", number: [{ name: "+502" }] },
    { name: "Honduras +504", number: [{ name: "+504" }] },
    { name: "HongKong +852", number: [{ name: "+852" }] },
    { name: "Hungary +36", number: [{ name: "+36" }] },
    { name: "Iceland +354", number: [{ name: "+354" }] },
    { name: "Indonesia +62", number: [{ name: "+62" }] },
    { name: "Iran +98", number: [{ name: "+98" }] },
    { name: "Iraq +964", number: [{ name: "+964" }] },
    { name: "Ireland +353", number: [{ name: "+353" }] },
    { name: "IsleofMan +1624", number: [{ name: "+1624" }] },
    { name: "Italy +39", number: [{ name: "+39" }] },
    { name: "IvoryCoast +225", number: [{ name: "+225" }] },
    { name: "Jamaica +876", number: [{ name: "+876" }] },
    { name: "Japan +81", number: [{ name: "+81" }] },
    { name: "Jersey +1534", number: [{ name: "+1534" }] },
    { name: "Jordan +962", number: [{ name: "+962" }] },
    { name: "Kazakhstan +7", number: [{ name: "+7" }] },
    { name: "Kenya +254", number: [{ name: "+254" }] },
    { name: "Kiribati +686", number: [{ name: "+686" }] },
    { name: "Kosovo +383", number: [{ name: "+383" }] },
    { name: "Kuwait +965", number: [{ name: "+965" }] },
    { name: "Kyrgyzstan +996", number: [{ name: "+996" }] },
    { name: "Laos +856", number: [{ name: "+856" }] },
    { name: "Latvia +371", number: [{ name: "+371" }] },
    { name: "Lebanon +961", number: [{ name: "+961" }] },
    { name: "Lesotho +266", number: [{ name: "+266" }] },
    { name: "Liberia +231", number: [{ name: "+231" }] },
    { name: "Libya +218", number: [{ name: "+218" }] },
    { name: "Liechtenstein +423", number: [{ name: "+423" }] },
    { name: "Lithuania +370", number: [{ name: "+370" }] },
    { name: "Luxembourg +853", number: [{ name: "+853" }] },
    { name: "Macau +502", number: [{ name: "+502" }] },
    { name: "Macedonia +389", number: [{ name: "+389" }] },
    { name: "Madagascar +261", number: [{ name: "+261" }] },
    { name: "Malawi +265", number: [{ name: "+265" }] },
    { name: "Malaysia +60", number: [{ name: "+60" }] },
    { name: "Maldives +960", number: [{ name: "+960" }] },
    { name: "Mali +223", number: [{ name: "+223" }] },
    { name: "Malta +356", number: [{ name: "+356" }] },
    { name: "MarshallIslands +692", number: [{ name: "+692" }] },
    { name: "Mauritania +222", number: [{ name: "+222" }] },
    { name: "Mauritius +230", number: [{ name: "+230" }] },
    { name: "Mayotte +262", number: [{ name: "+262" }] },
    { name: "Mexico +52", number: [{ name: "+52" }] },
    { name: "Micronesia +691", number: [{ name: "+691" }] },
    { name: "Moldova +373", number: [{ name: "+373" }] },
    { name: "Monaco +377", number: [{ name: "+377" }] },
    { name: "Mongolia +976", number: [{ name: "+976" }] },
    { name: "Montenegro +382", number: [{ name: "+382" }] },
    { name: "Montserrat +664", number: [{ name: "+664" }] },
    { name: "Morocco +212", number: [{ name: "+212" }] },
    { name: "Mozambique +258", number: [{ name: "+258" }] },
    { name: "Myanmar +95", number: [{ name: "+95" }] },
    { name: "Namibia +264", number: [{ name: "+264" }] },
    { name: "Nauru +674", number: [{ name: "+674" }] },
    { name: "Nepal +977", number: [{ name: "+977" }] },
    { name: "Netherlands +31", number: [{ name: "+31" }] },
    { name: "NetherlandsAntilles +599", number: [{ name: "+599" }] },
    { name: "NewCaledonia +687", number: [{ name: "+687" }] },
    { name: "NewZealand +64", number: [{ name: "+64" }] },
    { name: "Nicaragua +505", number: [{ name: "+505" }] },
    { name: "Niger +227", number: [{ name: "+227" }] },
    { name: "Nigeria +234", number: [{ name: "+234" }] },
    { name: "Niue +683", number: [{ name: "+683" }] },
    { name: "NorthKorea +850", number: [{ name: "+850" }] },
    { name: "NorthernMarianaIslands +670", number: [{ name: "+670" }] },
    { name: "Norway +47", number: [{ name: "+47" }] },
    { name: "Oman +968	", number: [{ name: "+968	" }] },
    { name: "Pakistan +92", number: [{ name: "+502" }] },
    { name: "Palau +680", number: [{ name: "+680" }] },
    { name: "Palestine +970", number: [{ name: "+970" }] },
    { name: "Panama +507", number: [{ name: "+507" }] },
    { name: "PapuaNewGuinea +675", number: [{ name: "+675" }] },
    { name: "Paraguay +595", number: [{ name: "+595" }] },
    { name: "Peru +51", number: [{ name: "+51" }] },
    { name: "Philippines +63", number: [{ name: "+63" }] },
    { name: "Pitcairn +64", number: [{ name: "+64" }] },
    { name: "Poland +48", number: [{ name: "+48" }] },
    { name: "Portugal +351", number: [{ name: "+351" }] },
    { name: "PuertoRico +939", number: [{ name: "+939" }] },
    { name: "Qatar +974", number: [{ name: "+974" }] },
    { name: "RepublicoftheCongo +242", number: [{ name: "+242" }] },
    { name: "Reunion +262", number: [{ name: "+502" }] },
    { name: "Romania +40", number: [{ name: "+40" }] },
    { name: "Russia +7", number: [{ name: "+7" }] },
    { name: "Rwanda +250", number: [{ name: "+250" }] },
    { name: "SaintBarthelemy +590", number: [{ name: "+590" }] },
    { name: "SaintHelena +290", number: [{ name: "+290" }] },
    { name: "SaintKittsandNevis +869", number: [{ name: "+869" }] },
    { name: "SaintPierreandMiquelon +508", number: [{ name: "+508" }] },
    { name: "SaintMartin +590", number: [{ name: "+590" }] },
    { name: "SaintVincentandtheGrenadines +784", number: [{ name: "+784" }] },
    { name: "Samoa +685", number: [{ name: "+685" }] },
    { name: "SanMarino +378", number: [{ name: "+378" }] },
    { name: "SaoTomeandPrincipe +239", number: [{ name: "+239" }] },
    { name: "SaudiArabia +966", number: [{ name: "+966" }] },
    { name: "Senegal +221", number: [{ name: "+221" }] },
    { name: "Serbia +381", number: [{ name: "+381" }] },
    { name: "Seychelles +248", number: [{ name: "+248" }] },
    { name: "SierraLeone +232", number: [{ name: "+232" }] },
    { name: "Singapore +65", number: [{ name: "+65" }] },
    { name: "SintMaarten +721", number: [{ name: "+721" }] },
    { name: "Slovakia +421", number: [{ name: "+421" }] },
    { name: "Slovenia +386", number: [{ name: "+386" }] },
    { name: "SolomonIslands +677", number: [{ name: "+677" }] },
    { name: "Somalia +	252", number: [{ name: "+252" }] },
    { name: "SouthAfrica +27", number: [{ name: "+27" }] },
    { name: "SouthKorea +82", number: [{ name: "+82" }] },
    { name: "SouthSudan +211", number: [{ name: "+211" }] },
    { name: "Spain +34", number: [{ name: "+34" }] },
    { name: "SriLanka +94", number: [{ name: "+94" }] },
    { name: "Sudan +249", number: [{ name: "+249" }] },
    { name: "Suriname +597", number: [{ name: "+597" }] },
    { name: "SvalbardandJanMayen +47", number: [{ name: "+47" }] },
    { name: "Swaziland +268", number: [{ name: "+268" }] },
    { name: "Sweden +46", number: [{ name: "+46" }] },
    { name: "Switzerland +41", number: [{ name: "+41" }] },
    { name: "Syria +963", number: [{ name: "+963" }] },
    { name: "Taiwan +886", number: [{ name: "+886" }] },
    { name: "Tajikistan +992", number: [{ name: "+992" }] },
    { name: "Tanzania +255", number: [{ name: "+255" }] },
    { name: "Thailand +66", number: [{ name: "+66" }] },
    { name: "Togo +228", number: [{ name: "+228" }] },
    { name: "Tokelau +690", number: [{ name: "+690" }] },
    { name: "Tonga +676", number: [{ name: "+676" }] },
    { name: "TrinidadandTobago +868", number: [{ name: "+868" }] },
    { name: "Tunisia +216", number: [{ name: "+216" }] },
    { name: "Turkey +90", number: [{ name: "+90" }] },
    { name: "Turkmenistan +993", number: [{ name: "+993" }] },
    { name: "TurksandCaicosIslands +649", number: [{ name: "+649" }] },
    { name: "Tuvalu +688", number: [{ name: "+688" }] },
    { name: "USVirginIslands +340", number: [{ name: "+340" }] },
    { name: "Uganda +256", number: [{ name: "+256" }] },
    { name: "Ukraine +380", number: [{ name: "+380" }] },
    { name: "UnitedArabEmirates +971", number: [{ name: "+971" }] },
    { name: "UnitedKingdom +44", number: [{ name: "+44" }] },
    { name: "UnitedStates +1", number: [{ name: "+1" }] },
    { name: "Uruguay +598", number: [{ name: "+598" }] },
    { name: "Uzbekistan +998", number: [{ name: "+998" }] },
    { name: "Vanuatu +678", number: [{ name: "+678" }] },
    { name: "Vatican +379", number: [{ name: "+379" }] },
    { name: "Venezuela +58", number: [{ name: "+58" }] },
    { name: "Vietnam +84", number: [{ name: "+84" }] },
    { name: "WallisandFutuna +212", number: [{ name: "+212" }] },
    { name: "WesternSahara +502", number: [{ name: "+502" }] },
    { name: "Yemen +967", number: [{ name: "+967" }] },
    { name: "Zambia +260", number: [{ name: "+260" }] },
    { name: "Zimbabwe +93", number: [{ name: "+263" }] },
  ],
};

const Header = () => {
  const [username, setUserName] = useState(null);
  const [fullname, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [birthdate, setBirthDate] = useState(null);
  const [phone, setPhone] = useState(null);
  const [showp, setShowp] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [data,setData]=useState([])

  const [number, setNumber] = useState("");
  const [value, setValue] = useState("");
  const [values, setValues] = useState("");

  const dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClosep = () => setShowp(false);
  const handleShowp = () => setShowp(true);

  

  function handleSubmit() {
    // console.log({ username, fullname, email, password, birthdate, phone });
    let data = { username, fullname, email, password, birthdate, phone };
    fetch("http://192.168.29.173:8000/api/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.log("resp", resp);
        const myresp = resp;
          myresp ? handleClosep() : handleShowp();
      });
    });
  }
  const loginHandleSubmit = () => {
    console.log({ email, password });
    let data = { email, password };
    fetch("http://192.168.29.173:8000/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      // console.log('result',result)
      result.json().then((resp) => {
        console.log("resp", resp);
        const myresp = resp;
        localStorage.setItem("myrespkey", JSON.stringify(myresp));

        handleClose()

      });
    });
    dispatch(login({
  
      email:email,
      password:password,
      loggedIn:true,

  }))
    
  }
  
  const handleLogout=()=>{
    
    fetch("https://onestay.3waytech.co/api/logout").then((result)=>{
      console.log(result)
      result.json().then((resp)=>{

        // setData(resp)
      })
    })
    dispatch(logout)
    localStorage.clear();
  }





  return (
    <div>
      <div className="bgimg">
        <img src={banner} alt="" width={"100%"} />
      </div>
      <div className="header-content">
        <Container>
          <Row>
            <Col lg={4} md={4} sm={6}>
              <div className="logo">
                <img src={logo} />
              </div>
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
                    <Link to='/hostpage1'>
                      Become a Host <i className="fa-solid fa-globe"></i>
                    </Link>
                  </div>
                  <div className="toggle-profile">
                   
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" variant="white">
                        <i className="fa-solid fa-grip-lines"></i>
                        <i className="fa-regular fa-user"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {localStorage.getItem('myrespkey')?<Dropdown.Item onClick={handleLogout}>
                          Logout
                        </Dropdown.Item>: <><Dropdown.Item onClick={handleShow}>
                          Log In
                        </Dropdown.Item><Dropdown.Item onClick={handleShowp}>
                    
                          Sign up
                        </Dropdown.Item></>}
                        

                       
                        {/* Login popup */}
                        
                        <Dropdown.Item href="#/action-3">
                          Host Your Home
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Host an experience
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
                        <Modal
                          show={show}
                          onHide={handleClose}
                          className="modal"
                        >
                          <Modal.Header className="popup" closeButton>
                            <Modal.Title>Login or Sing up</Modal.Title>
                          </Modal.Header>
                          <Modal.Title>Welcome to Airbnb</Modal.Title>
                          <Modal.Body>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                  type="email"
                                  placeholder="Enter email"
                                />
                                <Form.Text className="text-muted">
                                  We'll never share your email with anyone else.
                                </Form.Text>
                              </Form.Group>

                              <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                              >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                  type="password"
                                  placeholder="Password"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                              >
                                {/* <Form.Check
                                  type="checkbox"
                                  label="Check me out"
                                /> */}
                              </Form.Group>
                            </Form>
                          </Modal.Body>
                          <Link to="/">
                            <Button
                              variant="danger"
                              size="lg"
                              style={{ maxWidth: "600px", width: "100%" }}
                              onClick={loginHandleSubmit}
                            >
                              Continue
                            </Button>
                          </Link>
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
                                <i class="fa-brands fa-google"></i> Continue
                                With Google
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
                        {/* Login popup */}
                        {/* Sign up popup */}
                        
                        <Modal
                          show={showp}
                          onHide={handleClosep}
                          className="modal"
                        >
                          <Modal.Header className="popup" closeButton>
                            <Modal.Title> Sign up</Modal.Title>
                          </Modal.Header>
                          <Modal.Title>Welcome to Airbnb</Modal.Title>
                          <Form.Control
                            size="lg"
                            type="text"
                            placeholder="User Name"
                            value={username}
                            name="uname"
                            onChange={(e) => setUserName(e.target.value)}
                            className="user"
                          />
                          <Form.Control
                            size="lg"
                            type="text"
                            placeholder="Full Name"
                            value={fullname}
                            name="fname"
                            onChange={(e) => setFullName(e.target.value)}
                            className="full"
                          />
                          <p>
                            Make sure it matches the name on your government ID.{" "}
                          </p>
                          <Form.Control
                            size="lg"
                            type="Email"
                            placeholder="Email Id"
                            value={email}
                            name="ename"
                            onChange={(e) => setEmail(e.target.value)}
                            className="email"
                          />
                          <Form.Control
                            size="lg"
                            type="password"
                            placeholder="password"
                            value={password}
                            name="pname"
                            onChange={(e) => setPassword(e.target.value)}
                            className="password"
                          />
                          <Form.Control
                            size="lg"
                            type="Date"
                            placeholder="Birth Date"
                            value={birthdate}
                            name="bname"
                            onChange={(e) => setBirthDate(e.target.value)}
                            className="birth"
                          />
                          <Form.Control
                            size="lg"
                            type="Number"
                            placeholder="Phone Number"
                            value={phone}
                            name="cname"
                            onChange={(e) => setPhone(e.target.value)}
                            className="phone"
                          />

                          <Button
                            type="submit"
                            className="signbtn"
                            variant="danger"
                            size="lg"
                            style={{ maxWidth: "600px", width: "100%" }}
                            onClick={handleSubmit}
                          >
                            submit
                          </Button>
                          <div className="cloes">
                            {/* <Button
                          type='submit'
                          className='closebtn'
                          variant="danger"
                          size="lg"
                          style={{ maxWidth: "100px", width: "100%" }}
                          onClick={handleClosep}
                          >
                            Close
                          </Button> */}
                          </div>

                         
                        </Modal>
                        {/* Sign up popup */}

                        <hr />
                        <br />
                      
                      </Dropdown.Menu>
                    </Dropdown>

                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Header;
