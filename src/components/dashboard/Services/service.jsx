import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Card, Row, Col, NavLink, Nav, Button } from "react-bootstrap";
import { TiArrowRightOutline } from "react-icons/ti";
import "./service.css";
import { IoIosArrowForward } from "react-icons/io";

const Service = () => {
  return (
    <>
      <Row className="text-secondary p-5 d-flex justify-content-around">
        <Row className="d-flex justify-content-around">
          <h1 className="m-3"> OUR SERVICES </h1>
          <div className="grad"></div>
          <p>
            For achieving success in competitive business scenario, the services
            sector needs to play a crucial role by enriching flexibility, speed,
            and efficiency of the clients. Our complete range of services
            provided by leveraging our domain and technical expertise will
            enable the clients to achieve these qualities
          </p>
          <h5 className="text-primary">
            We provide the following services to our customers
          </h5>
          <Row>
            <Col className="d-flex flex-row ">
              <div className=" card   border border-secondary opacity-2">
                <Card.ImgOverlay className=" text-secondary "><Row className="first">
                  <Col xs={5}>
                    {" "}
                    <FaReact className=" m-0 w-75 h-75   rounded-circle text-secondary p-1  float-start " />
                  </Col>{" "}
                  <Col xs={6}>
                    {" "}
                    <h6 className=" mt-1 mx-1 float-start">
                      {" "}
                      React JS Developer
                    </h6>{" "}
                  </Col>
                  <Col xs={1}>
                    <TiArrowRightOutline
                      href="/services"
                      className="  float-end m-2 text-secondary bg-primary border    "
                    />{" "}
                  </Col></Row>
                  <div className="blur">
                  <Col xs={5}>
                    {" "}
                    <FaReact className=" m-0 w-75 h-75 bg-primary rounded-circle text-secondary p-1  float-start " />
                  </Col>
                  <p>
                    A JavaScript library for building user interfaces,
                    particularly known for its component-based approach and
                    virtual DOM...
                  </p>{" "}
                  <Row>
                    <Link href="/" className="text-primary">
                      Read more...
                    </Link>{" "}
                   
                  </Row></div>
                </Card.ImgOverlay>
             
             
                <img src="https://imgs.search.brave.com/5Hr5ZU31O9nMip6euaB3F2DMJI3sGWSAaWjH11hDAjo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/YWJzdHJhY3QtdGVj/aG5vbG9neS1zcWwt/aWxsdXN0cmF0aW9u/XzIzLTIxNDkyMzcx/MzkuanBnP3NpemU9/NjI2JmV4dD1qcGc"></img>

              </div>

              <div className=" m-2 border border-secondary opacity-2">
                {/* <Card.ImgOverlay className="  d-flex justify-content-end align-items-end "></Card.ImgOverlay>{" "} */}
                <TiArrowRightOutline
                  href="/services"
                  className="p-2 float-end m-2 bg-primary border h-25 w-25"
                />
                <h2 className="hov">Cloud infrastructure</h2>{" "}
                <p>
                  Leverage hybrid cloud or reinvent your networks and workplace
                  experience to accelerate value across the cloud...
                </p>
              </div>
              <div className=" m-2 border border-secondary opacity-2">
                {/* <Card.ImgOverlay className="  d-flex justify-content-end align-items-end "></Card.ImgOverlay>{" "} */}
                <TiArrowRightOutline
                  href="/services"
                  className="p-2 float-end m-2 bg-primary border h-25 w-25"
                />
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
      <div class="container">

       

<div class="card">

    <div class="slide slide1">

        <div class="content">

            <div class="icon">

            <FaReact className=" m-0 w-75 h-75   rounded-circle text-secondary p-1  " />
            <h3 className=" m-1">
                     
                      React JS Developer
                    </h3>
            </div>

        </div>

    </div>

    <div class="slide slide2">

        <div class="content">

        <p>
                    A JavaScript library for building user interfaces,
                    particularly known for its component-based approach and
                    virtual DOM...
                  </p>{" "}
               
                    <Link href="/service/react" className="  float-end  text-secondary">
                   <h6>Expand</h6>  <  IoIosArrowForward
             

                  href="/services"
                  className="   text-secondary w-100"
                />
                    </Link> 

        </div>

    </div>

</div>
 
</div>

      <div className="card   m-5  bg-dark  text-secondary    rounded">
        <div className="card-body">
          <div className="card-title ">
            <h5 className="text-decoration-none">
              Dev Days - March 2022. Developer conference at Monsoon Empress
              Kochi
            </h5>
          </div>
        </div>
        <div className="card-footer">
          {" "}
          <p>25 March, 2023</p>
        </div>
      </div>
    </>
  );
};

export default Service;
