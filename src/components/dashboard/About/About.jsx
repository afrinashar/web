import { Container, Row, Col } from "react-bootstrap";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoFlickr } from "react-icons/io5";
import { IoLogoApple } from "react-icons/io";
import { IoLogoSkype } from "react-icons/io";
const About = () => {
  return (
    <>
      <Container className="text-secondary p-5">
        <Row className=" m-5 p-2">
          {" "}
          <h3>The Beginning and The Growth</h3>
          <div className="grad"></div>
          <Col>
            <p>
              Edstem was founded by K K Ashraf and Jerrish Varghese in 2012
              primarily for developing products in education domain. The initial
              experience with schools in Middle East, research and study, and
              that hub of expertise transformed into a small consulting group
              and led us to create some of our first school management
              softwares. Later, we shifted our focus to both product as well as
              custom software development. In 2015 the team size crossed 10
              members and we were able to launch new products in to the market
              for schools. <br />{" "}
              <button className="btn btn-primary m-2 text-secondary "> Meet our Team </button> 
            </p>
          </Col>
          <Col><img src="https://imgs.search.brave.com/oG1HVYkTn6BoXHC2LmkV0CGQA42C6vw7HEIlotJkBCg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by95b3VuZy1idXNp/bmVzcy1wZW9wbGUt/c2l0dGluZy1tZWV0/aW5nLXRhYmxlLWNv/bmZlcmVuY2Utcm9v/bS1kaXNjdXNzaW5n/LXdvcmstcGxhbm5p/bmctc3RyYXRlZ3lf/NTIxMzctMzU1NTIu/anBnP3NpemU9NjI2/JmV4dD1qcGc"></img></Col>
        </Row>
        <Row className=" m-5 p-2">
          <h2>Who we are</h2>
          <p>
            Unlock a world of advantages when you choose Edstem for software
            ideation and delivery
          </p>
          <Col>
            <ul className="list-unstyled">
              <li>
                {" "}
                <IoLogoFlickr className="bg-light m-2 border border-primary" />
                Unwavering Commitment to Quality and Punctuality
              </li>
              <li>
                {" "}
                <IoLogoFlickr className="bg-light m-2 border border-primary" />
                Transparent and Collaborative software development
              </li>
              <li>
                {" "}
                <IoLogoFlickr className="bg-light m-2 border border-primary" />
                icon A Client-Centric Philosophy at Our Core
              </li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li>
                {" "}
                <IoLogoFlickr className="bg-light m-2 border border-primary" />
                Mastery of Cutting-Edge Technologies
              </li>
              <li > <IoLogoFlickr className="bg-light m-2 border border-primary" />Cost-Effective Solutions with Ongoing Support</li>
              <li>Proven Track Record of Delivering Scalable Solutions</li>
            </ul>
          </Col>
        </Row>
        <Row className=" m-5 p-2">
          {" "}
          <h3>Our Valid Partners</h3>
          <div className="grad"></div>
          <p>
            Discover the success stories from our satisfied clients, sharing
            their experiences on how we've been instrumental in their
            achievements.
          </p>
          <marquee>
            {" "}
            <IoLogoTwitter className="w-25 h-25" />{" "}
            <IoLogoApple className="w-25 h-25" />
            <IoLogoSkype className="w-25 h-25" />
            <IoLogoTwitter className="w-25 h-25" />{" "}
          </marquee>
        </Row>
        <Row className=" m-5 p-2">
          {" "}
          <h3>Our Approach</h3>
          <p>
            Collaborate, conceptualize, conceive, and create - our fundamental
            approach defines a dynamic process where clients are integral.
            Through agile techniques, we ensure clients are part of every
            development phase, fostering incremental changes for feature-rich,
            best-in-class products. It's a collaborative journey towards mutual
            success.
          </p>
          <ul className=" d-flex flex-row justify-content-between list-unstyled">
          <li>1</li><li>2</li><li>3</li><li>4</li>
        </ul>
          <div className="grad"></div>
          <ul className=" d-flex flex-row justify-content-between list-unstyled">
          <li>Consult and Conceptualize</li>
          <li>Architecting the solution</li>
          <li>Visualize the solution</li>
          <li>Agile Development</li>
        </ul>
         <ul className=" d-flex flex-row justify-content-between list-unstyled">
          <li>5</li><li>6</li><li>7</li><li>8</li>
        </ul>
        <div className="grad"></div>
        <ul className=" d-flex flex-row justify-content-between list-unstyled">
          <li>Continuous Monitoring <br/>and Performance Engineering</li>
          <li>Quality Assurance</li>
          <li>Product Delivery</li>
          <li> Support and maintenance</li>
        </ul> </Row>
      
        <Row className=" d-flex align-items-center m-5 p-4 bg-secondary text-light"> <Col><h3>Get a Tailored Quote

<h4>for Your Tech Needs</h4></h3></Col><Col>Ready to get a clear picture of the investment needed for our top-notch tech services? Simply fill out our quote request form, and our team will provide you with a personalized qu
ote.</Col><Col><button className="btn btn-light">Contact Us</button></Col></Row>
      </Container>
    </>
  );
};

export default About;
