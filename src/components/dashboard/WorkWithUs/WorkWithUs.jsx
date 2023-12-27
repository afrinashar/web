import { Container, Row, Col } from "react-bootstrap";
import img from "../../../assets/img.png.svg";

const WorkWithUs = () => {
  return (
    <>
      <Container className="  text-secondary ">
        <Row>
          <img src="https://www.edstem.com/static/careers_hero_cover-c0545f61871626663b1ce8f78aacdc8e.png"></img>
        </Row>
        <Row>
          <h1>Life at SSINTEK</h1>
          <p>
            We're a bunch of enthusiastic, focused people with deep-rooted
            passion for our work, driven by a shared vision of success. At
            Edstem, we prioritise employee experience and wellbeing by nurturing
            a workplace that is inclusive and respectful. We let them explore
            new paths at their own speed — making sure they are constantly
            learning. The shared enthusiasm and thirst for innovation enable our
            employees to embrace the extraordinary and confront challenges as an
            ocean of opportunities. The visionary leadership provides support
            and guidance when needed to strike a balance between user needs and
            business goals. We expect that as each Edstemite evolves into the
            technologist they want to be, they will be delivering exceptional
            value to the clients along the way.
          </p>
        </Row>
        <Row>
          <Row className=" box">
            {" "}
            <h1>Benifits of working in SSINTEK</h1>
          </Row>
          <div className="h-5px md:h-9px lg:h- 12px  bg-primary "></div>
          <Row>
            <Col>
              <div className="p-3 mb-2 bg-gradient-primary text-white"> </div>
              <Col>
                <img src={img}></img> Competitive compensation
              </Col>{" "}
              <Col>
                <img src={img}></img> Rewards and Recognition
              </Col>{" "}
              <Col>
                <img src={img}></img>Avariety of wellness programs
              </Col>{" "}
            </Col>{" "}
            <Col>
              <Col>
                <img src={img}></img> insurence
              </Col>{" "}
              <Col>
                <img src={img}></img>Work-life balance
              </Col>{" "}
              <Col>
                <img src={img}></img> Learning & Development
              </Col>{" "}
            </Col>
          </Row>
        </Row>
        <Row>
          <h1>Inclusion ,Diversity & Equality</h1>
          <p>
            Embrace diversity, equality, and inclusion at Edstem Technologies
            for a workplace where innovation flourishes
          </p>
          <div className="d-flex flex-row">
            <img
              src="https://www.edstem.com/static/specilaities_cover-6e529b7f57cf801ecaaf6b7d0ad70d69.png"
              alt="image"
            ></img>
            <p>
              We wholeheartedly embrace the principles of Inclusion, Diversity,
              and Equality (IDE) as integral components of our organizational
              culture. We believe that fostering an environment where
              individuals of diverse backgrounds, experiences, and perspectives
              are valued and celebrated is not only a moral imperative but also
              a catalyst for innovation and success. Our commitment to IDE
              extends beyond mere acknowledgment; it is woven into the fabric of
              our company, influencing our hiring practices, workplace policies,
              and collaborative ethos. We prioritize work-life balance, ensuring
              that every team member feels heard, respected, and empowered to
              contribute their unique talents. By championing Inclusion,
              Diversity, Equality, and a healthy work-life balance, we aim to
              create a workplace that reflects the rich tapestry of the global
              community, driving creativity, excellence, and collective growth.
            </p>
          </div>{" "}
        </Row>
      </Container>{" "}
    </>
  );
};

export default WorkWithUs;
