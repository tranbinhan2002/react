import React, { Component } from 'react';
import DB from'../../db/DBNews.json';
import { v1 as uuidv1 } from 'uuid';
import { Link } from 'react-router-dom';
class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:DB,
            id:0,
            title:"",
            image:"",
            description:"",
            price:0,
            type:0
        }
    }
    
    isChagne= (event)=>{
        const name = event.target.name;
        const value = event.target.value; 
        this.setState({
            [name]:value
        }) 
    }
    getNewData = (title,description,image,price,type)=>{
      var item = {};
      item.id = uuidv1();
      item.title = title;
      item.description = description;
      item.image = image;
      item.price = price;
      item.type = type;
      var items= this.state.data;
      items.push(item);
      this.setState({
        data:items
      });
       alert("add successfully");
    }

    render() {
        return (
            <div className="jumbotron">
              <form>
  <div className="container text-center">
    <h1 className="display-3">Add New</h1>
    <hr className="my-2" />
    <div className="form-group text-left">
      <h3>Title</h3>
      <input type="text" onChange={(event)=> this.isChagne(event)} className="form-control" name="title"   aria-describedby="helpId"  />
      <h3>Description</h3>
      <input type="text" onChange={(event)=> this.isChagne(event)} className="form-control" name="description"  aria-describedby="helpId"  />
      <h3>Price</h3>
      <input type="text" onChange={(event)=> this.isChagne(event)} className="form-control"  name="price" aria-describedby="helpId" />
      <h3>Image</h3>
      <input type="text" onChange={(event)=> this.isChagne(event)} className="form-control"  name="image" aria-describedby="helpId"  />
      <div className="form-group">
        <h3>Type</h3>
        <select onChange={(event)=> this.isChagne(event)} className="form-control" name="type">
          <option value={1}>Lamborgini</option>
          <option value={2}>Rover</option>
          <option value={3}>BMW</option>
        </select>
      </div>
      <div className="form-group">
        <Link to ="/home"><input type="reset" onClick={(title,description,image,price,type)=>this.getNewData(this.state.title,this.state.description,this.state.image,this.state.price,this.state.type)} className="btn btn-block btn-primary" value="add new"/></Link>
      </div>
    </div>
  </div>
  </form>
</div>

        );
    }
}

export default AddProduct;