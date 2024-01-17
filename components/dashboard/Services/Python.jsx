import { Col, Container,Row } from 'react-bootstrap'
import python from '../../../assets/django.PNG'
const Nodejs = () => {
 return (
   <><Container className='text-secondary'><Row><h1>Python Django Developer</h1><div className='grad'></div></Row>
   <Row><Col className='float-start'> <img src= {python} className='w-75'></img></Col>
   <Col ><p> Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural)</p></Col></Row></Container></>
 )
}
export default Nodejs