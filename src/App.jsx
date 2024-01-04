 
import { Routes,Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/dashboard/About/About'
import LeaderShip from './components/dashboard/About/LeaderShip'
import NewsRoom from './components/dashboard/About/NewsRoom'
import Blogs from './components/dashboard/Blogs/Blogs'
import ContactUs from './components/dashboard/ContactUs/ContactUs'
import Service from './components/dashboard/Services/Service'
import Reactjs from './components/dashboard/Services/Reactjs';
import Nodejs from './components/dashboard/Services/Node';
import Services from './components/dashboard/Services/Services'
import WorkWithUs from './components/dashboard/WorkWithUs/WorkWithUs'
import Dashboard from './Dashboard';
import Events from './components/dashboard/Events/Events';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
function App() {
  
  return (
    <>
 <Header></Header>
 
      <Routes>
      <Route exact path="/aboutus"  element={<About/>} />  
      <Route exact path="/leadership"  element={<LeaderShip/>} />  
      <Route exact path="/newsroom"  element={<NewsRoom/>} />  
      <Route exact path="/blogs"  element={<Blogs/>} />  
      <Route exact path="/contactus"  element={<ContactUs/>} />   
      <Route exact path="/service"  element={<Service/>} />  
      <Route exact path="/service/react"  element={<Reactjs/>} /> 
      <Route exact path="/service/node"  element={<Nodejs/>} /> 
      <Route exact path="/services"  element={<Services/>} />  
      <Route exact path="/careers"  element={<WorkWithUs/>} />  
      <Route exact path="/events"  element={<Events/>} /> 
        </Routes> 
        <Footer />
    </>
  )
}

export default App
