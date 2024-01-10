import { Col, Container,Row } from 'react-bootstrap'
import node from '../../../assets/node.PNG'
const Nodejs = () => {
 return (
   <><Container className='text-secondary'><Row><h1>Node JS Developer</h1><div className='grad'></div></Row>
   <Row><Col className='float-start'> <img src= {node} className='w-75'></img></Col>
   <Col ><p> Node.js is a cross-platform, ope
    n-source JavaScript runtime environment that can run on Windows, L
    inux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and execut
    es JavaScript code outside a web browser. Node.js lets developers use JavaScript to write 
    command line tools</p></Col></Row></Container></>
 )
}
export default Nodejs