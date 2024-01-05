import { Col, Container,Row } from 'react-bootstrap'
import selinium  from '../../../assets/selinium.PNG'
const Selinium = () => {
 return (
   <><Container className='text-secondary'><Row><h1>Selinium Developer</h1><div className='grad'></div></Row>
   <Row><Col className='float-start'> <img src= {selinium} className='w-75'></img></Col>
   <Col ><p>Selenium is an open source umbrella project for a range of tools and libraries aimed at supporting browser automation. It provides a playback tool for authoring functional tests across most modern web browsers, without the need to learn a test scripting language (Selenium IDE).</p></Col></Row></Container></>
 )
}
export default Selinium