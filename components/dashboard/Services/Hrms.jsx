import { Col, Container,Row } from 'react-bootstrap'
import hrms from '../../../assets/hrms.PNG'
const Hrms = () => {
 return (
   <><Container className='text-secondary'><Row><h1>HRMS  Developers</h1><div className='grad'></div></Row>
   <Row><Col className='float-start'> <img src= {hrms} className='w-75'></img></Col>
   <Col ><p>HRMS Software Development, Implementation & Integration Services providing end-to-end HR software for payroll, compliance, and more.</p></Col></Row></Container></>
 )
}
export default Hrms