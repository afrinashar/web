 
import { Routes,Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/dashboard/About/About'
import LeaderShip from './components/dashboard/About/LeaderShip'
import NewsRoom from './components/dashboard/About/NewsRoom'
import Blogs from './components/dashboard/Blogs/Blogs'
import ContactUs from './components/dashboard/ContactUs/ContactUs'
import Service from './components/dashboard/Services/service'
import Reactjs from './components/dashboard/Services/Reactjs';
import Oracle from './components/dashboard/Services/Oracle';
import Analyst  from './components/dashboard/Services/Analyst';
import Aws from './components/dashboard/Services/Aws';
import  Fullstack  from './components/dashboard/Services/Fullstack';
import Dotnet from './components/dashboard/Services/Dotnet';
import Hrms from './components/dashboard/Services/Hrms';
import Java from './components/dashboard/Services/Java';
import Nodejs from './components/dashboard/Services/Node';
import Python from './components/dashboard/Services/Python';
import Selinium from './components/dashboard/Services/Selinium';
import Sql from './components/dashboard/Services/sql'
import WorkWithUs from './components/dashboard/WorkWithUs/WorkWithUs'
//import Dashboard from './Dashboard';
import Events from './components/dashboard/Events/Events';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
function App() {
  
  return (
    <>
 <Header></Header>
 
      <Routes>
      <Route exact path="/"  element={<About/>} />  
      <Route exact path="/leadership"  element={<LeaderShip/>} />  
      <Route exact path="/newsroom"  element={<NewsRoom/>} />  
      <Route exact path="/blogs"  element={<Blogs/>} />  
      <Route exact path="/contactus"  element={<ContactUs/>} />   
      <Route exact path="/service"  element={<Service/>} />  
      <Route exact path="/service/react"  element={<Reactjs/>} /> 
      <Route exact path="/service/node"  element={<Nodejs/>} /> 
      <Route exact path="/service/sql"  element={<Sql/>} />  
      <Route exact path="/service/aws"  element={<Aws/>} /> 
      <Route exact path="/service/dotnet"  element={<Dotnet/>} /> 
      <Route exact path="/service/fullstack"  element={<Fullstack/>} /> 
      <Route exact path="/service/hrms"  element={<Hrms/>} /> 
      <Route exact path="/service/java"  element={<Java/>} /> 
      <Route exact path="/service/node"  element={<Nodejs/>} /> 
      <Route exact path="/service/python"  element={<Python/>} /> 
      <Route exact path="/service/selinium"  element={<Selinium/>} /> 
      <Route exact path="/service/oracle"  element={<Oracle/>} /> 
      <Route exact path="/service/analyst"  element={<Analyst/>} /> 
      <Route exact path="/careers"  element={<WorkWithUs/>} />  
      <Route exact path="/events"  element={<Events/>} /> 
        </Routes> 
        <Footer />
    </>
  )
}

export default App
