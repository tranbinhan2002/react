import React, { Component } from 'react';
import {
    Route,
  } from "react-router-dom";
import Detail from '../Components/Detail'; 
import News from '../Components/News';
import Police from '../Components/Police';
import Fashion from '../Components/Fashion';
import Home from '../Components/Home';
class routdom extends Component {
    render() {
        return (
      <div >
          <Route path="/home" component={Home}></Route>
          <Route path="/detail/:slug.:id.html" component={Detail}></Route>
          <Route path="/news" component={News}></Route>
          <Route path="/police" component={Police}></Route>
          <Route path="/fashion" component={Fashion}></Route>  
      </div>
        );
    }
}

export default routdom;