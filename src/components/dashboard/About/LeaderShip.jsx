import { Col, Row, Card, Button } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";

const LeaderShip = () => {
  return (
    <>
     
      <Row className="text-secondary p-5 d-flex justify-content-around">
        <Row className="d-flex justify-content-around">
          <h2 className="m-3">Meet the leaders leading SSINTEK</h2>
          <div className="grad"></div>
          <p>Success at SSINTEK is driven by
          a team of accomplished leaders. Learn more about the individuals
          lighting our path </p>
          <Row>
          <Col className="d-flex flex-row ">
          <Card style={{ width: "18rem" , margin:"10px" }}>
              <Card.Img variant="top" src="https://imgs.search.brave.com/4vHckm2KWSwFzqTROwpxbsMEV3j2pRgittnYeCZAC2k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy01MTIz/MDQ3MzYuanBnP3Jl/c2l6ZT05ODA6Kg" />
              <Card.Body>
                <Card.Title>MARK MA</Card.Title>
                <Card.Text>
                  Human Resourse
                </Card.Text>
                <FaLinkedin  className="m-2"/>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" , margin:"10px" }}>
              <Card.Img variant="top" src="https://imgs.search.brave.com/4vHckm2KWSwFzqTROwpxbsMEV3j2pRgittnYeCZAC2k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy01MTIz/MDQ3MzYuanBnP3Jl/c2l6ZT05ODA6Kg" />
              <Card.Body>
                <Card.Title>MARK MA</Card.Title>
                <Card.Text>
                  Human Resourse
                </Card.Text>
                <FaLinkedin  className="m-2"/>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" , margin:"10px" }}>
              <Card.Img variant="top" src="https://imgs.search.brave.com/4vHckm2KWSwFzqTROwpxbsMEV3j2pRgittnYeCZAC2k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy01MTIz/MDQ3MzYuanBnP3Jl/c2l6ZT05ODA6Kg" />
              <Card.Body>
                <Card.Title>MARK MA</Card.Title>
                <Card.Text>
                  Human Resourse
                </Card.Text>
                <FaLinkedin  className="m-2"/>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Row>
        <Row>
          <h2 className="m-4">Meet the SSINTEK team</h2>
          <div className="grad"></div>
         <p> To become the company our valued
          customers envision, we rely on a diverse team of dedicated
          professionals. Allow us to introduce the individuals who are guiding
          SSINTEK's journey </p>
          <Col className="d-flex flex-row ">
          <Card style={{ width: "18rem" , margin:"10px" }}>
              <Card.Img variant="top" src="https://imgs.search.brave.com/4vHckm2KWSwFzqTROwpxbsMEV3j2pRgittnYeCZAC2k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy01MTIz/MDQ3MzYuanBnP3Jl/c2l6ZT05ODA6Kg" />
              <Card.Body>
                <Card.Title>MARK MA</Card.Title>
                <Card.Text>
                  Human Resourse
                </Card.Text>
                <FaLinkedin  className="m-2"/>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://imgs.search.brave.com/4vHckm2KWSwFzqTROwpxbsMEV3j2pRgittnYeCZAC2k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy01MTIz/MDQ3MzYuanBnP3Jl/c2l6ZT05ODA6Kg" />
              <Card.Body>
                <Card.Title>MARK MA</Card.Title>
                <Card.Text>
                  Human Resourse
                </Card.Text>
                <FaLinkedin  className="m-2"/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="bg-primary m-4 p-5">
          <Col>
            <h3>Join Our Team of Innovators and Shape the Future Together!</h3>
          </Col>
          <Col>
            Ready to code the future? Join our team of tech enthusiasts and be
            part of something amazing!
          </Col>
          <Col>
            <Button href="" className="bg-dark text-secondary border border-secondary">
              VIEW LATEST OPENINGS
            </Button>
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default LeaderShip;
