  import { Col, Container,Row } from 'react-bootstrap'
import analyst from '../../../assets/ba.JPG'
const Analyst = () => {
 return (
   <><Container className='text-secondary'><Row><h1>Technical Bussiness Analyst</h1><div className='grad'></div></Row>
   <Row><Col className='float-start'> <img src= {analyst} className='w-75'></img></Col>
   <Col ><p> Business analyst word cloud indicating some aspects of the business analyst profession (Flickr) A business analyst (BA) is a person who processes, interprets and documents business processes, products, services and software through analysis of data. The role of a business analyst is to ensure</p></Col></Row></Container></>
 )
}
export default Analyst