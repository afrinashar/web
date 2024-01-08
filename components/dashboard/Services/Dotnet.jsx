import { Col, Container,Row } from 'react-bootstrap'
import dotnet from '../../../assets/dotnet.JPG'
const Dotnet = () => {
 return (
   <><Container className='text-secondary'><Row><h1>DotNet Developers Developer</h1><div className='grad'></div></Row>
   <Row><Col className='float-start'> <img src= {dotnet} className='w-75'></img></Col>
   <Col ><p>The .NET platform (pronounced as "dot net") is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems. The project is mainly developed by Microsoft employees by way of the .NET Foundation and is released under an MIT License</p></Col></Row></Container></>
 )
}
export default Dotnet