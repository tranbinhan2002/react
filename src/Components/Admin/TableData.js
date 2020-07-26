import React, { Component } from 'react';
import RowData from './RowData';

class TableData extends Component {
    deleteEdit =(idUser)=>{
        this.props.deleteUser(idUser);
    }
    mappingData = ()=> this.props.dataUser.map((value,key)=>(

        <RowData deleteEdit = {(idUser)=> this.deleteEdit(idUser)} changeEditUserStatus = {()=>this.props.changeEditUserStatus()} editClickFunction={(user)=>this.props.editUserFunc(value)} key={key} stt={key} id={value.id} userName={value.name}  phone={value.phone} permission={value.permission}></RowData>
    ))
    render() {  
        return (
            <div className="col">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Stt</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>permission</th>
                            <th>manipulation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingData()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;