import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={
            temValue:"",
            userInfo:{}
        }
    }
    getUserEdit =(info)=>{
        this.setState({
            userInfo: info
        })
        this.props.getUserInfoApp(info);
    }
    isShowEdit = () =>{
        if(this.props.editUserStatus === true)
        {
            return <EditUser
            getUserEdit = {(info)=>this.getUserEdit(info)}
            editData = {this.props.editData}
             changeEditUserStatus= {()=>this.props.changeEditUserStatus()}/>
        }
    }

    isChange = (event)=>{
        console.log(event.target.value);
        this.setState({
            temValue:event.target.value
        });
        this.props.checkConnect(this.state.temValue);
    }
    displayButton=()=>{
        if(this.props.displayForm === true)
        {
           return <div className="btn btn-block btn-outline-secondary mt-2" onClick={()=>this.props.connect()}>close</div>
        }
        else
        {
            return  <div className="btn btn-block btn-outline-info mt-2" onClick={()=>this.props.connect()} >Add new</div>
        }
    }
    render() {
        return (         
            <div className="col-12">
                {this.isShowEdit()}
                <div className="form-group mt-3">
                    <div className="btn-group">
                     <input type="text" className="form-control" onChange={(event)=>this.isChange(event)} placeholder="Enter keywords" />
                        <div className="btn btn-primary" onClick={(data)=>this.props.checkConnect(this.state.temValue)}>search</div>
                    </div>
                    <div className="btn-group-btn">
                       {this.displayButton()}
                    </div>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default Search;