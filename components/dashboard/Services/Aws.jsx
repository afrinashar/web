import { Col, Container,Row } from 'react-bootstrap'
import aws from '../../../assets/aws.PNG'
const Aws = () => {
 return (
   <><Container className='text-secondary'><Row><h1> AWS Devops and Terraform Developers</h1><div className='grad'></div></Row>
   <Row><Col className='float-start'> <img src= {aws} className='w-75'></img></Col>
   <Col ><p> AWS provides a set of flexible services designed to enable companies to more rapidly and reliably build and deliver products using AWS and DevOps practices. These services simplify provisioning and managing infrastructure, deploying application code, automating software release processes. A Terraform developer is a highly skilled individual who can efficiently code for building and versioning infrastructure against multi-cloud. Terraform is an infrastructure as code tool that lets you define both cloud and on-prem resources in human-readable configuration files that you can version, reuse, and share.It includes low-level components like compute instances, storage, and networking, as well as high-level components like DNS entries and SaaS features.0 HashiCorp Developer AI private beta is now available, allowing you to use a consistent workflow to provision and manage all of your infrastructure throughout its lifecycle. Turing offers Silicon Valley-caliber Terraform developers on-demand.</p></Col></Row></Container></>
 )
}
export default  Aws