import { Container,Row,Col } from "react-bootstrap";
import { IoLogoTwitter } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { IoLogoApple } from "react-icons/io";
import { IoLogoSkype } from "react-icons/io";

import { BsArrowUpRight } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <Container className="text-secondary">
        <Row className=" m-5 p-2">
          <h3>Empowering Businesses in the Digital Age</h3>
          <div className="grad"></div>
          <p>
            In today's dynamic business environment, navigating the complexities
            of IT infrastructure and strategy can be a challenging task. As a
            leading IT consulting firm, we are committed to providing
            comprehensive IT solutions that enable businesses to thrive in the
            digital age. Our team of experienced and knowledgeable consultants
            possesses a deep understanding of the latest technologies and
            trends, allowing us to design and implement tailored solutions that
            align with your specific business needs.
          </p>
        </Row>
        <Row className=" m-5 p-2">
          <h3>How we solved the problem</h3>
          <div className="grad"></div>
          <p>
            Explore our success stories and discover how we tackled challenges
            through innovative solutions. Dive into our case studies to witness
            firsthand how we turn problems into opportunities.
          </p>
        </Row>
        <Row className=" m-5 p-2">
          <h3>Explore Our Comprehensive IT Consulting Services</h3>
          <div className="grad"></div>
          <p>
            Partner with Edstem Technologies and unlock the full potential of
            your IT infrastructure. Our team of experienced IT consultants will
            guide you every step of the way, providing comprehensive solutions
            tailored to your specific business needs. We'll help you:
          </p>
          <Row className=" m-5 p-2">
            <Col>
              <img src="https://imgs.search.brave.com/nru1P60HtGgipK5118_Aa6D0jIDXX6qWwnNe6RlGIvw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQx/NDkxNTc1NC9waG90/by9idXNpbmVzc21h/bi11c2luZy1hLWNv/bXB1dGVyLXRvLWJh/Y2t1cC1zdG9yYWdl/LWRhdGEtaW50ZXJu/ZXQtdGVjaG5vbG9n/eS1jb25jZXB0LWZv/ci1iYWNrdXAud2Vi/cD9iPTEmcz0xNzA2/NjdhJnc9MCZrPTIw/JmM9XzVBbWt6TEZi/alRYYkJjaThIMlBQ/X2NiWnExYm13MGhm/aDkzbFl6NVN3WT0"></img>
            </Col>
            <Col>
              <p>
                {" "}
                <h6> 
               
<BsArrowUpRight className="   m-2 bg-primary  "/>

IT Strategy Consulting</h6>
                Aligning your IT with your business goals. We help you develop
                and implement a comprehensive IT strategy that aligns with your
                business objectives, drives innovation, and maximizes your
                return on technology investments.
                <h6> <BsArrowUpRight className="   m-2 bg-primary  "/>
Cloud Consulting</h6>
                Unleashing the power of cloud technology. We guide you through
                the cloud journey, from strategy and planning to implementation
                and optimization, ensuring you harness the full potential of
                cloud computing to enhance agility, scalability, and
                cost-efficiency but also prioritize and integrate robust
                security measures into every facet of your cloud solutions.
                <h6> <BsArrowUpRight className="   m-2 bg-primary  "/>
Software Product Engineering</h6>
                Bringing your software ideas to life. We transform your software
                vision into tangible products that meet your business goals and
                exceed user expectations.
                <h6> <BsArrowUpRight className="   m-2 bg-primary  "/>
Application Development Consulting</h6>
                Crafting exceptional software solutions. We collaborate with you
                to design, develop, and implement custom-made applications that
                meet your specific business needs and deliver exceptional user
                experiences.
                <h6> <BsArrowUpRight className="   m-2 bg-primary  "/>
Cybersecurity Consulting</h6>
                Fortifying your digital defenses against cyber threats. We help
                you identify, assess, and mitigate cybersecurity risks,
                safeguard your sensitive data, and protect your business from
                evolving cyber threats.
                <h6> <BsArrowUpRight className="   m-2 bg-primary  "/>
IT Operations Consulting</h6>
                Optimizing your IT operations for peak performance. We help you
                streamline your IT processes, enhance productivity, and minimize
                downtime to ensure your IT infrastructure supports your business
                goals.
              </p>
            </Col>
          </Row>
        </Row>
        <Row className=" m-5 p-2">
          <h3>Technologies We Use</h3>
          <p>
            At Edstem, we leverage a sophisticated tech stack, cutting-edge
            programming languages, frameworks and cloud services to deliver
            innovative and scalable solutions tailored to meet the demands of
            the modern digital landscape.
          </p>
          <div className="grad"></div>
        </Row>
        <Row className=" m-5 p-2">
          <Col>
            <Row className=" m-5 p-2">
              <h5> <FaJava className="m-2 bg-light" />
Java</h5>
              <p>
                A versatile object-oriented programming language widely used for
                developing enterprise applications, web applications, and mobile
                applications.
              </p>
            </Row>
            <Row className=" m-5 p-2">
              <h5>Spring Boot</h5>
              <p>A Java framework that simplifies the development of web applications and provides a wide range of features for building RESTful APIs, web applications, and microservices</p>
            </Row> 
            <Row className=" m-5 p-2">
              <h5>React</h5>
              <p>A JavaScript library for building user interfaces, particularly known for its component-based approach and virtual DOM.</p>
            </Row> 
            <Row className=" m-5 p-2">
              <h5>Amazon Web Services</h5>
              <p>A leading cloud computing platform offering a wide range of services, including compute, storage, networking, databases, and analytics.</p>
            </Row>
          </Col> 
       <Col>  <Row className=" m-5 p-2">
            <h5>Python</h5>
            <p>A general-purpose programming language known for its simplicity, readability, and extensive libraries, making it popular for data science, machine learning, and web development.</p>
          </Row> 
          <Row className=" m-5 p-2">
            <h5>Fast API</h5>
            <p>A Python framework for building high-performance APIs that are easy to develop and maintain.</p>
          </Row> 
          <Row className=" m-5 p-2">
            <h5>Angular</h5>
            <p>A TypeScript framework for building web applications, popular for its enterprise-ready features and two-way data binding.</p>
          </Row> 
          <Row className=" m-5 p-2">
            <h5>Azure</h5>
            <p>A cloud computing platform from Microsoft that provides similar services to AWS.</p>
          </Row></Col> 
          <Col>
             
            <Row className=" m-5 p-2">
              <h5>JavaScript</h5>
              <p>A scripting language primarily used for web development, enabling interactive and dynamic web pages.</p>
            </Row> 
            <Row className=" m-5 p-2">
              <h5>Node Js</h5>
              <p>A JavaScript runtime environment that allows developers to build server-side JavaScript applications using asynchronous I/O.</p>
            </Row> 
            <Row className=" m-5 p-2">
              <h5>Apache Hadoop</h5>
              <p>An open-source framework for storing and processing large datasets in a distributed manner.</p>
            </Row> 
            <Row className=" m-5 p-2">
              <h5>Google Cloude Platform</h5>
              <p>A cloud computing platform from Google that offers a comprehensive suite of services for building and managing cloud applications.</p>
            </Row>
          </Col>
         
        </Row>
        <Row className=" m-5 p-2">
          <h3>Hear from Our Valued Customers</h3>
          <div className="grad"></div>
          <p>Discover the success stories from our satisfied clients, sharing their experiences on how we've been instrumental in their achievements.</p>
       
          <marquee> <IoLogoTwitter className="w-25 h-25" /> <IoLogoApple  className="w-25 h-25" />
          <IoLogoSkype className="w-25 h-25" />
<IoLogoTwitter className="w-25 h-25"  />  </marquee> </Row>
      </Container>
    </>
  );
};

export default Services;
