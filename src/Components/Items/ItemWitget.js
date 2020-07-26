import React, { Component } from 'react';
class ItemWitget extends Component {
    
    render() {
        return (
            <div>
                <img className="imgSearch" src={this.props.img} alt="" />
            </div>
        );
    }
}

export default ItemWitget;