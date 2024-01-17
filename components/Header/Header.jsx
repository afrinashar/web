/* eslint-disable react/jsx-no-undef */
 
import logo from "../../assets/logo.PNG"
import {  Navbar, NavDropdown,Nav,Container,Row, Button} from "react-bootstrap"
const Header = () => {
  return (
    <>  <Navbar expand="lg"     data-bs-theme="dark" className=" nav   top-0  ">
    <Container className="nav nav-pills nav-justified">
      <Navbar.Brand  className=" " href="#home"> <div className=" w-10"><img src={logo} className=" logo"></img> </div></Navbar.Brand>
      <div className=" ">  <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <NavDropdown className=""  title="ABOUT" id="basic-nav-dropdown">
            <Row className=" w-100 bg-secondary">
             <Row><h4>ABOUT US</h4> </Row> 
              <Row><h4>LEADERSHIP</h4></Row>
<Row><h4>NEWSROOM</h4></Row>

              </Row><Row></Row>
          </NavDropdown>
          <NavDropdown title="SERVICES" id="basic-nav-dropdown">
            <Row></Row><Row></Row>
          </NavDropdown><Nav.Link href="careers"><Button variant="outline-primary border-0"><span className="text-secondary">WORK WITH US  </span></Button></Nav.Link>
          <a href="events" className="btn btn-outline-primary  p-1 border-0"><span className="text-secondary"> EVENTS</span></a> 
           <Button href="blogs" variant="outline-primary border-0"><span className="text-secondary"> BLOGS </span></Button> 
       <Button className="bg-primary  text-secondary text-bold border border-light">CONTACT US</Button> </Nav>
      </Navbar.Collapse></div>
     
    </Container>
  </Navbar></>
  )
}

export default Header
