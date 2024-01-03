import { FaLinkedin } from "react-icons/fa";
import {Card,Row,Col,Button} from 'react-bootstrap'
const Service = () => {
  return (
    <>
  
  <Row className="text-secondary p-5 d-flex justify-content-around">
        <Row className="d-flex justify-content-around">
          <h1 className="m-3"> What we do </h1>
          <div className="grad"></div>
         
          <Row>
          <Col className="d-flex flex-row ">
        
             
          <Card style={{ }}className="bg-dark text-white">
      <Card.Img className="hover-shadow" src="https://imgs.search.brave.com/K9c3EndrHhoFJ7rWL4ps-0X0BRzg9YLyzUg10Q7lw8Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS82NjQt/NjY0NDUwOV9pY29u/LXJlYWN0LWpzLWxv/Z28taGQtcG5nLWRv/d25sb2FkLnBuZw" alt="Card image" />
      <Card.ImgOverlay className="  d-flex justify-content-end align-items-end ">
        <Card.Title  className="bg-primary">more</Card.Title>
        
      </Card.ImgOverlay>
    </Card>   
           
   
            <Card style={{ width: "18rem" , margin:"10px" }}>
              <Card.Img variant="top" className="card-img" src="https://imgs.search.brave.com/4vHckm2KWSwFzqTROwpxbsMEV3j2pRgittnYeCZAC2k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9HZXR0/eUltYWdlcy01MTIz/MDQ3MzYuanBnP3Jl/c2l6ZT05ODA6Kg" />
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
        
      </Row></>
  )
}

export default Service
