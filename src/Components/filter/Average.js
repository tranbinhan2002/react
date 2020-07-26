import React, { Component } from 'react'
import DB from'./../../db/DBNews.json';
import Item from './../Items/Item';
import ImagePage from '../ImagePage';
export default class Average extends Component {
    render() {
        return (
            <div>
               <ImagePage>  </ImagePage>
            <div className="row">
            {
                DB.map((value,key) => {
                  if(value.price>50000 && value.price<100000)
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
        )
    }
}
