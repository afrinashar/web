/* eslint-disable react/jsx-no-undef */

 import logo from "../../assets/logo.png";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Row,
  Button,
} from "react-bootstrap";
const Header = () => {
  return (
    <>
      {" "}
      <Navbar expand="lg" data-bs-theme="dark" className=" nav   top-0  ">
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
                <NavDropdown className=" mt-2 text-secondary " title="ABOUT" id="basic-nav-dropdown">
              <Nav.Link  className="border border-secondary  " href="aboutus">
                      ABOUT US 
                     </Nav.Link>
                      <Nav.Link className="border border-secondary  " href="leadership">
                      LEADERSHIP  </Nav.Link>
                       <Nav.Link className="border border-secondary  " href="newsroom" >
                       NEWSROOM</Nav.Link>
                    
                   
                </NavDropdown> 
                <Nav.Link href="services" > 
                   {/* <NavDropdown title="SERVICES" id="basic-nav-dropdown">
                  <Row></Row>
                  <Row></Row>
                </NavDropdown> */}
                 <Button  variant="outline-primary border-0">
                    <span className="text-secondary">SERVICES</span>
                  </Button>
                </Nav.Link  >
                <Nav.Link href="careers">
                  <Button variant="outline-primary border-0">
                    <span className="text-secondary">WORK WITH US </span>
                  </Button>
                </Nav.Link>
                <Nav.Link href="events">
                <Button variant="outline-primary border-0">
                  <span className="text-secondary"> EVENTS</span></Button>
               </Nav.Link>
               <Nav.Link href="blogs"><Button href="blogs" variant="outline-primary border-0">
                  <span className="text-secondary"> BLOGS </span>
                </Button></Nav.Link>
                <Nav.Link href="contactus"><Button className="bg-primary  text-secondary text-bold border border-secondary">
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
