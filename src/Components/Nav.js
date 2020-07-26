import React, { Component } from 'react';
import {
  Link,
} from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <Link to="/home" className="navbar-brand" > <img className=" img-fluid logo" src="https://static.danhgiaxe.com/data/201525/6-bmw-i8-the-bmw-i8-looks-like-no-other-car-on-the-road-today_3295.jpg" alt="First slide"/></Link>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                <div className="nameShop">CAR STORE</div>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link" >Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>          
        );
    }
}

export default Nav;