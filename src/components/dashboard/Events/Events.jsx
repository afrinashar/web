import { Container, Row, Card, Col } from "react-bootstrap";

const Events = () => {
  return (
    <>
      <Container className="text-secondary">
        <Row className="m-4 p-2">
          <h2>Upcoming events by SSINTEK</h2>
          <div className="grad"></div><p>Our upcoming events offer a chance to
          learn about the latest trends, explore new technologies, and network
          with professionals from across your industry</p>
        </Row>
        <Row>
          <Card
            className="text-center bg-dark text-white  z-depth-1 aqua-gradient "
            border="primary"
          >
            <Card.Header>
             <p>SSINTEK Technologies Unveils New Brand Identity, Embracing
              Innovation and Empathy</p> 
            </Card.Header>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title className="text-primary"> <h3>Venue</h3></Card.Title>
                  <Card.Text>Poovar Island Resorts</Card.Text>
                </Col>
                <Col>
                  <Card.Title className="text-primary"><h3>Date</h3> </Card.Title>
                  <Card.Text>05 January 2023</Card.Text>
                </Col>
                <Col>
                  <Card.Title className="text-primary"><h3>Event Type</h3> </Card.Title>
                  <Card.Text>offline</Card.Text>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <Row>
                <Row>
                  <Card.Title className="text-primary">
                    <h3>About this event</h3>
                  </Card.Title>
                <p> SSINTEK Technologies is thrilled to announce the launch of its
                  new brand identity, a symbol of the company's commitment to
                  innovation, empathy, and transparency. The refreshed brand
                  reflects SSINTEKs dedication to understanding the unique needs
                  of its clients and providing solutions that address them
                  effectively and with the utmost transparency.</p> 
                </Row>
                <Row>
                  <Col>
                    <Col>
                      <img></img>
                    </Col>
                    <Col>
                      <Card.Title className="text-primary"><h3>Host</h3></Card.Title>
                     <h6>Jerrish Vaeghese Co - Founder & CTO. SSINTEK{" "}
                   </h6>  </Col>
                  </Col>
                  <Col>
                    <Col>
                      <img></img>
                    </Col>
                    <Col>
                      <Card.Title className="text-primary"><h3>Speaker</h3></Card.Title>
                     <h6> Peter HUMAN RESOURCE SSINTEK{" "}</h6>
                    </Col>
                  </Col>
                </Row>
              </Row>{" "}
            </Card.Footer>
          </Card>

          <Row className="p-3 m-4">
            <h2>Past events by SSINTEK</h2>
            <div className="grad"></div>
            <div className="col   d-flex flex-row    ">
              <div className="card  m-5  bg-dark  text-secondary    rounded">
                <div className="card-body">
                  <div className="card-title ">
                    <h5 className="text-decoration-none">
                      {" "}
                      Dev Days - March 2022. Developer conference at Monsoon
                      Empress Kochi
                    </h5>{" "}
                  </div>
                </div>
                <div className="card-footer"><p> 25 March, 2023</p></div>
              </div>{" "}
              <div className="card   m-5  bg-dark  text-secondary    rounded">
                <div className="card-body">
                  <div className="card-title ">
                    <h5 className="text-decoration-none">
                      {" "}
                      Dev Days - March 2022. Developer conference at Monsoon
                      Empress Kochi
                    </h5>{" "}
                  </div>
                </div>
                <div className="card-footer"> <p>25 March, 2023</p></div>
              </div>
            </div>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Events;
