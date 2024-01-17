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
       </Row   >
       <Row className="justify-content-md-center d-flex flex-row">


<Row className="mt-2" xs={12} sm={6} md={4}>
      

       

<div className="card  ">

    <div className="slide slide1">

        <div className="content">

            <div className="icon">

            <FaReact className=" m-0 w-75 h-75   rounded-circle text-secondary p-1  " />
            <h3 className=" m-1">
                     
                     Java Developer
                    </h3>
            </div>

        </div>

    </div>

    <div className="slide slide2">

        <div className="content">

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
 

       

<div className="card">

    <div className="slide slide1">

        <div className="content">

            <div className="icon">

            <FaReact className=" m-0 w-75 h-75   rounded-circle text-secondary p-1  " />
            <h3 className=" m-1">
                     
                      React JS Developer
                    </h3>
            </div>

        </div>

    </div>

    <div className="slide slide2">

        <div className="content">

        <p>
                    A JavaScript library for building user interfaces,
                    particularly known for its component-based approach and
                    virtual DOM...
                  </p>{" "}
               
                    <Link to={`/service/react`} className=" d-flex   flex-row float-end  text-secondary">
                   <h6 className=" p-1  text-secondary"> Expand</h6>  <  IoIosArrowForward
             

                  href="/services"
                  className="  mt-2  link font-bold text-secondary w-100"
                />
                    </Link> 

        </div>

    </div>

</div>
 

       

<div className="card">

    <div className="slide slide1">

        <div className="content">

            <div className="icon">

            <FaReact className=" m-0 w-75 h-75   rounded-circle text-secondary p-1  " />
            <h3 className=" m-1">
                     
                      React JS Developer
                    </h3>
            </div>

        </div>

    </div>

    <div className="slide slide2">

        <div className="content">

        <p>
                    A JavaScript library for building user interfaces,
                    particularly known for its component-based approach and
                    virtual DOM...
                  </p>{" "}
               
                    <Link to={`/service/react`} className=" d-flex   flex-row float-end  text-secondary">
                   <h6 className=" p-1  text-secondary"> Expand</h6>  <  IoIosArrowForward
             

                  href="/services"
                  className="  mt-2  link font-bold text-secondary w-100"
                />
                    </Link> 

        </div>

    </div>

</div>
 

       

<div className="card">

    <div className="slide slide1">

        <div className="content">

            <div className="icon">

            <FaReact className=" m-0 w-75 h-75   rounded-circle text-secondary p-1  " />
            <h3 className=" m-1">
                     
                      React JS Developer
                    </h3>
            </div>

        </div>

    </div>

    <div className="slide slide2">

        <div className="content">

        <p>
                    A JavaScript library for building user interfaces,
                    particularly known for its component-based approach and
                    virtual DOM...
                  </p>{" "}
               
                    <Link to={`/service/react`} className=" d-flex   flex-row float-end  text-secondary">
                   <h6 className=" p-1  text-secondary"> Expand</h6>  <  IoIosArrowForward
             

                  href="/services"
                  className="  mt-2  link font-bold text-secondary w-100"
                />
                    </Link> 

        </div>

    </div>

</div>
 


</Row      ></Row> 
</Row>
       
    </>
  );
};

export default Service;
