import { Row, Col, Container } from "react-bootstrap";
const ContactUs = () => {
  return (
    <>
      <Container className="text-secondary ">
        <Row>
          <Row>
            <Col>
              <h2>Contact Us</h2>
              <div className="grad"></div>
              <p>
                Transform your concepts into exceptional software solutions.
                Connect with us now, and let's embark on a journey to software
                success together. Our team of seasoned software engineers is
                passionate about creating innovative solutions that address
                real-world problems. We're always eager to take on new
                challenges and opportunities to make a difference and have a
                highly positive impact. Explore career opportunities and more by
                visiting Work With Us or mail your CV's to recruit@ssintek.com
              </p>
              <p>
                SSINTEK Technologies Pvt Ltd
                <br />
                D54, Second Floor 9A Cross Rd, <br />
                Thillai Nagar, Thiruchirappalli <br /> Tamil Nadu - 620 018
              </p>{" "}
              <a href="mailto:recruit@ssintek.com"> recruit@ssintek.com</a>
              <br /> <a href="tel:+918667068319">+91 8667068319</a>
            </Col>
            <Col>   <p>
              Ready to take the first step? Reach out to us via our contact
              form.{" "}
            </p>
            <form className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" id="name" />
              </div>{" "}
              <div className="col-md-6">
                <label className="form-label">Company Name</label>
                <input type="text" className="form-control" id="company" />
              </div>{" "}
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>{" "}
              <div className="col-md-6">
                <label className="form-label">Number</label>
                <input type="text" className="form-control" id="inputEmail4" />
              </div>{" "}
              <div className="col-md-12">
                <label className="form-label">Write your question</label>
                <textarea
                  type="textarea"
                  className="form-control"
                  id="inputEmail4"
                />
              </div>
              <button className="btn btn-primary sm" type="submit"> SUBMIT</button>
            </form>
           </Col>
          </Row>
          <Row className="border">
            <h3>What next?</h3>
            <h6>First Touchpoint</h6>
            Our experts will initiate the process by conducting a primary
            analysis of your requirements. Expect a call from us within 24 - 48
            business hours with more details.
            <h6>Requirement Analysis</h6>
            Our team will connect with you to gather and analyze all your
            project needs and expected capabilities, ensuring a clear
            understanding of your business objectives and expectations. We'll
            also assess your market segment for a comprehensive approach.
            <h6>Crafting Your Project Blueprint</h6>
            We will create a detailed project blueprint, providing you with the
            final project estimate and an actionable plan to propel the project
            forward.
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
