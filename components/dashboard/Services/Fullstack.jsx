import { Col, Container,Row } from 'react-bootstrap'
import fullstack from '../../../assets/fullstack.PNG'
const Fullstack = () => {
 return (
   <><Container className='text-secondary'><Row><h1>Fullstack Developer</h1><div className='grad'></div></Row>
   <Row><Col className='float-start'> <img src= {fullstack} className='w-75'></img></Col>
   <Col ><p> A full-stack developer is a programmer or engineer who can develop both the front-end and back-end of a website, web application, or computer program.3 They work on the front-end, back-end, database, and debugging of web applications or websites.1 Full-stack developers are involved with all aspects of the development process and must have expertise in both.  They work with UI/UX designers and web designers to create a seamless user experience through their diverse skill set. Full-stack developers are usually full-time employees who work in office environmentss</p></Col></Row></Container></>
 )
}
export default Fullstack