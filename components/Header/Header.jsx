/* eslint-disable react/jsx-no-undef */

 import logo from "../../assets/logo.png";
 import { useState } from "react";
 import Button from 'react-bootstrap/Button';
 import {Container,Row,Col} from 'react-bootstrap';
 import Form from 'react-bootstrap/Form';
 import Nav from 'react-bootstrap/Nav';
 import Navbar from 'react-bootstrap/Navbar';
 import NavDropdown from 'react-bootstrap/NavDropdown';
 import '../Header/Header.css'
 


const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
   <Navbar expand="lg"  fluid className="  text-secondary">
      <Container fluid bg="dark">
        <Navbar.Brand href="/"> <img src={logo} className=" logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" ml-5 text-secondary me-auto my-2 my-lg-0"
            style={{ maxHeight: '80px' }}
            
          >
          
            <NavDropdown  placeholder="Type Here" className=" float-end underline text-secondary " title="Service" id="navbarScrollingDropdown">
              <button>buuuuu</button>
            <Row><Col> <NavDropdown.Item   href="analyst">Analyst</NavDropdown.Item>
              <NavDropdown.Item href="/service/aws">AWS</NavDropdown.Item>
              <NavDropdown.Item href="/service/dotnet">.NET</NavDropdown.Item></Col><Col> <NavDropdown.Item href="fullstack">Fullstack</NavDropdown.Item>
              <NavDropdown.Item href="/service/hrms">HRMS</NavDropdown.Item>
              <NavDropdown.Item href="/service/python">Python</NavDropdown.Item></Col></Row>  <NavDropdown.Item href="java">Java</NavDropdown.Item>
             
             
              <NavDropdown.Item href="/service/oracle">Oracle</NavDropdown.Item>
              <NavDropdown.Item href="/service/selinium">Selinium</NavDropdown.Item>
              <NavDropdown.Item href="/service/react">
                React Js
              </NavDropdown.Item>
              <NavDropdown.Item href="/service/node">
                Node Js
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/service">
            Our Services
              </NavDropdown.Item>
              serv
            </NavDropdown>
              <Nav.Link className="underline float-end text-secondary" href="/">About Us</Nav.Link>
            <Nav.Link className="underline text-secondary" href="careers">Work with us</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
