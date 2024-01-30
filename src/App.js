import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import axios from 'axios';
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
import Login from './components/Login';
import Signup from './components/Logup';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }

  componentDidMount() {
    this.loginStatus();
  }

  loginStatus = () => {
    axios.get('http://localhost:3000/logged_in', { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response);
        } else {
          this.handleLogout();
        }
      })
      .catch(error => console.log('api errors:', error));
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    });
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    });
  }

  render() {
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
        <Route path='/about' element={<About/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/biddingcart' element={<BiddingCart/>}></Route>
        <Route path="/details/:auctionId" element={<Detail/>}></Route>
        <Route path="/items/:itemId" element={<Product/>}></Route>
        <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
        
      </Routes>

      </GradientBackground>

      <Footer/>


    </div>
    </Router>
    </div>
    
  );
}
}

export default App;
