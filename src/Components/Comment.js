import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state={
            isRedirect:false,
            comment:" "
          }
    }
    isChange = (event) =>{
      const name = event.target.name;
      const value= event.target.value;
      this.setState({
          [name] :value
      });
    }

    submitComment = (event)=>{
        event.preventDefault();
        this.setState({
          isRedirect:true,
        });
      }
    render() {
        if(this.state.isRedirect===true)
        {
          return <Redirect to={"/home"}></Redirect>
        }
        return (
            <div>
                 <div className="card my-4">
              <h5 className="card-header">Leave a Comment:</h5>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <textarea onChange={(event)=>this.isChange(event)} name="comment" className="form-control" rows={3} defaultValue={""} />
                  </div>
                  <button type="submit" className="btn btn-primary" onClick ={(event)=>this.submitComment(event)} >Submit</button>
                </form>
              </div>
            </div>
            <div className="media mb-4">
              <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="img-coment" />
              <div className="media-body">  
                <h5 className="mt-0">Commenter Name</h5>
                {this.state.comment}
              </div>
            </div>
            <div className="media mb-4">
              <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="img-comen" />
              <div className="media-body">
                <h5 className="mt-0">Commenter Name</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </div>
            </div>
        );
    }
}

export default Comment;