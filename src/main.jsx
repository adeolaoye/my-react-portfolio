import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Navigation />
      <Routes> 
        <Route path='/' exact element={<App />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
)
