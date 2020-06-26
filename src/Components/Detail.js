import React, { Component  } from 'react';
import DBNews from'./../db/DBNews.json';
import Comment from './Comment';
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
          <p>Posted on January 1, 2019 at 12:00 PM</p>
          <img className="img-fluid rounded" src={value.image} alt="" />
            <hr />
          <p className="lead">{value.descition}</p>
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