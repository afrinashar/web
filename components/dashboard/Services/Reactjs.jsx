 import { Col, Container,Row } from 'react-bootstrap'
 import react from '../../../assets/react.JPG'
 const Reactjs = () => {
  return (
    <><Container className='text-secondary'><Row><h1>React JS Developer</h1><div className='grad'></div></Row>
    <Row><Col> <img src= {react}></img></Col>
    <Col><p>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used to develop single-page, mobile, </p></Col></Row></Container></>
  )
}
export default Reactjs
