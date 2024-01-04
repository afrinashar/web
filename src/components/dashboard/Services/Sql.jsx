import { Col, Container,Row } from 'react-bootstrap'
import sql from '../../../assets/ba.PNG'
const Analyst = () => {
 return (
   <><Container className='text-secondary'><Row><h1>Technical Bussiness Analyst</h1><div className='grad'></div></Row>
   <Row><Col className='float-start'> <img src= {sql} className='w-75'></img></Col>
   <Col ><p> Business analyst word cloud indicating some aspects of the business analys
    t profession (Flickr) A business analyst (BA) is a person who processes, interprets and do
    cuments business processes, products, services and software through analysis of data. The rol
    e of a business analyst is to ensure.
    Structured Query Language (SQL) is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing in a relational
    </p></Col></Row></Container></>
 )
}
export default Analyst