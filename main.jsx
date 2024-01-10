import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './custom.scss'
import { BrowserRouter } from 'react-router-dom'
//import About from './components/dashboard/About/About.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>  <React.StrictMode>
    <App />
  </React.StrictMode></BrowserRouter>,
)
