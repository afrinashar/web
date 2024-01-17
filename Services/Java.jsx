import { Col, Container,Row } from 'react-bootstrap'
import java from '../../../assets/java.PNG'
const Java = () => {
 return (
   <><Container className='text-secondary'><Row><h1>Java Developer</h1><div className='grad'></div></Row>
   <Row><Col className='float-start'> <img src= {java} className='w-75'></img></Col>
   <Col ><p> Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run</p></Col></Row></Container></>
 )
}
export default Java