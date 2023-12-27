import { Container, Row, Card, Col } from "react-bootstrap"


const Events = () => {
  return (
    <>
      <Container><Row><h2>Upcoming events by SSINTEK</h2>Our upcoming events offer a chance to learn about the latest trends, explore new technologies, and network with professionals from across your industry</Row>
        <Row>
          <Card className="text-center bg-dark text-white  z-depth-1 aqua-gradient " border="primary" >
            <Card.Header >SSINTEK Technologies Unveils New Brand Identity, Embracing Innovation and Empathy</Card.Header>
            <Card.Body>
              <Row><Col><Card.Title className="text-primary"> Venue</Card.Title>
                <Card.Text>
                  Poovar Island Resorts
                </Card.Text></Col>
                <Col><Card.Title className="text-primary">Date </Card.Title>
                  <Card.Text>
                    05 January 2023
                  </Card.Text></Col>
                <Col><Card.Title className="text-primary">Event Type </Card.Title>
                  <Card.Text>
                    offline
                  </Card.Text></Col></Row>

            </Card.Body>
            <Card.Footer  ><Row><Row><Card.Title className="text-primary">About this event</Card.Title>SSINTEK Technologies is thrilled to announce the launch of its new brand identity, a symbol of the company's commitment to innovation, empathy, and transparency. The refreshed brand reflects Edstems dedication to understanding the unique needs of its clients and providing solutions that address them effectively and with the utmost transparency.</Row>
              <Row><Col><Col><img></img></Col><Col><Card.Title className="text-primary">Host</Card.Title>Jerrish Vaeghese

                Co - Founder & CTO. SSINTEK </Col></Col>
                <Col><Col><img ></img></Col><Col><Card.Title className="text-primary">Speaker</Card.Title>Peter
                  HUMAN RESOURCE SSINTEK </Col></Col></Row></Row> </Card.Footer>
          </Card>

          <Row><h2>Past events by SSINTEK</h2>
            <div className='col-lg-4  mh-50 col-sm-12'  >
              <div className='card mh-30 p-3  bg-dark  shadow p-3 mb-5 bg-body rounded'>

                <div className="card-body">
                  <div className='card-title '><h2 className='text-decoration-none'> Dev Days - March 2022. Developer conference at Monsoon Empress Kochi</h2> </div></div>
                <div className="card-footer"> 25 March, 2023</div>
              </div>  <div className='card mh-30 p-3   bg-dark  shadow p-3 mb-5 bg-body rounded'>

<div className="card-body">
  <div className='card-title '><h2 className='text-decoration-none'> Dev Days - March 2022. Developer conference at Monsoon Empress Kochi</h2> </div></div>
<div className="card-footer"> 25 March, 2023</div>
</div>
            </div>
          </Row>
        </Row>
      </Container>
    </>
  )
}

export default Events
