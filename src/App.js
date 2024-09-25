import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import ProductDetails from './pages/ProductDetails.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Header from './components/Header.js';

function App () {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/login' element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default App;
