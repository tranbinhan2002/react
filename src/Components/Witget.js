import React, { Component } from 'react';
import DB from'../db/DBNews.json';
import ItemWitget from './Items/ItemWitget';



class Witget extends Component {
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
            <div>
                 <div className="row">
            {
                DB.map((value,key) => {
                  return (
                    <ItemWitget key={key} id={value.id} img={value.image} ></ItemWitget>
                  )
              })
            }
            </div>
            </div>
        );
    }
}

export default Witget;