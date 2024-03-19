import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './component/ScrollToTop'
import HomePage from './pages/homepage/HomePage'
import Navbar from './component/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from './pages/login/Login'

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <ToastContainer />
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
