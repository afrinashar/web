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
      <Navbar expand="lg"   style={{zIndex:"1050"}}className="    nav    z-index-1050 top-0  ">
        <Container className="nav nav-pills nav-justified">
          <Navbar.Brand className=" " href="#home">
            {" "}
            <div className=" w-10">
              <img src={logo} className=" logo"></img>{" "}
            </div>
          </Navbar.Brand>
          <div className=" ">
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
               <Nav.Link  className="   " href="/">
                               <Button href="/" variant="outline-primary border-0">
                  <span className="text-secondary">    ABOUT US </span>
                </Button>
             
                     </Nav.Link>
                       
          
                <NavDropdown onClick={handleShow}  className="  mt-2 text-secondary " title="What we do " id="basic-nav-dropdown">
                 
                  <Row> <Nav.Link  className="   " href="/">
                               <Button href="/" variant="outline-primary border-0">
                  <span className="text-secondary">    ABOUT US </span>
                </Button>
             
                     </Nav.Link></Row>
                  <Row></Row>
            
                 <Button  variant="outline-primary border-0">
                    <span className="text-secondary">SERVICES</span>
                  </Button> 
    
 <Offcanvas show={show}   style={{marginTop:"120px" }} className=" bg-primary" placement= "top" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
     
                  </NavDropdown>
           
                <Nav.Link href="/careers">
                  <Button variant="outline-primary border-0">
                    <span className="text-secondary">WORK WITH US </span>
                  </Button>
                </Nav.Link>
                
                <Nav.Link href="/contactus"><Button className="bg-primary  text-secondary text-bold border border-secondary">
                  CONTACT US
                </Button> </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
