import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DBAdmin from '../../db/DBAdmin.json';
import { v1 as uuidv1 } from 'uuid';
class ManagerAdmin extends Component {
    constructor(props) {
        super(props);
        this.state={
            displayForm : false,
            dataUser : DBAdmin,
            searchText:'',
            editUserStatus: false,
            editData:{}

        }
    }
    deleteUser= (idUser)=>{
        var temData = this.state.dataUser;
        temData = temData.filter(item=>item.id !== idUser)
        this.setState({
            dataUser:temData
        })
        alert("Delete successfully");
    }
    getUserInfoApp = (info)=>{
        this.state.dataUser.forEach((value,key)=>{
            if(value.id=== info.id)
            {
                value.name =info.name;
                value.phone = info.phone;
                value.permission=info.permission;
            }
       })
    }
    changeEditUserStatus = ()=>{
        this.setState({
            editUserStatus : !this.state.editUserStatus
        });
    }
    editUser = (user)=>{
       
        this.setState({
            editData:user
        });
        console.log(user);
    }

    getNewUser = (name,phone,permission)=>{
        var item = {};
        item.id = uuidv1();
        item.name = name;
        item.phone = phone;
        item.permission= parseInt(permission);
        var items = this.state.dataUser;  
        items.push(item);
        this.setState({
            dataUser: items
        });
        alert("Add successfully");
    }
    changeStatus = ()=>{
        this.setState({
            displayForm : !this.state.displayForm
        });
    }
    getTextSearch = (data)=>{
        this.setState({
            searchText: data
        });
    }
    render() {
        var  result=[];
        this.state.dataUser.forEach((item)=>{
            if(item.name.indexOf(this.state.searchText) !== -1)
            {
                result.push(item);
            }
        });
        return (
            <div>
                <Header></Header>
                <div className="search">
                    <div className="row">
                        <Search
                        getUserInfoApp = {(info)=>this.getUserInfoApp(info)}
                         editData = {this.state.editData}  
                        checkConnect={(data)=>this.getTextSearch(data)}
                         connect={()=>this.changeStatus()} displayForm={this.state.displayForm}
                         editUserStatus ={this.state.editUserStatus}
                         changeEditUserStatus = {()=>this.changeEditUserStatus()} >   
                         </Search>
                        <AddUser add={(name,phone,permission)=>this.getNewUser(name,phone,permission)} displayForm={this.state.displayForm}></AddUser>
                        <TableData  deleteUser={(idUser)=> this.deleteUser(idUser)} changeEditUserStatus = {()=>this.changeEditUserStatus()} editUserFunc={(user)=>this.editUser(user)} dataUser={result}></TableData>
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default ManagerAdmin;


