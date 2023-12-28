import { Container, Row, Col } from "react-bootstrap";
import img from "../../../assets/img.png.svg";
import { LiaAwardSolid } from "react-icons/lia";
import { GiLifeBar } from "react-icons/gi";
import { GrInProgress } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";
import { GiThreeLeaves } from "react-icons/gi";
import { SiNintendogamecube } from "react-icons/si";

const WorkWithUs = () => {
  return (
    <>
      <Container className="  text-secondary ">
        <Row>
          <img src="https://imgs.search.brave.com/1D2iEivrSfdtlJLLwUZGb-2JL_Q5P7OIo8bdae8V0Gw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ldS1p/bWFnZXMuY29udGVu/dHN0YWNrLmNvbS92/My9hc3NldHMvYmx0/NjY5ODM4MDhhZjM2/YThlZi9ibHQ0ZDMw/NDMxNDlhMzQ1Y2Jh/LzYwZTJlMGUwMjg4/NTMzMjJjNTg2ZDk1/My9BZ2lsZVRlYW1z/LWZpemtlcy1hZG9i/ZS1DUC5qcGc_cXVh/bGl0eT04MCZmb3Jt/YXQ9anBnJndpZHRo/PTY5MA"></img>
        </Row>
        <Row>
          <h1>Life at SSINTEK</h1>
          <div className="grad"></div>
          <p>
           {` We're a bunch of enthusiastic, focused people with deep-rooted
            passion for our work, driven by a shared vision of success. At
            SSINTEK, we prioritise employee experience and wellbeing by nurturing
            a workplace that is inclusive and respectful. We let them explore
            new paths at their own speed — making sure they are constantly
            learning. The shared enthusiasm and thirst for innovation enable our
            employees to embrace the extraordinary and confront challenges as an
            ocean of opportunities. The visionary leadership provides support
            and guidance when needed to strike a balance between user needs and
            business goals. We expect that as each SSINTEKite evolves into the
            technologist they want to be, they will be delivering exceptional
            value to the clients along the way.`}
          </p>
        </Row>
        <Row>
          <Row className=" box d-flex align-items-center m-5">
            {" "}
            <h1>Benifits of working in SSINTEK</h1>
       
          </Row>
          
          <Row>
            <Col>
              <div className="p-3 mb-2 bg-gradient-primary text-white"> </div>
              <Col>
          <p>   <SiNintendogamecube className="m-2 bg-light border border-primary" />
 Competitive compensation
            </p>   </Col>{" "}
              <Col>
            <p> <LiaAwardSolid className="m-2 bg-light border border-primary" /> Rewards and Recognition
              </p> </Col>{" "}
              <Col>
            <p>  <GrInProgress className="m-2 bg-light border border-primary" />
Avariety of wellness programs</p>
              </Col>{" "}
            </Col>{" "}
            <Col>
              <Col>
              <p><GiThreeLeaves className="m-2 bg-light border border-primary" />   insurence</p> 
              </Col>{" "}
              <Col>
             <p> 
<GiLifeBar className="m-2 bg-light border border-primary"/>Work-life balance</p>
              </Col>{" "}
              <Col>
            <p> <FaComputer className="m-2 bg-light border border-primary" />
  Learning & Development</p> 
              </Col>{" "}
            </Col>
          </Row>
        </Row>
        <Row>
          <h1>Inclusion ,Diversity & Equality</h1>
          <div className="grad"></div>
          <p>
            Embrace diversity, equality, and inclusion at SSINTEK Technologies
            for a workplace where innovation flourishes
          </p>
          <div className="d-flex flex-row">
            <img
              src="https://imgs.search.brave.com/VtZ46s1Z7XfQRmJ_Vsct5i5rMNWjOrTa2HCRdo9cCMc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0M1/NjEyQVFHNnhPMk1G/aHBKYmcvYXJ0aWNs/ZS1jb3Zlcl9pbWFn/ZS1zaHJpbmtfNjAw/XzIwMDAvMC8xNTIw/MTQwODQ1Mzk0P2U9/MjE0NzQ4MzY0NyZ2/PWJldGEmdD0zaTI5/c3c1elFBWWdtTldn/UHZmWjJGTml2S0Zy/SHY3czdUVm04OGJz/U0tJ"
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
