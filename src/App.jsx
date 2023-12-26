 
import { Routes,Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/dashboard/About/About'
import LeaderShip from './components/dashboard/About/LeaderShip'
import NewsRoom from './components/dashboard/About/NewsRoom'
import Blogs from './components/dashboard/Blogs/Blogs'
import ContactUs from './components/dashboard/ContactUs/ContactUs'
import ItConsulting from './components/dashboard/Services/ItConsulting'
import Services from './components/dashboard/Blogs/Blogs'
import WorkWithUs from './components/dashboard/WorkWithUs/WorkWithUs'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
function App() {
  
  return (
    <>
    <Header></Header>
    <h1>app</h1>
      <Routes>
      <Route exact path="/about "  element={<About/>} />  
      <Route exact path="/leadership "  element={<LeaderShip/>} />  
      <Route exact path="/newsroom "  element={<NewsRoom/>} />  
      <Route exact path="/blogs "  element={<Blogs/>} />  
      <Route exact path="/contactus "  element={<ContactUs/>} />   
      <Route exact path="/itconsulting "  element={<ItConsulting/>} />  
      <Route exact path="/services "  element={<Services/>} />  
      <Route exact path="/workwithus "  element={<WorkWithUs/>} />  
        </Routes> 
        <Footer/>
    </>
  )
}

export default App
