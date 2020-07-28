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
        <div className="menu">

          <ul>
            <li> <Link to="/cart"> <i className="fa fa-cart-plus fixcart" aria-hidden="true"></i></Link>
              <ul>
                <li>Cart</li>
              </ul>
            </li>
            <li><i className="fa fa-envelope-open-o" ></i>
              <ul>
                <li>letters</li>
              </ul>
            </li>
            <li><i className="fa fa-camera"></i>
              <ul>
                <li>Camera</li>
              </ul>
            </li>
            <li><i className="fa fa-comments-o" aria-hidden="true"></i>
              <ul>
                <li>Feedback</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
