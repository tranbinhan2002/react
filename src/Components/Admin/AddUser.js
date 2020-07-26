import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            phone:"",
            permission:0
        }
    }


    isChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    checkStatus = () => {
        if (this.props.displayForm === true) {
            return (
                <form>
                <div className="card text-right mt-2">
                    <div className="card-body">
                        <h4 className="card-title">New User</h4>
                        <div className="form-group">
                            <input type="text" onChange={(event)=>this.isChange(event)} name="name" className="form-control" placeholder="enter user name" />
                        </div>
                        <div className="form-group">
                            <input type="text" onChange={(event)=>this.isChange(event)} name="phone" className="form-control" placeholder="enter phone" />
                        </div>
                        <div className="form-control" >
                        <select type="custom-select" name="permission" onChange={(event)=>this.isChange(event)} required >
                            <option value={0}>No</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Customer</option>
                        </select>
                        </div>
                        <div className="form-group">
                            <input type="reset" className="btn btn-block btn-primary" onClick={(name,phone,permission)=>this.props.add(this.state.name,this.state.phone,this.state.permission)} value="Add New"/>
                        </div>
                    </div>
                </div>
                </form>
            )
        }
    }
    render() {
        return (
            <div className="col-4">
               {this.checkStatus()}
            </div>

        );
    }
}

export default AddUser;