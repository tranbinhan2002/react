import React from 'react';
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import Category from './Category';
import Routdom from '../Router/Routedom';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Information from './Information';
import {
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav></Nav>
      <div className="container">
         <div className="row">
         <div className="col-lg-8">
         <Routdom></Routdom>
          </div>
          <div className="col-lg-4">
          <Category></Category>
          </div>
       </div>
      </div>
      <Information></Information>
      <Footer></Footer>
      <Link to="/cart"> <i className="fa fa-cart-plus cartfix" aria-hidden="true"></i></Link>
    </div>
    </Router>
  );
}

export default App;
