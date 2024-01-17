import { Container, Navbar, Row, Col } from "react-bootstrap";
import logo from "../../assets/footer.PNG";
import fb from "../../assets/fb.PNG";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
                <img className="w-25 logo " src={logo}></img>
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
                <Col>
                
                  
                </Col>
              </Col>{" "}
              <Col>
                <ul className="nav navbar-nav   text-secondary">
                  <li className="active">
                    <a href="#">Home</a>
                  </li>
                  <li className="dropdown">
                    <a className=" text-primary" href="about">
                      {" "}
                      About
                    </a>
                    <ul className=" text-secondary">
                      <li className=" text-secondary">
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="/leadership">Leadership</a>
                      </li>
                      <li>
                        <a href="/newsroom">Newsroom</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Page 2</a>
                  </li>
                  <li>
                    <a href="#">Page 3</a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row  >
                  <Col className="">
                    Follow Us
                    <FaFacebook  className="m-2"/>
                    <FaInstagram  className=""/>
                    <FaLinkedin  className="m-2"/>
                  </Col>
                </Row>
              </Col>
              <Col>
                  {" "}
                  <h6>USA</h6>
                  <p>{`SSINTEK Technologies LLC

254 Chapman Rd, Ste 208 #14734
Newark, Delaware 19702 US`}</p>{" "}
              </Col>
            </Row>
            <Row className="text-muted">
              <Col>© 2023 — Edstem All Rights Reserved</Col>
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
