import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaNode } from "react-icons/fa";

import { Link } from "react-router-dom";
import { Card, Row, Col, NavLink, Nav, Button, Container } from "react-bootstrap";
import { TiArrowRightOutline } from "react-icons/ti";
import "./service.css";
import { FaPython } from "react-icons/fa";

import { IoIosArrowForward } from "react-icons/io";

const Service = () => {
  return (
    <>
    <Container fluid>
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
          
        </Row>
      </Row>
      <Row className="g-3"  >
      <div class="col mt-5 container">

       

<div class="card java">

    <div class="slide slide1">

        <div class="content">

            <div class="icon">

            <FaJava  className=" m-0 w-75 h-75   rounded-circle text-secondary p-1  " />
            <h3 className="   m-1">
                     
                      Java Developer
                    </h3>
            </div>

        </div>

    </div>

    <div class="slide slide2">

        <div class="content">

        <p>
        Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible...
                  </p> 
               
                    <Link to="/service/java" className=" d-flex flex-row  float-end   text-secondary">
                   <h6>Expand</h6>  <  IoIosArrowForward
             

                  href="/services"
                  className=" m-1  text-secondary w-100"
                />
                    </Link> 

        </div>

    </div>

</div>
 
</div>
<div class="col mt-5 container">

       

<div class="card react">

    <div class="slide slide1">

        <div class="content">

            <div class="icon">

            <FaReact className=" m-0 w-75 h-75   rounded-circle text-secondary p-1  " />
            <h3 className=" m-1">
                     
                     React Js Developer
                    </h3>
            </div>

        </div>

    </div>

    <div class="slide slide2">

        <div class="content">

        <p>
        React is a free and open-source front-end JavaScript library for building user interfaces based on components... </p>{" "}
               
                    <Link to="/service/react" className=" d-flex flex-row hov float-end  text-secondary">
                   <h6>Expand</h6>  <  IoIosArrowForward
             

                  href="/services"
                  className=" hov m-1 text-secondary w-50"
                />
                    </Link> 

        </div>

    </div>

</div>
 
</div>
<div class="col  mt-5 container">

       

<div class="card aws">

    <div class="slide slide1">

        <div class="content">

            <div class="icon">

            <FaAws className=" m-0 w-75 h-75   rounded-circle text-secondary p-1  " />
            <h3 className=" m-1">
                     
                     AWS Devops
                    </h3>
            </div>

        </div>

    </div>

    <div class="slide slide2">

        <div class="content">

        <p>
        AWS provides a set of flexible services d
    esigned to enable companies to more rapidly...
                  </p>{" "}
               
                    <Link to="/service/aws" className=" d-flex flex-row hov float-end  text-secondary">
                   <h6>Expand</h6>  <  IoIosArrowForward
             

                  href="/services"
                  className=" m-1  hov text-secondary w-100"
                />
                    </Link> 

        </div>

    </div>

</div>
 
</div>
<div class="col mt-5 container">

       

<div class="card python">

    <div class="slide slide1">

        <div class="content">

            <div class="icon">

            <FaPython className=" m-0 w-75 h-75   rounded-circle text-secondary p-1  " />
            <h3 className=" m-1">
                     
                     Python Developer
                    </h3>
            </div>

        </div>

    </div>

    <div class="slide slide2">

        <div class="content">

        <p>
        Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected...
                  </p>{" "}
               
                    <Link to="/service/python" className="  d-flex flex-row hov float-end  text-secondary">
                   <h6>Expand</h6>  <  IoIosArrowForward
             

                  href="/services"
                  className=" m-1  text-secondary w-100"
                />
                    </Link> 

        </div>

    </div>

</div>
 
</div>
<div class="col mt-5 container">

       

<div class="card node">

    <div class="slide slide1">

        <div class="content">

            <div class="icon">

            <FaNode className=" m-0 w-75 h-75   rounded-circle text-secondary p-1  " />
            <h3 className=" m-1">
                     
                      Node JS Developer
                    </h3>
            </div>

        </div>

    </div>

    <div class="slide slide2">

        <div class="content">

        <p>
        Node.js is a cross-platform, ope
    n-source JavaScript runtime environment that can run on Windows, L
    inux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine...
                  </p> 
               
                    <Link to="/service/node" className=" d-flex flex-row hov float-end  text-secondary">
                   <h6>Expand</h6>  <  IoIosArrowForward
             

                  href="/services"
                  className=" m-1  text-secondary w-100"
                />
                    </Link> 

        </div>

    </div>

</div>
 
</div>
    </Row>
    </Container></>
  );
};

export default Service;
