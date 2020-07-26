import React, { Component  } from 'react';
import DBNews from'./../db/DBNews.json';
import Comment from './Comment';
import {
  Link
} from "react-router-dom";
class Detail extends Component {
    render() {
        return (
            <div>
              {
               DBNews.map((value,key)=>{
            if(value.id===parseInt(this.props.match.params.id,20))
            {
          return(
            <div key={key}>
          <h1 className="mt-4">{value.title}</h1>
          <hr />
          <p>Posted on July 15, 2020 at 12:00 PM</p>
          <img className="img-fluid rounded" src={value.image} alt="" />
            <hr />
          <p className="lead">{value.description}</p>
          <p className="lead"> <i className="fa fa-usd" aria-hidden="true"></i>{value.price}</p>
          <Link to="/cart"> <i className="fa fa-cart-plus cart" aria-hidden="true"></i></Link>
           <Comment></Comment>
          </div>
          )
        }
        return true;
      })
    }       
            </div>        
        );
    }
}

export default Detail;