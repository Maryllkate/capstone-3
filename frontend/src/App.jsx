import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'

import './App.css'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/cart'
import Signup from './pages/signup'


function App() {

  return (

    <Router>
        <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/signup" element={<Signup />}/>
          
        </Routes>
      </Container>
    </Router>

    
    
  )
};

export default App;
