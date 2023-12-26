import { Container, Navbar,Row,Col } from "react-bootstrap"

 
const Footer = () => {
  return (
    <><Navbar sticky='bottom' className="navbar navbar-inverse  ">
   
      <Container>
       <Row><Row>
        <a className="navbar-brand" href="#">WebSiteName</a>
<div><div className="d-flex column"> <h6>USA</h6><p>Edstem Technologies LLC
254 Chapman Rd, Ste 208 #14734
Newark, Delaware 19702 US</p></div><div><h6>INDIA</h6><p>Edstem Technologies Pvt Ltd
Office No-2B-1, Second Floor
Jyothirmaya, Infopark Phase II
Ernakulam, Kerala
Pin: 682303</p></div></div>
       
      <ul className="nav navbar-nav">
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
      </Row>
    <Row><Col>logo</Col><Col>India : +91 904 873 8807
USA : 1 (302) 455-2551
info@edstem.com



</Col></Row>
    <Row><Col>© 2023 — Edstem All Rights Reserved</Col><Col>Privacy Policy</Col><Col>Terms of Use</Col></Row>
  </Row> </Container></Navbar></>
  )
}

export default Footer
