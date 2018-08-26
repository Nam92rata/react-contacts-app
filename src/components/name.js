import React, { Component } from 'react'

class Name extends Component {
render(){
    return(
        <li
            className={this.props.info.sex}
            // onClick={() => this.props.handleFavourite(this.props.id)}
            >
            {this.props.info.name} : <span>{this.props.info.phoneNumber}</span>
        </li>
    )
} }
 export default Name;