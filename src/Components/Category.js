import React, { Component } from 'react';
import {
  NavLink,
} from "react-router-dom";

class Category extends Component {
    render() {
        return (
            <div >
            {/* Search Widget */}
            <div className="card my-4">
              <h5 className="card-header">Search</h5>
              <div className="card-body">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search for..." />
                  <span className="input-group-append">
                    <button className="btn btn-secondary" type="button">Go!</button>
                  </span>
                </div>
              </div>
            </div>
            {/* Categories Widget */}
            <div className="card my-4">
              <h5 className="card-header">Categories</h5>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-unstyled mb-0">
                    <li>
                      <NavLink to="/home"activeStyle={{ fontWeight: "bold", color: "blue"}}>Home</NavLink>
                      </li>
                      <li>
                      <NavLink to="/news"activeStyle={{ fontWeight: "bold", color: "blue"}}>News</NavLink>
                      </li>
                     
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                      <NavLink to="/police"activeStyle={{ fontWeight: "bold", color: "blue"}}>Police</NavLink>
                      </li>
                      <li>
                      <NavLink to="/fashion"activeStyle={{ fontWeight: "bold", color: "blue"}}>Fashion</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Side Widget */}
            <div className="card my-4">
              <h5 className="card-header">Side Widget</h5>
              <div className="card-body">
                You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
              </div>
            </div>
          </div>          
        );
    }
}

export default Category;
