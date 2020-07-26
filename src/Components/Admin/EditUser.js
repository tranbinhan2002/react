import React, { Component } from 'react'

export default class EditUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : this.props.editData.id,
            name : this.props.editData.name,
            phone : this.props.editData.phone,
            permission : this.props.editData.permission
        }
    }
    
    isChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;   
        this.setState({
            [name] : value   
        });
    }
    saveEdit = ()=>{
        var info={};
        info.id = this.state.id;
        info.name = this.state.name;
        info.phone = this.state.phone;
        info.permission = this.state.permission;
        this.props.getUserEdit(info);
        this.props.changeEditUserStatus();
    }

    render() {
        return (
            <div className="row">
            <div className="col">
        <div className="card bg-secondary mt-2">
            <div className="card-body">
                <h4 className="card-title text-center">Edit User</h4>
                <div className="form-group">
                    <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.editData.name} type="text"  name="name" className="form-control" placeholder="enter user name" />
                </div>
                <div className="form-group">
                    <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.editData.phone} type="text"  name="phone" className="form-control" placeholder="enter phone" />
                </div>
                <div className="form-control" >
                <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.editData.permission} type="custom-select" name="permission" required >
                    <option value={0}>No</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Customer</option>
                </select>
                </div>
                <div className="form-group">
                    <input type="button" onClick = {()=>this.saveEdit()} className="btn btn-block btn-primary" value="Save"/>
                </div>
            </div>
        </div>
        </div>
            </div>
        )
    }
}
