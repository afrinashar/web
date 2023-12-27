import { Col, Row,Card, Button } from "react-bootstrap"

 

const LeaderShip = () => {
  return (
   <>   <Row><Row><h2>Meet the leaders leading Edstem</h2>Success at Edstem is driven by a team of accomplished leaders. Learn more about the individuals lighting our path <Row><Col> <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src="holder.js/100px180" />
   <Card.Body>
     <Card.Title>Card Title</Card.Title>
     <Card.Text>
       Some quick example text to build on the card title and make up the
       bulk of the card's content.
     </Card.Text>
     
   </Card.Body>
 </Card></Col></Row></Row><Row><h2>Meet the Edstem team</h2>To become the company our valued customers envision, we rely on a diverse team of dedicated professionals. Allow us to introduce the individuals who are guiding Edstem's journey <Col> <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src="holder.js/100px180" />
   <Card.Body>
     <Card.Title>Card Title</Card.Title>
     <Card.Text>
       Some quick example text to build on the card title and make up the
       bulk of the card's content.
     </Card.Text>
     
   </Card.Body>
 </Card></Col></Row><Row className="bg-orange"><Col><h3>Join Our Team of Innovators and

Shape the Future Together!</h3></Col><Col>Ready to code the future?

Join our team of tech enthusiasts and be part of something amazing!</Col><Col><Button className="bg-secondary text-primary">VIEW LATEST OPENINGS</Button></Col></Row></Row></>
  )
}

export default LeaderShip
