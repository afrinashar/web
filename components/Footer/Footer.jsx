import { Container, Navbar, Row, Col } from "react-bootstrap";
import logo from "../../assets/footer.png";
import ssin from "../../assets/ssin.png";
import ssint from "../../assets/ssint.png";
//import fb from "../../assets/fb.PNG";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <Navbar className="navbar     bottom-0 navbar-inverse text-secondary">
        <Container>
          <Row>
            <Row>
              {" "}
              <div className="flex justify-center      ">
                {" "}
                <img className="w-50 logo m-5" src={ssin}></img>
              </div>
            </Row>
            <Row>
              <Col>
                {" "}
                <Row>
                  <Col>
                    <div>
                      <h6>INDIA</h6>
                      <p>
                        SSINTEK Technologies Pvt Ltd
                        <br />
                        D54, Second Floor 9A Cross Rd, <br />
                        Thillai Nagar, Thiruchirappalli <br /> Tamil Nadu - 620
                        018
                      </p>{" "}
                      <a href="mailto:recruit@ssintek.com">
                        {" "}
                        recruit@ssintek.com
                      </a>
                      <br /> <a href="tel:+918667068319">+91 8667068319</a>
                    </div>
                  </Col>
                </Row>
                <Col></Col>
              </Col>{" "}
              <Col>
              <Row>  <ul className="nav navbar-nav list-unstyled  text-secondary">
                  <li className="dropdown ">
                    <a className=" text-primary" href="about">
                      {" "}
                      About
                    </a>
                    <ul className=" list-unstyled text-secondary">
                      
                    </ul>
                  </li>
                  <li className="active mx-2">
                    <a href="services">Services</a>
                  </li>
                  <li className="active mx-2">
                    <a href="careers">Work with us</a>
                  </li>
                  <li className="active mx-2">
                    <a href="events"> Events </a>
                  </li>
                  <li className="active mx-2">
                    <a href="blogs"> Blogs </a>
                  </li>
                  {/* <li className="active mx-2">
                    <a href="contactus"> Contacts</a>
                  </li> */}
                </ul>
             </Row> 
             <Row>  <Col className="m-3">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.78296
              7201331!2d77.54780807123196!3d12.921666188124272!2m3!1f0!2f0!3f0!3m2!1i1024!2i76
              8!4f13.1!3m3!1m2!1s0x3bae3e2d16c23331%3A0x6831746b0c025be0!2sKamakya%20Main%20Rd
              %2C%20Kamakya%20Layout%2C%20Banashankari%203rd%20Stage%2C%20Banashankari%2C%20Bengaluru%2C%20Karnataka%20560085!5e0!3m2!1sen!2sin!4v1704782320800!5m2!1sen!2sin" width="300" height="200" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </Col></Row></Col>
              
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col className="">
                    Follow Us
                    <FaFacebook className="m-2" />
                    <FaInstagram className="" />
                    <FaLinkedin className="m-2" />
                  </Col>
                </Row>
              </Col>
            
              <Col>
                {" "}
                <div className="head">
                  {/* <button className="logo contact float-right btn btn-primary text-secondary  p-3 rounded rounded-circl
     e border border-secondary contact   fixed-top  "> Contact Us</button> */}
                  <FaPhoneVolume
                    className="bg-primary  logo contact float-right btn btn-primary text-secondary
    btn-orange   p-2 rounded rounded-circle
     e border border-secondary contact   fixed-bottom"
                  />
                </div>{" "}
              </Col>
            </Row>
            <Row className="text-muted">
              <Col>© 2023 — SSINTEK All Rights Reserved</Col>
              <Col>Privacy Policy</Col>
              <Col>Terms of Use</Col>
            </Row>
          </Row>{" "}
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
