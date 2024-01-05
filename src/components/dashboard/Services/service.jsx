import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

import { Card, Row, Col,NavLink,Nav, Button } from "react-bootstrap";
import { TiArrowRightOutline } from "react-icons/ti";
import "./service.css";
const Service = () => {
  return (
    <>
      <Row className="text-secondary p-5 d-flex justify-content-around">
        <Row className="d-flex justify-content-around">
          <h1 className="m-3"> What we do </h1>
          <div className="grad"></div>

          <Row>
            <Col className="d-flex flex-row ">
            <div className=" card m-2 border border-secondary opacity-2">
            
       
               <FaReact className="w-50  float-start " /> 
 <Col><h6 className="float-end"> React JS Developer</h6></Col>

                <p>
                A JavaScript library for building user interfaces, particularly known for its component-based approach and virtual DOM...
                </p> <Row>
               <Col><Link href="/service" className="text-primary">Read more...</Link></Col> <Col><TiArrowRightOutline href="/services" className="p-2 float-end m-2 bg-primary border h-25 w-25" />
               </Col> </Row>
              </div>
              
              <div className=" m-2 border border-secondary opacity-2">
            
            <Card.ImgOverlay className="  d-flex justify-content-end align-items-end "></Card.ImgOverlay>{" "}
            <TiArrowRightOutline href="/services" className="p-2 float-end m-2 bg-primary border h-25 w-25" />
            <h2 className="hov">Cloud infrastructure</h2>{" "}
            <p>
              Leverage hybrid cloud or reinvent your networks and workplace
              experience to accelerate value across the cloud...
            </p>
          </div> 
           <div className=" m-2 border border-secondary opacity-2">
            
            <Card.ImgOverlay className="  d-flex justify-content-end align-items-end "></Card.ImgOverlay>{" "}
            <TiArrowRightOutline href="/services" className="p-2 float-end m-2 bg-primary border h-25 w-25" />
            <h2 className="hov">Cloud infrastructure</h2>{" "}
            <p>
              Leverage hybrid cloud or reinvent your networks and workplace
              experience to accelerate value across the cloud...
            </p>
          </div>
              
            </Col>
          </Row>
        </Row>
      </Row>
       
             
              <div className="card   m-5  bg-dark  text-secondary    rounded">
                <div className="card-body">
                  <div className="card-title ">
                    <h5 className="text-decoration-none">
                       Dev Days - March 2022. Developer conference at Monsoon
                      Empress Kochi
                    </h5> 
                  </div>
                </div>
                <div className="card-footer"> <p>25 March, 2023</p></div>
              </div>
            
    </>
  );
};

export default Service;
