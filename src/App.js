import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Home from './pages/home';
import Create from './pages/create';
import Display from './pages/display';
import Item from './pages/item';
import Detail from './pages/detail';
import Product from './pages/product';
import DeleteAuction from './components/DeleteAuction';
import EditAuction from './components/EditAuction';
import GradientBackground from './components/GradientBackground';
import Navbar from './components/navbar';
import Footer from './components/footer';


function App () {

    return (
      <div>
        <Router>
          
    <div className="App">

      <Navbar/>

      <GradientBackground>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/display' element={<Display/>}></Route>
        <Route path='/item/:auctionId' element={<Item/>}></Route>
        <Route path="/details/:auctionId" element={<Detail/>}></Route>
        <Route path="/items/:itemId" element={<Product/>}></Route>
        <Route path='/editauction/:auctionId' element={<EditAuction/>}></Route>
        <Route path='/deleteauction/:auctionId' element={<DeleteAuction/>}></Route>
        
      </Routes>

      </GradientBackground>

      <Footer/>


    </div>
    </Router>
    </div>
    
  );
}


export default App;
