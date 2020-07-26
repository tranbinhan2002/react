import React, { Component } from 'react';

class RowData extends Component {
    permissionShow=()=>{
        if(this.props.permission === 1)
        {
            return "Admin";
        }
        else if(this.props.permission === 2)
        {
            return "Customer";
        }
        else
        {
            return "No";
        }
    }
    editClick = () =>{
        this.props.editClickFunction();
        this.props.changeEditUserStatus();
    }
    deleteUser=(idUser)=>{
        this.props.deleteEdit(idUser);
    }
    render() {
        return (
            <tr >
                <td>{this.props.stt+1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.phone}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-success edit" onClick={()=>this.editClick()} ><i className="fa fa-edit" /> Edit</div>
                        <div className="btn btn-danger delete" onClick={(idUser)=>this.deleteUser(this.props.id)} ><i className="fa fa-trash-o" aria-hidden="true" /> Delete</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default RowData;