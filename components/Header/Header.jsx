/* eslint-disable react/jsx-no-undef */

 import logo from "../../assets/logo.png";
 import { useState } from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Offcanvas,
  Card,
} from "react-bootstrap";
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {" "}
      <Navbar expand="lg"   style ={{zIndex:"1050"}}className="    nav    z-index-1050 top-0  ">
        <Container className="nav nav-pills nav-justified">
        <img src={logo} className=" logo"></img>  
          <div className=" ">
          <div class="navbar-nav">
        <a class="nav-link  " aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
            <ul className="underline">

              <li><a className="underline">About Us</a></li>
              <li><a className="underline">Services</a></li>
              <li><a>Work with Us</a></li>
              <li><button>Contact Us</button></li>
            </ul>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
