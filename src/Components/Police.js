import React, { Component } from 'react';
import ImagePage from '../Components/ImagePage';
import DB from'./../db/DBNews.json';
import Item from './Items/Item';
class Police extends Component {
    render() {
        return (
            <div>
              <ImagePage></ImagePage>
            <div className="row">
            {
                DB.map((value,key) => {
                  if(value.type===2)
                  {
                  return (
                    <Item key={key} id={value.id} img={value.image} title={value.title} description={value.description.substring(0,50)+" [...]"} price={value.price}></Item>
                  )
                  }
                  return true;
              })
            }
            </div>
            </div>
        );
    }
}

export default Police;