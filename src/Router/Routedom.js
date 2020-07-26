import React, { Component } from 'react';
import {
    Route,
  } from "react-router-dom";
import Detail from '../Components/Detail'; 
import News from '../Components/News';
import Police from '../Components/Police';
import Fashion from '../Components/Fashion';
import Home from '../Components/Home';
import Add from '../Components/Admin/AddProduct';
import Admin from '../Components/Admin/ManagerAdmin';
import Cart from '../Components/Cart';
import Low from '../Components/filter/Low';
import Average from '../Components/filter/Average';
import Expensive from '../Components/filter/Expensive';
class routdom extends Component {
    render() {
        return (
      <div >
          <Route path="/home" component={Home}></Route>
          <Route path="/detail/:slug.:id.html" component={Detail}></Route>
          <Route path="/news" component={News}></Route>
          <Route path="/police" component={Police}></Route>
          <Route path="/fashion" component={Fashion}></Route>
          <Route path="/add" component={Add}></Route>
          <Route path="/admin" component={Admin}></Route> 
          <Route path="/cart" component={Cart}></Route>
          <Route path="/low" component={Low}></Route> 
          <Route path="/average" component={Average}></Route>
          <Route path="/expensive" component={Expensive}></Route>           
      </div>
        );
    }
}

export default routdom;