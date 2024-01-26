
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import './App.css';
import Home from './pages/home';
import Create from './pages/create';
import About from './pages/about';
import Admin from './pages/admin';
import Display from './pages/display';
import Item from './pages/item';
import Detail from './pages/detail';
import Product from './pages/product';
import Register from './pages/register';
import BiddingCart from './pages/BiddingCart';
import GradientBackground from './components/GradientBackground';
import Navbar from './components/navbar';
import Footer from './components/footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    
    <Router>
    <div className="App">

      <Navbar/>

      <GradientBackground>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/display' element={<Display/>}></Route>
        <Route path='/item/:auctionId' element={<Item/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/biddingcart' element={<BiddingCart/>}></Route>
        <Route path="/details/:auctionId" element={<Detail/>}></Route>
        <Route path="/items/:itemId" element={<Product/>}></Route>
        
      </Routes>

      </GradientBackground>

      <Footer/>


    </div>
    </Router>
    
  );
}

export default App;
