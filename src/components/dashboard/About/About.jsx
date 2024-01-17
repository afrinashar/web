 

const About = () => {
  return (
    <>
    
      {/* <div>   <video  className ="fluid w-100 opacity-100"src={video} autoPlay loop muted fluid/>
<Typewriter
className="mb-5"
                onInit={(typewriter) => {
                    typewriter
                        .typeString("GeeksForGeeks")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcomes You")
                        .start();
                }}
            /></div> */}
<div className="  m-0">
<img src={about} className="w-100 "></img> <CardImgOverlay className=" cards text-secondary">   <Row className=" m-5 p-2">
          <h3>Our Vision</h3>
          <div className="grad"></div><p>Be a valuable pa
            rtner to our customers by providing the right solution.</p></Row>
            <Row className=" m-5 p-2">
          <h3>Our Mission</h3>
          <div className="grad"></div><p>To develop perfectly engineered solutions that would put our customer's business on the cutting edge by delivering quality solutions on time, every time.</p></Row>
     </CardImgOverlay></div>

      <Container className="text-secondary p-5">
        <Row className=" m-5 p-2">
          <h3>The Beginning and The Growth</h3>
          <div className="grad"></div>
          <Col>
            <img src="https://imgs.search.brave.com/oG1HVYkTn6BoXHC2LmkV0CGQA42C6vw7HEIlotJkBCg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by95b3VuZy1idXNp/bmVzcy1wZW9wbGUt/c2l0dGluZy1tZWV0/aW5nLXRhYmxlLWNv/bmZlcmVuY2Utcm9v/bS1kaXNjdXNzaW5n/LXdvcmstcGxhbm5p/bmctc3RyYXRlZ3lf/NTIxMzctMzU1NTIu/anBnP3NpemU9NjI2/JmV4dD1qcGc"></img>
          </Col>
          <Col>
            <p>
              SSINTEK is the emerging software services company, which provides
              end-to-end business solutions that leverage technology. We provide
              solutions for a dynamic environment where business and technology
              strategies converge. Our approach focuses on new ways of business
              combining IT innovation and adoption while also leveraging an
              organization's current IT assets. We work with large global
              corporations and new generation technology companies to build new
              products and services and to implement prudent business and
              technology strategies in today's dynamic digital age. <br />{" "}
              <button className="btn btn-primary m-2 text-secondary ">
                {" "}
                Meet our Team{" "}
              </button>
            </p>
          </Col>
        </Row>
  <div className="overlay">      </div>  <Row>
        
          {" "}
          <ul className="d-flex list-unstyled m-3 p-5 d-flex justify-content-around">
            {" "}
            <li>
              <h2>
                {" "}
                project <CountUp end={198} duration={5} />{" "}
              </h2>
            </li>
            <li className="d-flex flex-column">
              <h2>
                {" "}
                clients <CountUp end={10045} duration={5} />
              </h2>
            </li>
            <li>
              <h2>
                {" "}
                employee <CountUp end={14} duration={5} />
              </h2>
            </li>
          </ul>
        </Row>
        
        {/*  <Row className=" m-5 p-2">
          <h2>Who we are</h2>
          <p>
            Unlock a world of advantages when you choose  SSINTEK for software
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
        </Row> */}
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
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
          <div className="grad"></div>
          <ul className=" d-flex flex-row justify-content-between list-unstyled">
            <li>Consult and Conceptualize</li>
            <li>Architecting the solution</li>
            <li>Visualize the solution</li>
            <li>Agile Development</li>
          </ul>
          <ul className=" d-flex flex-row justify-content-between list-unstyled">
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
          </ul>
          <div className="grad"></div>
          <ul className=" d-flex flex-row justify-content-between list-unstyled">
            <li>
              Continuous Monitoring <br />
              and Performance Engineering
            </li>
            <li>Quality Assurance</li>
            <li>Product Delivery</li>
            <li> Support and maintenance</li>
          </ul>{" "}
        </Row>
        <h1 className="text-primary gradient ">
          Our commitment
           to clients,
          <br /> communities and  
          each other
        </h1>
        <Container>
          <Row className="g-3 ">
             
          
              <div className="card cards m-5 w-25 h-50 logo text-secondary">
                
                <img src={talent}></img>
                <CardImgOverlay className="d-flex  flex-column justify-content-center align-items-center">
                  <h3>Talent</h3>
                  <p>
                    As a talent-led organization, we invest in our people and
                    support them with care, compassion, and continuous
                    opportunities to learn, grow their skills, and advance their
                    careers.​
                  </p>
                </CardImgOverlay>
              </div>
           
            
              <div className="card cards m-5 w-25 h-50 logo fluid text-secondary">
                {" "}
                <img src={sustain} className="fluid"></img>
                <CardImgOverlay className="d-flex  flex-column justify-content-center align-items-center">
                  <h3>Sustainability</h3>{" "}
                  <p>
                    {" "}
                    In addition to advancing our own environmental goals, we
                    work with our clients to embed sustainability across their
                    businesses and innovate with our people and partners to
                    support communities.​​
                  </p>
                </CardImgOverlay>
              </div>
         
           
              <div className="card cards m-5 w-25 h-50 logo text-secondary">
                {" "}
                <img src={diversity}></img>
                <CardImgOverlay className="d-flex  flex-column justify-content-center align-items-center">
                  <h3>Inclusion & Diversity</h3> 
                  <p>
                  
                    Inclusion and diversity are embedded in everything we do and
                    are key enablers of our business results. We believe they’re
                    essential for both accessing talent and unleashing
                    innovation. ​
                  </p>
                </CardImgOverlay>
              </div>
        
           
              <div className="card cards m-5 w-25 h-50 logo text-secondary">
                {" "}
                <img src={client}></img>
                <CardImgOverlay className="d-flex  flex-column justify-content-center align-items-center">
                  <h3>Client</h3> 
                  <p className="cards">
               
                    We work with many of the world’s leading companies and
                    governments to navigate change, seize opportunities and
                    transform them into thriving organizations and create
                    tangible value.​​
                  </p>
                </CardImgOverlay>
              </div>
     
       
              <div className="card cards m-5  w-25 h-50 logo text-secondary">
                {" "}
                <img src={experience}></img>
                <CardImgOverlay className="d-flex  flex-column justify-content-center align-items-center">
                  <h3>Experience</h3> 
                  <p>
        
                    Whether it’s for our people, our clients or ecosystem
                    partners, we strive to deliver on our enduring value
                    proposition while creating 360° value for our stakeholders.​
                  </p>
                </CardImgOverlay>
              </div>
            
              {" "}
              <div className="card m-5 cards w-25 h-50 logo text-secondary">
                {" "}
                <img src={finance}></img>
                <CardImgOverlay className="d-flex  flex-column justify-content-center align-items-center">
                  <h3>Finance</h3> 
                  <p>
                    Our strong financial performance, while continuing to invest
                    in our business and people, is a testament to our ability to
                    create enduring 360° value for all our stakeholders–clients,
                    people, shareholders, partners and communities.​
                  </p>
                </CardImgOverlay>
              </div>
           
          </Row>

          <Row className=" d-flex align-items-center m-5 p-4  bg-secondary text-light">
            {" "}
            <Col>
              <h3>
                Get a Tailored Quote
                <h4>for Your Tech Needs</h4>
              </h3>
            </Col>
            <Col>
              Ready to get a clear picture of the investment needed for our
              top-notch tech services? Simply fill out our quote request form,
              and our team will provide you with a personalized qu ote.
            </Col>
            <Col>
              <Link to="/contactus" className="btn btn-light">Contact Us</Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default About;
    <><div className="grad"></div></>
  )
}

export default About
