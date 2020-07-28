import React, { Component } from 'react';
import {
  NavLink, Link
} from "react-router-dom";
import DB from'./../db/DBNews.json';
import Witget from './Witget';
class Category extends Component {
  constructor(props) {
    super(props);
    this.state ={
      tempValue:'',
      data:DB,
      searchText:''
    }
  }
  

  isChange =(event)=>{
    console.log(event.target.value)
    this.setState({
      tempValue:event.target.value
    });
  }

  getTextSearch=(dl)=>{
    this.setState({
      searchText:dl
    });
  }
 

    render() {
      var result = [];
      this.state.data.forEach((item)=>{
          if(item.title.indexOf(this.state.searchText) !== -1)
          {
            result.push(item);
          }
      });
        return (
            <div >
            {/* Search Widget */}
            <div className="card my-4">
              <h5 className="card-header">Search</h5>
              <div className="card-body">
                <div className="input-group">
                  <input type="text" className="form-control" onChange={(event)=>this.isChange(event)} placeholder="Search for..." />
                  <span className="input-group-append">
                    <button className="btn btn-secondary"onClick={(dl)=>this.getTextSearch(this.state.tempValue)} type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
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
                      <NavLink to="/home" activeStyle={{ fontWeight: "bold", color: "red"}}>Home</NavLink>
                      </li>
                      <li>
                      <NavLink to="/news" activeStyle={{ fontWeight: "bold", color: "blue"}}>Lamborgini</NavLink>
                      </li>
                     
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                      <NavLink to="/police" activeStyle={{ fontWeight: "bold", color: "blue"}}>Rover</NavLink>
                      </li>
                      <li>
                      <NavLink to="/fashion" activeStyle={{ fontWeight: "bold", color: "blue"}}>BMW</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="card my-4">
              <h5 className="card-header">filter products</h5>
              <div className="card-body">
              <li>
              <NavLink to="/low" activeStyle={{ fontWeight: "bold", color: "yellow"}}>10000$ - 50000$</NavLink>
              </li>
              <li>
              <NavLink to="/average" activeStyle={{ fontWeight: "bold", color: "yellow"}}>50000$ - 100000$</NavLink>
              </li>
              <li>
              <NavLink to="/expensive" activeStyle={{ fontWeight: "bold", color: "yellow"}}><i className="fa fa-chevron-right" aria-hidden="true"></i> 100000$</NavLink>
              </li>
              </div>
            </div>
            {/* Side Widget */}
            <div className="card my-4">
              <h5 className="card-header">Side Widget</h5>
              <div className="card-body">
               <Witget></Witget>
              </div>
            </div>
            <div className="card my-4">
              <div className="card-body add">
                <Link to="/add" className="addproduct"><i className="fa fa-plus-circle" aria-hidden="true"></i> Add New</Link>
              </div>
            </div>
            <div className="card my-4">
              <div className="card-body admin">
                <Link to="/admin" className="addproduct"><i className="fa fa-plus-circle" aria-hidden="true"></i> AdminManager</Link>
              </div>
            </div>
            <div className="card my-4">
              <div id="map">
              <iframe title="ifreame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4786145912108!2d106.75574501428758!3d10.851155160778305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527bd532d45d9%3A0x6b46595d312dcffe!2zNTMgVsO1IFbEg24gTmfDom4sIExpbmggQ2hp4buDdSwgVGjhu6cgxJDhu6ljLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1595300605330!5m2!1svi!2s"    aria-hidden="false"></iframe>
              </div>
            </div>
              <div id="code">
              <img className="d-block img-fluid" src="https://giadinh.mediacdn.vn/2017/v3-1490286612318.png" alt="First slide"/>
            </div>
          </div> 
                  
        );
    }
}

export default Category;
