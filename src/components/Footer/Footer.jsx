import { Container, Navbar,Row,Col } from "react-bootstrap"
import logo from "../../assets/footer.PNG"
 import fb  from "../../assets/fb.PNG"
 import link  from "../../assets/link.PNG"
 import insta  from "../../assets/inst.PNG"
const Footer = () => {
  return (
    <><Navbar    className="navbar     bottom-0 navbar-inverse text-secondary">
   
      <Container>
     
       <Row><Row>  <div className="flex justify-center      "> <img className="w-25" className=' m-4' src= {logo}></img></div></Row><Row>
      <Col >  <Row><Col><img className="w-25"   src= {fb}></img></Col></Row>
<Col>  <h6>USA</h6><p>SSINTEK Technologies LLC
254 Chapman Rd, Ste 208 #14734
Newark, Delaware 19702 US</p> <div><h6>INDIA</h6><p>Edstem Technologies Pvt Ltd
Office No-2B-1, Second Floor
Jyothirmaya, Infopark Phase II
Ernakulam, Kerala
Pin: 682303</p></div></Col>
       </Col> <Col>
      <ul className="nav navbar-nav   text-secondary">
        <li className="active"><a href="#">Home</a></li>
        <li className="dropdown">
          <a className=" text-primary"   href="about"> About</a>
          <ul className=" text-secondary">
            <li  className=" text-secondary"><a href="/about">About</a></li>
            <li><a href="/leadership">Leadership</a></li>
            <li><a href="/newsroom">Newsroom</a></li>
          </ul>
        </li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
      </Col></Row>
    <Row><Col><Row><Col className=""><img className="w-25 bg-blue"  src= {fb}></img> 
    <img className="w-25 bg-blue  rounded"  src= {insta}></img> 
    <img className="w-25 bg-blue"  src= {link}></img></Col></Row></Col><Col>India : +91 904 873 8807
USA : 1 (302) 455-2551
info@edstem.com



</Col></Row>
    <Row className="text-muted"><Col >© 2023 — Edstem All Rights Reserved</Col><Col>Privacy Policy</Col><Col>Terms of Use</Col></Row>
  </Row> </Container></Navbar></>
  )
}

export default Footer
