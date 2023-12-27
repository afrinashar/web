/* eslint-disable react/jsx-no-undef */
 
import logo from "../../assets/logo.JPG"
import {  Navbar, NavDropdown,Nav,Container,Row, Button} from "react-bootstrap"
const Header = () => {
  return (
    <>  <Navbar expand="lg"   bg="dark" data-bs-theme="dark" className=" m-0 p-3 top-0 bg-light bg-body-tertiary  ">
    <Container>
      <Navbar.Brand  className="mx-5" href="#home"><img src={logo} className=" w-25"></img> </Navbar.Brand>
      <div className="float-left">  <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <NavDropdown  title="ABOUT" id="basic-nav-dropdown">
            <Row></Row><Row></Row>
          </NavDropdown>
          <NavDropdown title="SERVICES" id="basic-nav-dropdown">
            <Row></Row><Row></Row>
          </NavDropdown><Nav.Link href="workwithus">WORK WITH US</Nav.Link>
          <Nav.Link href="events">EVENTS</Nav.Link>
          <Nav.Link href="blogs">BLOGS</Nav.Link>
       <Button className="bg-warning  text-dark text-bold border border-light">CONTACT US</Button> </Nav>
      </Navbar.Collapse></div>
    </Container>
  </Navbar></>
  )
}

export default Header
