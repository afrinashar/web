import { Container, Row,Card } from "react-bootstrap"

 
const Events = () => {
  return (
   <>
  <Container><Row><h2>Upcoming events by SSINTEK</h2>Our upcoming events offer a chance to learn about the latest trends, explore new technologies, and network with professionals from across your industry</Row>
   <Row><Card><div className="card-title"></div><div className="card-body"></div><div className="card-footer"> </div></Card></Row>
   </Container> 
   </>
  )
}

export default Events
