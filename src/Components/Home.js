import React, { Component } from 'react';
import DB from'./../db/DBNews.json';
import Item from './Items/Item';
import ImagePage from '../Components/ImagePage';
class Home extends Component {
    render() {
        return (
            <div>
              <ImagePage > </ImagePage>
            <div className="row">
            {
                DB.map((value,key) => {
                  return (
                    <Item key={key} id={value.id} img={value.image} title={value.title} description={value.descition} view={value.view}></Item>
                  )
              })
            }
            </div>
            </div>
        );
    }
}

export default Home;