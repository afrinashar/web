import { Container, Navbar,Row,Col } from "react-bootstrap"
import logo from "../../assets/logo.JPG"
 
const Footer = () => {
  return (
    <><Navbar   bg="dark" className="navbar     bottom-0 navbar-inverse text-light  ">
   
      <Container>
     
       <Row><Row>  <div className="flex justify-center      "> <img className="w-25" src= {logo}></img></div></Row><Row>
      <Col > <a className="navbar-brand text-light "  href="#">logo</a>
<Col>  <h6>USA</h6><p>Edstem Technologies LLC
254 Chapman Rd, Ste 208 #14734
Newark, Delaware 19702 US</p> <div><h6>INDIA</h6><p>Edstem Technologies Pvt Ltd
Office No-2B-1, Second Floor
Jyothirmaya, Infopark Phase II
Ernakulam, Kerala
Pin: 682303</p></div></Col>
       </Col> <Col>
      <ul className="nav navbar-nav  text-light">
        <li className="active"><a href="#">Home</a></li>
        <li className="dropdown">
          <a className=" text-green"   href="about"> About</a>
          <ul className=" text-secondary">
            <li><a href="/about">About</a></li>
            <li><a href="/leadership">Leadership</a></li>
            <li><a href="/newsroom">Newsroom</a></li>
          </ul>
        </li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
      </Col></Row>
    <Row><Col>logo</Col><Col>India : +91 904 873 8807
USA : 1 (302) 455-2551
info@edstem.com



</Col></Row>
    <Row className="text-secondary"><Col >© 2023 — Edstem All Rights Reserved</Col><Col>Privacy Policy</Col><Col>Terms of Use</Col></Row>
  </Row> </Container></Navbar></>
  )
}

export default Footer
