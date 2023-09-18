import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Projects from './pages/Projects'
import Header from './components/Header.jsx'
import Contact from './pages/Contact'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Header />
      <Routes> 
        <Route path='/' exact element={<App />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
  </BrowserRouter>
)
