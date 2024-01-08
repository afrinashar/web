/* eslint-disable react/jsx-no-undef */

 import logo from "../../assets/logo.png";
 import { useState } from "react";
 import Button from 'react-bootstrap/Button';
 import Container from 'react-bootstrap/Container';
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
    <Navbar expand="lg" className=" text-secondary">
      <Container fluid bg="dark">
        <Navbar.Brand href="#"> <img src={logo} className=" logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="text-secondary me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            
          >
            <Nav.Link className="underline text-secondary" href="aboutus">About Us</Nav.Link>
            <Nav.Link className="underline text-secondary" href="career">Work with us</Nav.Link>
            <NavDropdown  className="underline text-secondary" title="Service" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="react">
                React Js
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="node">
              Node Js
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
